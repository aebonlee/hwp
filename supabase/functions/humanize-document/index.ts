const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

function buildPrompt(
  markdown: string,
  intensity: string,
  tone: string
): string {
  const intensityMap: Record<string, string> = {
    light: "최소한의 변경만 가합니다. 원문의 구조와 표현을 최대한 유지하되, AI 특유의 패턴만 자연스럽게 수정합니다.",
    moderate:
      "중간 수준으로 변환합니다. 문장 구조를 재배치하고, 어휘를 다양하게 바꾸되 원래 의미는 보존합니다.",
    aggressive:
      "적극적으로 변환합니다. 문장을 전면 재구성하고, 표현을 대폭 바꾸어 완전히 새로 쓴 느낌을 줍니다.",
  };

  const toneMap: Record<string, string> = {
    formal: "격식체(~합니다, ~입니다)를 사용합니다.",
    casual: "편안한 구어체(~해요, ~거든요)를 사용합니다.",
    academic: "학술적 문체(~이다, ~것으로 사료된다)를 사용합니다.",
  };

  return `당신은 한국어 문서 리라이팅 전문가입니다.
아래 마크다운 문서를 사람이 직접 작성한 것처럼 자연스럽게 다시 작성해 주세요.

## 변환 규칙
- ${intensityMap[intensity] || intensityMap.moderate}
- ${toneMap[tone] || toneMap.formal}
- 마크다운 형식(제목, 목록, 표 등)은 유지합니다.
- 원문의 핵심 내용과 정보는 반드시 보존합니다.
- AI가 자주 사용하는 상투적 표현("물론", "다양한", "중요한")을 피합니다.
- 문단 수를 원문과 동일하게 유지합니다.

## 원문
${markdown}

## 지시
위 원문을 규칙에 따라 변환한 결과만 출력하세요. 설명이나 주석 없이 변환된 마크다운만 반환합니다.`;
}

async function callClaude(prompt: string, apiKey: string) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5-20250514",
      max_tokens: 8192,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`Claude API error: ${res.status} — ${errBody}`);
  }

  const data = await res.json();
  return {
    content: data.content[0]?.text || "",
    model: data.model,
    prompt_tokens: data.usage?.input_tokens || 0,
    completion_tokens: data.usage?.output_tokens || 0,
  };
}

async function callOpenAI(prompt: string, apiKey: string) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      max_tokens: 8192,
      messages: [{ role: "user", content: prompt }],
    }),
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`OpenAI API error: ${res.status} — ${errBody}`);
  }

  const data = await res.json();
  return {
    content: data.choices[0]?.message?.content || "",
    model: data.model,
    prompt_tokens: data.usage?.prompt_tokens || 0,
    completion_tokens: data.usage?.completion_tokens || 0,
  };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const {
      markdown,
      intensity = "moderate",
      tone = "formal",
      provider = "claude",
      apiKey: userApiKey,
    } = await req.json();

    if (!markdown || typeof markdown !== "string") {
      return new Response(
        JSON.stringify({ error: "markdown field is required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // 텍스트 길이 제한 (약 50,000자)
    if (markdown.length > 50000) {
      return new Response(
        JSON.stringify({ error: "Text too long (max 50,000 characters)" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const prompt = buildPrompt(markdown, intensity, tone);

    const startTime = Date.now();
    let result;

    if (provider === "openai") {
      const key =
        userApiKey || Deno.env.get("OPENAI_API_KEY");
      if (!key) {
        return new Response(
          JSON.stringify({ error: "OPENAI_API_KEY not configured" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      result = await callOpenAI(prompt, key);
    } else {
      const key =
        userApiKey || Deno.env.get("ANTHROPIC_API_KEY");
      if (!key) {
        return new Response(
          JSON.stringify({ error: "ANTHROPIC_API_KEY not configured" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      result = await callClaude(prompt, key);
    }

    const elapsed = Date.now() - startTime;

    return new Response(
      JSON.stringify({
        humanized: result.content,
        model: result.model,
        prompt_tokens: result.prompt_tokens,
        completion_tokens: result.completion_tokens,
        generation_time_ms: elapsed,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        detail: (err as Error).message,
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

/* ───────────────────────────────────────────
 *  Document Generator types
 * ─────────────────────────────────────────── */

export type DocumentType = 'report' | 'letter' | 'minutes' | 'proposal' | 'resume' | 'certificate';

export interface GeneratorFieldDef {
  key: string;
  labelKo: string;
  labelEn: string;
  type: 'text' | 'textarea' | 'date' | 'number';
  required?: boolean;
  placeholder?: string;
}

export interface GeneratorSection {
  id: string;
  titleKo: string;
  titleEn: string;
  fields: GeneratorFieldDef[];
}

export interface DocumentTemplate {
  type: DocumentType;
  nameKo: string;
  nameEn: string;
  icon: string;
  descKo: string;
  descEn: string;
  sections: GeneratorSection[];
  markdownTemplate: string;
}

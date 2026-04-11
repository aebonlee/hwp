/* ───────────────────────────────────────────
 *  Domain types for HWP Web
 * ─────────────────────────────────────────── */

// ─── HWP Document ───
export interface HwpDocument {
  id: string;
  user_id: string;
  title: string;
  content: string;
  metadata: Record<string, unknown>;
  template_id: string | null;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

export interface HwpDocumentInput {
  title?: string;
  content?: string;
  metadata?: Record<string, unknown>;
  template_id?: string | null;
  is_public?: boolean;
}

// ─── Template ───
export interface HwpTemplate {
  id: string;
  user_id: string;
  title: string;
  description: string;
  content: string;        // {{field}} 포함 마크다운
  fields: TemplateFieldDef[];
  created_at: string;
  updated_at: string;
}

export interface TemplateFieldDef {
  key: string;
  label: string;
  type: 'text' | 'textarea';
  placeholder: string;
}

// ─── Conversion ───
export interface ConversionRecord {
  id: number;
  user_id: string | null;
  direction: 'hwpx_to_md' | 'hwp_to_md' | 'md_to_hwpx';
  file_name: string | null;
  file_size: number | null;
  created_at: string;
}

export type ConversionDirection = ConversionRecord['direction'];

// ─── User / Auth ───
export interface UserProfile {
  id: string;
  email: string;
  display_name: string;
  avatar_url: string;
  phone: string;
  provider: string;
  role: string;
  signup_domain: string;
  visited_sites: string[];
  last_sign_in_at: string;
  updated_at: string;
}

export interface AccountBlock {
  status: string;
  reason: string;
  suspended_until: string | null;
}

// ─── Site Config ───
export interface BrandPart {
  text: string;
  className: string;
}

export interface MenuItem {
  path: string;
  labelKey: string;
  activePath?: string;
  dropdown?: SubMenuItem[];
}

export interface SubMenuItem {
  path: string;
  labelKey: string;
}

export interface FamilySite {
  name: string;
  url: string;
}

export interface ColorOption {
  name: ColorTheme;
  color: string;
}

export interface CompanyInfo {
  name: string;
  ceo: string;
  bizNumber: string;
  salesNumber?: string;
  publisherNumber?: string;
  address: string;
  email: string;
  phone: string;
  kakao?: string;
  businessHours?: string;
}

export interface SiteFeatures {
  shop: boolean;
  community: boolean;
  search: boolean;
  auth: boolean;
  license: boolean;
}

export interface SiteConfig {
  id: string;
  name: string;
  nameKo: string;
  description: string;
  url: string;
  dbPrefix: string;
  parentSite: { name: string; url: string };
  brand: { parts: BrandPart[] };
  themeColor: string;
  company: CompanyInfo;
  features: SiteFeatures;
  colors: ColorOption[];
  menuItems: MenuItem[];
  footerLinks: { path: string; labelKey: string }[];
  familySites: FamilySite[];
}

// ─── Toast ───
export type ToastType = 'info' | 'success' | 'error' | 'warning';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

// ─── Theme ───
export type ThemeMode = 'auto' | 'light' | 'dark';
export type ColorTheme = 'blue' | 'red' | 'green' | 'purple' | 'orange';

// ─── Language ───
export type Language = 'ko' | 'en';

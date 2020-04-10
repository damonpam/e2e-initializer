import path from 'path';

export const CURRENT_DIR = process.cwd();
export const TEMPLATES_DIR = path.join(__dirname, 'templates');
export const TEMPLATE_COMMON = 'common';
export const COMMON_DIR = path.join(TEMPLATES_DIR, TEMPLATE_COMMON)

export const ENCODING_UTF8 = 'utf8';

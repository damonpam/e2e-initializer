import path from 'path';

export const CURRENT_DIR = process.cwd();
export const TEMPLATES_DIR = path.resolve(__dirname, '../templates');
export const TEMPLATE_COMMON = 'common';
export const COMMON_DIR = path.resolve(TEMPLATES_DIR, TEMPLATE_COMMON);

export const ENCODING_UTF8 = 'utf8';

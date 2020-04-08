import * as ejs from 'ejs';
import { ProjectData } from '../types/ProjectData';

export function render(content: string, data: ProjectData) {
  return ejs.render(content, data);
}


import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';

import { initThemes } from "./themes";
initThemes();

export * from './CodeViewer';
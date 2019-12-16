import * as monaco from "monaco-editor";
import { theme } from "./theme";

export const initAtomMaterialDark = () => {
  monaco.editor.defineTheme("atom-material-dark", {
    "base": "vs-dark",
    "inherit": true,
    "rules": [
      {
        "foreground": "737c7c",
        "token": "comment"
      },
      {
        "foreground": "9fff60",
        "token": "string"
      },
      {
        "foreground": "ff73fd",
        "token": "constant.numeric"
      },
      {
        "foreground": "ae81ff",
        "token": "constant.language"
      },
      {
        "foreground": "90cc99",
        "token": "constant.character"
      },
      {
        "foreground": "90cc99",
        "token": "constant.other"
      },
      {
        "foreground": "c8c5ff",
        "token": "variable"
      },
      {
        "foreground": "8ecbfe",
        "token": "keyword"
      },
      {
        "foreground": "f92672",
        "token": "storage"
      },
      {
        "foreground": "66d9ef",
        "fontStyle": "italic",
        "token": "storage.type"
      },
      {
        "foreground": "ffffac",
        "fontStyle": " underline",
        "token": "entity.name.class"
      },
      {
        "foreground": "9b5c2e",
        "fontStyle": "italic underline",
        "token": "entity.other.inherited-class"
      },
      {
        "foreground": "ffd2a7",
        "token": "entity.name.function"
      },
      {
        "foreground": "c0c5fe",
        "fontStyle": "italic",
        "token": "variable.parameter"
      },
      {
        "foreground": "f92672",
        "token": "entity.name.tag"
      },
      {
        "foreground": "a6e22e",
        "token": "entity.other.attribute-name"
      },
      {
        "foreground": "66d9ef",
        "token": "support.function"
      },
      {
        "foreground": "66d9ef",
        "token": "support.constant"
      },
      {
        "foreground": "f7ffb6",
        "token": "support.type"
      },
      {
        "foreground": "f7ffb6",
        "token": "support.class"
      },
      {
        "foreground": "c5c8c6",
        "token": "source.ruby"
      },
      {
        "foreground": "99cc99",
        "token": "constant.other.symbol.ruby.19syntax"
      },
      {
        "foreground": "c6c5e2",
        "token": "variable.other.constant.ruby"
      },
      {
        "foreground": "ffff9a",
        "token": "entity.name.type.class.ruby"
      },
      {
        "foreground": "ffeb9b",
        "token": "entity.name.type.module.ruby"
      },
      {
        "foreground": "ededed",
        "token": "source.ruby.embedded.source"
      },
      {
        "foreground": "0b9ba0",
        "token": "source.ruby.embedded.source punctuation.section.embedded.ruby"
      },
      {
        "foreground": "95cbfe",
        "token": "storage.modifier.import.java"
      },
      {
        "foreground": "a0d2ff",
        "token": "storage.modifier.java"
      },
      {
        "foreground": "ffffb6",
        "fontStyle": " underline",
        "token": "entity.name.type.class.java"
      },
      {
        "foreground": "cfcb82",
        "token": "storage.type.primitive.array.java"
      },
      {
        "foreground": "cfcb90",
        "token": "storage.type.object.array.java"
      },
      {
        "foreground": "f770fd",
        "token": "constant.numeric.java"
      },
      {
        "foreground": "cfcb89",
        "token": "storage.type.java"
      },
      {
        "foreground": "ededed",
        "token": "keyword.operator.dereference.java"
      },
      {
        "foreground": "9fff60",
        "token": "markup.inserted.diff"
      },
      {
        "foreground": "9fff60",
        "token": "meta.diff.header.to-file"
      },
      {
        "foreground": "f92672",
        "token": "markup.deleted.diff"
      },
      {
        "foreground": "f92672",
        "token": "meta.diff.header.from-file"
      }
    ],
    "colors": {
      "editor.foreground": "#d4d4d4",
      "editor.background": "#263238",
      "editor.selectionBackground": "#3b4d56",
      "editor.lineHighlightBackground": "#212b30",
      "editorCursor.foreground": "#009688",
      "editorWhitespace.foreground": "#49483E"
    }
  });
};

import * as monaco from "monaco-editor";
import React, { useRef, useEffect } from "react";

export const CodeViewer = () => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container && container.current) {
      monaco.editor.create(container.current, {
        value: "",
        language: "html",
        theme: "atom-material-dark"
      });
    }
  }, []);

  return <div ref={container} style={{ width: "100%", height: 500 }} />;
};

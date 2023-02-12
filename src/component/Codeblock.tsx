import React, { useEffect } from "react";
import Prism from "prismjs";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
};

export default CodeBlock;

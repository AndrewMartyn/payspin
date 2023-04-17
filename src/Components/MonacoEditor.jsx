import React, { useRef } from "react";
import Editor from "@monaco-editor/react";

const MonacoEditor = ({ onChange, initialContent, readOnly }) => {
  const editorRef = useRef(null);

  const onEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  return (
    <Editor
      onMount={onEditorDidMount}
      onChange={onChange}
      value={initialContent}
      height="500px"
      theme="vs-dark"
      language="markdown"
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 16,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        domReadOnly: readOnly,
        readOnly: readOnly,
        tabSize: 2,
        contextmenu: false,
      }}
    />
  );
};

export default MonacoEditor;

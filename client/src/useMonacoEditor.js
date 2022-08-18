import { useMonaco } from "@monaco-editor/react";
import React from "react";

const useMonacoEditor = () => {
    const editorRef = useRef(null);
    const monacoRef = useMonaco();
};

export default useMonacoEditor;

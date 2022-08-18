import React, { useState, useRef } from "react";

import Editor, { useMonaco } from "@monaco-editor/react";

let editorRef = null;
const MonacoEditor = ({ ...props }) => {
    const handleOnMount = (editor, monaco) => {
        editorRef = editor;
    };

    const options = {
        fontSize: "24px",
        readOnly: false,
        minimap: false,
    };

    return <Editor {...props} options={options} theme="vs-dark" onMount={handleOnMount} />;
};

export const setEditorValue = (value) => {
    editorRef.getModel().setValue(value);
};

export const getEditorValue = () => {
    return editorRef.getModel().getValue();
};

export default MonacoEditor;

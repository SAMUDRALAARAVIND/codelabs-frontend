import React, { useRef, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import "./editor.scss";
import { createEditorModel } from "../editor-model";
import { observer, useObservable } from "@legendapp/state/react";
import { Select } from "antd";
import BrightIcon  from '@mui/icons-material/Brightness4Outlined';
import DarkIcon from '@mui/icons-material/Brightness4';
import { batch } from "@legendapp/state";
import { Extension } from "@codemirror/state";
import { OutputSection } from "./outputSection";

const darkTheme = createTheme({
  theme: "dark",
  settings: {
    background: "#15222E",
    foreground: "#ABB2BF",
    caret: "aqua",
    selection: "#3A3D41",
    selectionMatch: "#3A3D41",
    lineHighlight: "#2C313C",
    gutterBackground: "#15222E",
    gutterForeground: "#73726B",
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "#E06050" },
    { tag: [t.string, t.special(t.brace)], color: "#71A14C" },
    { tag: t.number, color: "#D19A5F" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#C66BAA" },
    { tag: t.operator, color: "#56B6C2" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "#ABA799" },
    { tag: t.tagName, color: "#D8903A" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

const lightTheme = createTheme({
  theme: "light",
  settings: {
    background: "#EEF5FE",
    foreground: "#923A42",
    caret: "blue",
    selection: "#B0C9DC",
    selectionMatch: "#B0C9DC",
    lineHighlight: "#F5F5F5",
    gutterBackground: "#FFFFFF",
    gutterForeground: "#D9B89F",
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "#E06050" },
    { tag: [t.string, t.special(t.brace)], color: "green" },
    { tag: t.number, color: "red" },
    { tag: t.bool, color: "#5c6166" },
    { tag: t.null, color: "#5c6166" },
    { tag: t.keyword, color: "#C564A4" },
    { tag: t.operator, color: "#6F3A42" },
    { tag: t.className, color: "#5c6166" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "red" },
    { tag: t.tagName, color: "#D8903A" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

const languageOptions = [
  {
    value: "js",
    label: "JavaScript(Nodejs)",
  },
  {
    value: "cpp",
    label: "C++ 17",
    disabled: false,
  },
  {
    value: "java",
    label: "Java",
    disabled: true,
  },
  {
    value: "py",
    label: "Python 3",
    disabled: true,
  },
];

export const Editor = observer(() => {
  const code = useObservable('')
  const language = useObservable('js')
  const themeText = useObservable('dark')
  const themeObject = useObservable(darkTheme)
  const editorModel$ = useRef(createEditorModel()).current;

  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    code.set?.(value)
  }, []);

  const runCode = () => {
    const payload = {
      code : code.get?.(),
      language: language?.get?.(),
    };
    editorModel$.actions.runCode(payload);
  };

  const changeLanguage = (newLanguage: any) => {
    language?.set?.(newLanguage?.target?.value)
  }

  const toggleTheme = () => {
    batch(() => {
      themeText?.set?.((old) => old === 'dark' ? 'light' : 'dark')
      // @ts-ignore
      themeObject?.set?.(themeObject?.get?.() === darkTheme ? lightTheme : darkTheme );
    })
  }

  return (
    <div className="code-editor-container">
      <div className="top-container">
        <div className="left-options"></div>
        <div className="right-options">
          <select onChange={changeLanguage}>
            {
              languageOptions.map((language, key) => {
                return (
                  <option disabled={language.disabled} key={language.value} value={language.value}>{language.label}</option>
                )
              })
            }
          </select>
          {
            themeText?.get?.() === 'dark' ? <DarkIcon onClick={toggleTheme} /> : <BrightIcon onClick={toggleTheme}/>
          }
        </div>
      </div>
      <CodeMirror
        className="code-editor"
        height="75vh"
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={themeObject?.get?.()}
      />
      <div className="bottom-container">
        <div>
          <OutputSection />
        </div>
        <div className="btn-group">
          <button className="btn outlined-btn" onClick={runCode}>
            Run Code
          </button>
          <button className="btn solid-btn">Submit</button>
        </div>
      </div>
      <div className="output-section">{editorModel$.obs.data?.get?.()}</div>
    </div>
  );
});

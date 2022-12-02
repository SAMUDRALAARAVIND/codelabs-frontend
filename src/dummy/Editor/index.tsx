import React,{useState} from "react";
import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from '@uiw/codemirror-themes';
import { javascript } from "@codemirror/lang-javascript";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import BackupIcon from '@mui/icons-material/Backup';
import { tags as t } from '@lezer/highlight';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import "./index.scss";
const editorValue = `consol.log("Hello world") ;`

const darkTheme = createTheme({
  theme: 'dark',
  settings: {
    background: '#15222E',
    foreground: '#ABB2BF',
    caret: 'aqua',
    selection: '#3A3D41',
    selectionMatch: '#3A3D41',
    lineHighlight: '#2C313C',
    gutterBackground: '#15222E',
    gutterForeground: '#73726B',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#E06050' },
    { tag: [t.string, t.special(t.brace)], color: '#71A14C' },
    { tag: t.number, color: '#D19A5F' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#C66BAA' },
    { tag: t.operator, color: '#56B6C2' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: '#ABA799' },
    { tag: t.tagName, color: '#D8903A' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
});

const lightTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#FFFFFF',
    foreground: '#923A42',
    caret: 'aqua',
    selection: '#B0C9DC',
    selectionMatch: '#B0C9DC',
    lineHighlight: '#F5F5F5',
    gutterBackground: '#FFFFFF',
    gutterForeground: '#D9B89F',
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: '#E06050' },
    { tag: [t.string, t.special(t.brace)], color: 'green' },
    { tag: t.number, color: 'red' },
    { tag: t.bool, color: '#5c6166' },
    { tag: t.null, color: '#5c6166' },
    { tag: t.keyword, color: '#C564A4' },
    { tag: t.operator, color: '#6F3A42' },
    { tag: t.className, color: '#5c6166' },
    { tag: t.definition(t.typeName), color: '#5c6166' },
    { tag: t.typeName, color: '#5c6166' },
    { tag: t.angleBracket, color: 'red' },
    { tag: t.tagName, color: '#D8903A' },
    { tag: t.attributeName, color: '#5c6166' },
  ],
})

export const Editor = () => {
  const [theme , setTheme] = useState(darkTheme)
  const [code ,setCode] = useState(editorValue)

  const onChange = React.useCallback((value: any, viewUpdate: any) => {
    setCode(value)
  }, []);

  const changeTheme = () => {
    setTheme(oldTheme => oldTheme === lightTheme ? darkTheme : lightTheme )
  }

  const runProgram = () => {
    let userCode = new Function(code) 
    userCode() 
  }

  return (
    <div className="code-editor-container">
      <div className="options">
        <DarkModeIcon 
          className="theme-settings" 
          onClick={changeTheme}
        />
      </div>
      <CodeMirror
        className="code-editor"
        height="68vh"
        width="100%"
        value={code}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
        theme={theme}
      />
      <div className="btn-group">
        <button onClick={runProgram}>
          <PlayArrowIcon />
          Run
        </button>
        <button>
          <BackupIcon />
          Submit
        </button>
      </div>
    </div>
  );
};

import CodeMirror from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { javascript } from "@codemirror/lang-javascript";
import { tags as t } from "@lezer/highlight";
import SplitPane, { Pane } from 'split-pane-react';
import 'split-pane-react/esm/themes/default.css'
import { useState } from "react";

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
export const FrontEnd = () => {
    const [sizes , setSizes] = useState([
        200,
        '30%',
        'auto'
    ])
    const layoutCSS = {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border:'1px solid red'
    };
    return (
        <div style={{height: 500}}>
            <SplitPane
                split='vertical'
                sizes={sizes}
                onChange={setSizes}
            >
                <Pane minSize={50} maxSize='50%'>
                  <div style={{ ...layoutCSS, background: '#ddd' }}>
                    pane1
                  </div>
                </Pane>
                <div style={{ ...layoutCSS, background: '#d5d7d9' }}>
                    pane2
                </div>
                <div style={{ ...layoutCSS, background: '#a1a5a9' }}>
                    pane2
                </div>
            </SplitPane>
        </div>
    )
}
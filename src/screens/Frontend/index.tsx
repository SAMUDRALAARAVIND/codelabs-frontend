import CodeMirror from "@uiw/react-codemirror";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import { useEffect, useState } from "react";
import { dark, light } from "../../themes/index";

import { javascript } from "@codemirror/lang-javascript";
import { xml } from "@codemirror/lang-xml";
import { css } from "@codemirror/lang-css";
import "./index.scss"
import { TopNavigation } from "../global-components/top-navigation";
// USE INLINE CSS ONLY AS THERE"S AN ISSUE WITH EXTERNAL CSS

export const FrontEnd = () => {
  const [sizes, setSizes] = useState([200, 200, 200]);
  const [htmlCode, setHtmlCode] = useState('<h1>Hello Codelabs</h1>')
  const [cssCode, setCssCode] = useState(`*{
  margin: 0;
  padding: 0;
}
  `)
  const [jsCode, setJsCode] = useState('')
  const [srcDoc, setSrcDoc] = useState('')
  const editorHeight = 400 ;

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${htmlCode}</body>
        <style>${cssCode}</style>
        <script>${jsCode}</script>
      </html>
    `);
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [htmlCode, cssCode, jsCode])

  return (
    <div>
      <div style={{ height: editorHeight}}>
        <SplitPane
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
          resizerSize={10}
        >
            <Pane minSize={50} style={{display:'flex', flexFlow:'column'}}>
                  <div style={{padding:'20px', backgroundColor:'#1D1E22', color: 'white'}}>
                    <h3>{'HTML'}</h3>
                  </div>
                  <CodeMirror
                    style={{overflowY:'hidden'}}
                    height={`${editorHeight}px`}
                    theme={dark}
                    value={htmlCode}
                    onChange={setHtmlCode}
                    extensions={[xml()]}
                  >
                </CodeMirror>
              </Pane>
              <Pane minSize={50} style={{display:'flex', flexFlow:'column'}}>
                  <div style={{padding:'20px', backgroundColor:'#1D1E22', color: 'white'}}>
                    <h3>{'CSS'}</h3>
                  </div>
                  <CodeMirror
                    style={{overflowY:'hidden'}}
                    height={`${editorHeight}px`}
                    theme={dark}
                    value={cssCode}
                    onChange={setCssCode}
                    extensions={[css()]}
                  >
                </CodeMirror>
              </Pane>
              <Pane minSize={50} style={{display:'flex', flexFlow:'column'}}>
                  <div style={{padding:'20px', backgroundColor:'#1D1E22', color: 'white', display:'flex', flexFlow:'row wrap', justifyContent:'space-between'}}>
                    <h3>{'JavaScript'}</h3>
                  </div>
                  <CodeMirror
                    style={{overflowY:'hidden'}}
                    height={`${editorHeight}px`}
                    theme={dark}
                    value={jsCode}
                    onChange={setJsCode}
                    extensions={[javascript()]}
                  >
                </CodeMirror>
              </Pane>
        </SplitPane>
      </div>
      <div className="output">
        <iframe 
          srcDoc={srcDoc}
          style={{overflowY:'scroll', height: `calc(96vh - ${editorHeight}px)`}}
          title="output"
          sandbox="allow-scripts"
          frameBorder={10}
          width={'100%'}
          height={`calc(100vh - ${editorHeight}px)`}
        />
      </div>
    </div>
  );
};

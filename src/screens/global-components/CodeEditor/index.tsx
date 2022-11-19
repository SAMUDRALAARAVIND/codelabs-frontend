import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
import "./index.scss";

interface CodeEditorProps {
  width?: string;
  height?: string;
  readonly?: boolean;
  value: string;
  className?: string;
}

export const CodeEditor = ({value}: CodeEditorProps) => {
  return (
    <div className="editor-root-container">
      <AceEditor
        className="editor"
        mode="javascript"
        theme="monokai"
        fontSize={16}
        readOnly={false}
        value={value}
      />
    </div>
  );
};

import { Button, Drawer, Space } from "antd";
import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "./index.scss";

export const OutputBottomDrawer = () => {
  const [open, setOpen] = useState(true);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="outut-section-root-container">
        <button onClick={showDrawer}>Show Drawer</button>
      <Drawer
        title="Drawer with extra actions"
        className="bottom-drawer"
        style={{ width: '60%', float:'right', marginRight:'20px'}}
        placement={"bottom"}
        onClose={onClose}
        closable={false}
        open={open}
        extra={
          <KeyboardArrowDownIcon className="close-drawer-icon" onClick={onClose}/>
        }
      >
        <p style={{border: '1px solid red'}}>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

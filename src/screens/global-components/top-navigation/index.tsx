import "../../common/colors-css.css"
import "./index.scss";

import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const linksList = [
  
  {
    to:"/",
    displayText: 'Home',
    identifier:'HOME'
  },
  {
    to:'/problems',
    displayText: 'Problems',
    identifier: 'PROBLEMS',
  },
  {
    to: "/courses",
    displayText: "Courses",
    identifier: 'COURSES'
  },
];
interface TopNavigationProps {
  currentScreen?: string
}

function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}

export const TopNavigation = (props:TopNavigationProps) => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const {innerWidth , innerHeight} = windowSize
  const [showNav, setShowNav] = useState(false)
  const [showApplyNow , setShowApplyNow] = useState(false) 
  
  useEffect(() => {
    if(innerWidth > 600) setShowNav(true)
    else setShowNav(false)
  }, [windowSize])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="root-container">
      <div className="logo">
        <Link to="/" className="link-header"><h3>CodeLabs</h3></Link>
      </div>
      {
         innerWidth < 600 && 
         <div>
            <MenuIcon className="menu" onClick={() => setShowNav((old) => !old)}/>
          </div>
      }
      {
        showNav && <div className="nav-right-half">
        {linksList.map((link, key) => {
          return (
            <div key={key}>
              <Link className="link" to={link.to}>{link.displayText}</Link>
            </div>
          );
        })}
        <div className="btn link" onClick={() => setShowApplyNow(old => old? false: true)}> 
            Apply Now
        </div>
      </div>
      }
    </div>
  );
};


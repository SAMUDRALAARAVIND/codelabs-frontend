import "./index.css"

import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const mediaLinks = [
  {
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/samudrala-aravind-13599b172/",
  },
  {
    icon: TelegramIcon,
    link: "https://t.me/codelabss",
  },
  {
    icon: YouTubeIcon,
    link: "https://www.youtube.com/channel/UCe_oARd1aM6hsKpH4NKBjKw",
  },
  {
    icon: InstagramIcon,
    link: "https://instagram.com",
  },
];

export const SocialMediaLinks = () => {
  return (
    <div className="social-media-icons-root-container">
      {mediaLinks?.map?.((mediaLink, key) => {
        return (
          <div key={key} className="socila-media-icons-icon">
            <a target="_blank" href={mediaLink.link} className='socila-media-icons-icon-link'>
              <mediaLink.icon />
            </a>
          </div>
        );
      })}
    </div>
  );
};

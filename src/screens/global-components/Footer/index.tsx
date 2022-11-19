import "./index.css"

import { Link } from "react-router-dom"
import { SocialMediaLinks } from "./social-media"

const footerLinks = [
    {
        link: '/courses' ,
        title: 'Courses'
    },
    {
        link: '/' ,
        title: 'Refer & Earn'
    }
]
export const Footer = () => {
    return (
        <div className="footer-root-container">
             <div className="footer-social-media">
                <h3 style={{color: 'blue'}}>CodeLabs</h3>
                <div className="footer-social-media-right">
                    <b>Follow Us -</b>
                    <SocialMediaLinks />
                </div>
             </div>
             <div className="footer-links">
                {
                    footerLinks.map((link, key) => {
                        return (
                            <Link className="footer-link" key={key} to={link.link}>
                                {link.title}
                            </Link>
                        )
                    })
                }
             </div>
        </div>
    )
}
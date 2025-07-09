import { ItemList } from "./itemlist/itemlist";
import { toFill } from "../../toFill";

import "./profile.styles.css";

export function Profile({ page }) {

    const data = toFill.data;
    return (
        <div className="profile">
            <h1>{page} Page</h1>
            <p>{data.profile.descriptionLarge}</p>
            <div className="profile-button-group">
                <button onClick={() => window.open(data.profile.resumeURL, "_blank")} className="profile-button  resume-button">
                    <svg fill="#000000" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M500.203,236.907L30.869,2.24c-6.613-3.285-14.443-2.944-20.736,0.939C3.84,7.083,0,13.931,0,21.333v469.333    c0,7.403,3.84,14.251,10.133,18.155c3.413,2.112,7.296,3.179,11.2,3.179c3.264,0,6.528-0.747,9.536-2.24l469.333-234.667    C507.435,271.467,512,264.085,512,256S507.435,240.533,500.203,236.907z"/>
                        </g>
                    </g>
                    </svg>
                    <p className="profile-button-text">Resume</p>
                </button>
                <button onClick={() => window.open(data.profile.contact.socials.linkedin.url, "_blank")} className="profile-button linkedin-button">
                    <svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="white">
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="invisible_box" data-name="invisible box">
                                <rect width="48" height="48" fill="none"/>
                            </g>
                            <g id="icons_Q2" data-name="icons Q2">
                                <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2Zm0,40A18,18,0,1,1,42,24,18.1,18.1,0,0,1,24,42Z"/>
                                <path d="M24,20a2,2,0,0,0-2,2V34a2,2,0,0,0,4,0V22A2,2,0,0,0,24,20Z"/>
                                <circle cx="24" cy="14" r="2"/>
                            </g>
                        </g>
                    </svg>
                    <p className="profile-button-text">LinkedIn</p>
                </button>
            </div>
            <ItemList
                heading="Today's Top Picks for recruiter"
                type={page}
                items={[
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Skills",
                        redirectURL: "/skills",
                        type: ""
                    },
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Experience",
                        redirectURL: "/work-experience",
                        type: ""
                    },
                   {
                        image: "https://picsum.photos/100/100",
                        title: "Recommendations",
                        redirectURL: "/recommendations",
                        type: "Developer"
                    },
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Projects",
                        redirectURL: "/projects",
                        type: ""
                    },
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Certificates",
                        redirectURL: "/certificates",
                        type: ""
                    },
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Contact Me",
                        redirectURL: "/contact",
                        type: ""
                    }
                ]}
            />

            <ItemList
                heading={`Continue Watching for ${page}`}
                type={page}
                items={[
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Music",
                        redirectURL: "/music",
                        type: "stalker"
                    },
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Blogs",
                        redirectURL: "/blogs",
                        type: ""
                    },
                    {
                        image: "https://picsum.photos/100/100",
                        title: "Contact Me",
                        redirectURL: "/contact",
                        type: ""
                    }
                ]}
            />
        </div>
    );
}
import { ItemList } from "./itemlist/itemlist";
import { toFill } from "../toFill";

export function Profile({ page }) {

    const data = toFill.data;
    return (
        <div className="profile">
            <h1>{page} Page</h1>
            <p>{data.profile.descriptionLarge}</p>
            <button onClick={() => window.open(data.profile.resumeURL, "_blank")} className="btn  resume-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
                    <circle cx="12" cy="7" r="4" />
                    <line x1="8" y1="11" x2="16" y2="11" />
                    <line x1="8" y1="15" x2="16" y2="15" />
                </svg>
                <p>Resume</p>
            </button>
            <button onClick={() => window.open(data.profile.contact.socials.linkedin.url, "_blank")} className="btn linkedin-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-8 0v2" />
                    <circle cx="12" cy="7" r="4" />
                    <line x1="8" y1="11" x2="16" y2="11" />
                    <line x1="8" y1="15" x2="16" y2="15" />
                </svg>
                <p>LinkedIn</p>
            </button>
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
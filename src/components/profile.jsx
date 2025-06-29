import { ItemList } from "./itemlist";

export function Profile({ page }) {
    return (
        <div className="profile">
            <h1>{page} Page</h1>
            <p>This is the {page} profile page.</p>
            <p>Here you can find information about the {page}.</p>
            <p>Feel free to explore the {page} profile and connect with the user.</p>
            <ItemList
                heading="Featured Items"
                type={page}
                items={[
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Skills",
                        redirectURL: "/skills",
                        type: ""
                    },
{
                        image: "https://via.placeholder.com/150",
                        title: "Experience",
                        redirectURL: "/work-experience",
                        type: ""
                    },
                  {
                        image: "https://via.placeholder.com/150",
                        title: "Recommendations",
                        redirectURL: "/recommendations",
                        type: "Developer"
                    },
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Projects",
                        redirectURL: "/projects",
                        type: ""
                    },
{
                        image: "https://via.placeholder.com/150",
                        title: "Certificates",
                        redirectURL: "/certificates",
                        type: ""
                    },
                    {
                        image: "https://via.placeholder.com/150",
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
                        image: "https://via.placeholder.com/150",
                        title: "Music",
                        redirectURL: "/music",
                        type: "stalker"
                    },
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Blogs",
                        redirectURL: "/blogs",
                        type: ""
                    },
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Contact Me",
                        redirectURL: "/contact",
                        type: ""
                    }
                ]}
            />
        </div>
    );
}
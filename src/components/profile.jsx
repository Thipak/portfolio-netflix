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
                        title: "Sample Item",
                        redirectURL: "/item/sample",
                        type: "Developer"
                    },
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Another Item",
                        redirectURL: "/item/another",
                        type: "Adventurer"
                    },
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Third Item",
                        redirectURL: "/item/third",
                        type: "Recruiter"
                    }
                ]}
            />

            <ItemList
                heading={`Continue Watching for ${page}`}
                type={page}
                items={[
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Sample Item",
                        redirectURL: "/item/sample",
                        type: "Developer"
                    },
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Another Item",
                        redirectURL: "/item/another",
                        type: "Adventurer"
                    },
                    {
                        image: "https://via.placeholder.com/150",
                        title: "Third Item",
                        redirectURL: "/item/third",
                        type: "Recruiter"
                    }
                ]}
            />
        </div>
    );
}
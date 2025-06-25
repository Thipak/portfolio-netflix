import { Header } from "../components/header";

export function Contact() {
    return (
        <div className="contact">
            <Header />
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out to us.</p>
            <p>You can contact us via email at <a href="mailto:contact@ourcompany.com">contact@ourcompany.com</a>.</p>
        </div>
    );
}

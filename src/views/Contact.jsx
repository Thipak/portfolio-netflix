import { Header } from "../components/header/header";
import { toFill } from "../toFill";

export function Contact() {
    const contact = toFill.data.profile.contact;
    return (
        <div className="contact">
            <Header />
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out to us.</p>
            <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>

        </div>
    );
}

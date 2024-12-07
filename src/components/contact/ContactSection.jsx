import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section className="py-20 px-6 mdL:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                <img src="https://picsum.photos/800/400" alt="Contact Us" className="w-full h-full object-cover" />
                <ContactForm />
            </div>
        </section>
    );
}

export default ContactSection;
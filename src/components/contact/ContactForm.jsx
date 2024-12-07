import React from "react";

const ContactForm = () => {
  return (
    <div className="contact-form">
        <div className="flex justify-end mb-4">
            <h2 className="font-bold text-3xl w-1/2 text-end">We'd love to hear from you</h2>
        </div>
        <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <input className="p-4 border-2 border-black focus:outline-yellow-primary-darker" type="text" id="name" name="name" placeholder="Name*" />
            </div>
            <div className="flex flex-col gap-2">
                <input className="p-4 border-2 border-black focus:outline-yellow-primary-darker" type="email" id="email" name="email" placeholder="Email*" />
            </div>
            <div className="flex flex-col gap-2">
                <input className="p-4 border-2 border-black focus:outline-yellow-primary-darker" type="text" id="websiteUrl" name="websiteUrl" placeholder="Website URL*" />
            </div>
            <div className="flex flex-col gap-2">
                <textarea className="p-4 border-2 border-black focus:outline-yellow-primary-darker h-[150px]" id="=projectDetails" name="projectDetails" placeholder="Project Details*" />
            </div>
        </form>
    </div>
  );
};

export default ContactForm;

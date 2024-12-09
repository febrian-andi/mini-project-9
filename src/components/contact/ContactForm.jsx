import React, { useState } from "react";
import { usePostData } from "../../hooks/usePostData";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const { postData, loading } = usePostData("/contact");
  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData, () => {
      setFormData({
        name: "",
        email: "",
        website: "",
        message: "",
      });
      alert("Your message has been sent successfully!");
    }, (error) => {
      alert(error || "Something went wrong");
    });
  };

  return (
    <div className="contact-form">
      <div className="flex justify-end mb-4">
        <h2 className="font-bold text-3xl w-1/2 text-end">
          We'd love to hear from you
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <input
            className="p-4 border-2 border-black focus:outline-yellow-primary-darker"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name*"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="p-4 border-2 border-black focus:outline-yellow-primary-darker"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email*"
          />
        </div>
        <div className="flex flex-col gap-2">
          <input
            className="p-4 border-2 border-black focus:outline-yellow-primary-darker"
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website URL*"
          />
        </div>
        <div className="flex flex-col gap-2">
          <textarea
            className="p-4 border-2 border-black focus:outline-yellow-primary-darker h-[150px]"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Project Details*"
          />
        </div>
        <div className="flex flex-col gap-2">
          <button
            className={`bg-black text-white py-4 px-8 hover:border-4 hover:border-yellow-primary-darker hover:border-double ${
                loading && "cursor-not-allowed opacity-50"
            }`}
            type="submit"
            disabled={loading}
          >
            Send Proposal
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

import { useState } from "react";
import PocketBase from "pocketbase";

const pbURL = "https://joshwaller.pockethost.io/";

const ContactForm = () => {
  // create state for this contact form's fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("Let's Chat!");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Form validation to check if fields are filled
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.name.length > 3 &&
      formData.email.trim() !== "" &&
      formData.email.includes("@") &&
      formData.message.trim() !== "" &&
      formData.message.length > 5
    );
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const pb = new PocketBase(pbURL);

    try {
      await pb.collection("contact_form_submissions").create(formData);
      setSuccessMessage("I'll be in touch soon!");

      setTimeout(() => {
        setSuccessMessage("Let's Chat!");
      }, 5000);

      // clear fields
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission failed", error);
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div className="container mx-auto body-font">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-accent-200 text-h1">{successMessage}</h1>
      </div>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-accent-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent-200 focus:bg-white focus:ring-2 focus:ring-accent-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-accent-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent-200 focus:bg-white focus:ring-2 focus:ring-accent-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <div className="relative">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-accent-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-accent-200 focus:bg-white focus:ring-2 focus:ring-accent-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </div>
          </div>
          <div className="py-8 w-full">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!isFormValid()} // Disable button if form is invalid
              className={`flex mx-auto text-secondary-500 bg-accent-200 border border-transparent py-2 px-8 focus:outline-none rounded text-lg ${
                isFormValid()
                  ? "hover:bg-transparent hover:border-accent-200 hover:text-accent-200"
                  : "opacity-50 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

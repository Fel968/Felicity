import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [feedback, setFeedback] = useState(""); // Feedback message for users
  const [isSubmitting, setIsSubmitting] = useState(false); // Submission state
  const [showNotification, setShowNotification] = useState(false); // Notification visibility

  useEffect(() => {
    emailjs.init("dXL-4GIeIYvGE8DfW"); // Initialize with your user ID

    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        setIsSubmitting(true); // Set submitting state

        // Send the form data via EmailJS
        emailjs
          .sendForm(
            "service_sjs3r5a", // Replace with your EmailJS service ID
            "template_nwwd61i", // Replace with your EmailJS template ID
            this
          )
          .then(
            function () {
              triggerNotification("Message sent successfully!", "success");
              setIsSubmitting(false); // Reset submitting state
            },
            function (error) {
              console.error("Email sending error:", error);
              triggerNotification("Failed to send message. Please try again.", "error");
              setIsSubmitting(false); // Reset submitting state
            }
          );
      });
    }
  }, []);

  // Trigger the notification box
  const triggerNotification = (message, type) => {
    setFeedback(message);
    setShowNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <div
          className="relative mt-8 flex md:flex-row flex-col gap-6 max-w-2xl rounded-lg mx-auto"
        >
          {/* Contact Form */}
          <form
            id="contact-form"
            className="flex flex-col flex-1 gap-5 mx-auto"
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="p-2 rounded bg-white text-black"
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email Address"
              className="p-2 rounded bg-white text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="p-2 rounded bg-white text-black"
            ></textarea>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="btn-primary"
                disabled={isSubmitting} // Disable button while submitting
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* Pop-Up Notification */}
          {showNotification && (
            <div
              className={`absolute top-0 right-[-300px] w-72 p-4 rounded-lg shadow-lg z-50 transition-transform duration-500 ease-in-out ${
                feedback.includes("successfully")
                  ? "bg-cyan-600 text-white"
                  : "bg-red-500 text-white"
              } ${showNotification ? "translate-x-[-300px]" : ""}`}
            >
              <p className="font-semibold">{feedback}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;

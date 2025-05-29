import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");

  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");

  useEffect(() => {
    if (success === "true") {
      setButtonText("Message Sent");
      setTimeout(() => {
        setButtonText("Send Message");
        searchParams.delete("success");
        setSearchParams(searchParams);
      }, 3000);
    }
  }, [success, searchParams, setSearchParams]);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-2 md:py-12">
      <h2 className="text-2xl md:text-5xl text-gray-600 text-center mb-4 md:mb-12 jetbrains-mono-font">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://github.com/js313/art-showcase-images-test/blob/main/0011-2.5D-art11.jpeg?raw=true"
            alt="Contact Banner"
            className="w-full max-h-100 object-cover"
          />
        </div>

        {/* Form */}
        <div className="md:w-1/2 w-full">
          <form
            action="https://formsubmit.co/sharmanidhi0040@gmail.com" // Replace email with the random string form submit provides
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value={`${window.location.origin}/contact?success=true`}
            ></input>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="jetbrains-mono-p-font w-full border border-gray-500 px-3 py-3 focus:outline-none focus:placeholder-transparent"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="jetbrains-mono-p-font w-full border-x-1 border-b-0 border-gray-500 px-3 py-3 focus:outline-none focus:placeholder-transparent"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={9}
                required
                className="jetbrains-mono-p-font w-full border border-gray-500 px-3 py-3 focus:outline-none focus:placeholder-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="jetbrains-mono-p-font border border-gray-500 px-3 py-3 text-gray-800 hover:bg-gray-200 cursor-pointer"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-12">
      <h2 className="text-5xl text-gray-600 text-center mb-12 jetbrains-mono-font">
        Contact
      </h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full">
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/328,0,3209,2304,1140,912/0-0-0/8e9d7d7c-5d60-454b-a40d-cc1de58fdd9b/1/2/IMG_6380.JPG.JPG?fjkss=exp=2061254710~hmac=414e054ed07950226465505f000305054972e047712821e522bad284a92468c6"
            alt="Contact Banner"
            className="w-full rounded-lg object-cover"
          />
        </div>

        {/* Form */}
        <div className="md:w-1/2 w-full">
          <form
            action="https://formsubmit.co/sharmajeenit2000@gmail.com" // Replace email with the random string form submit provides
            method="POST"
          >
            <input
              type="hidden"
              name="_next"
              value="http://localhost:5173/contact?submitted=true"
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
              className="jetbrains-mono-p-font border border-gray-500 px-3 py-3 text-gray-500 hover:bg-gray-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

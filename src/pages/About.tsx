const About = () => {
  return (
    <div className="w-full px-6 py-2 md:py-12">
      <h2 className="text-4xl md:text-5xl text-gray-600 text-center mb-4 md:mb-12 jetbrains-mono-font">
        About
      </h2>

      {/* Full-width banner image */}
      {/* Don't have one as of now!!! */}
      {/* <div className="w-full mb-12 hidden md:block">
        <img
          src="https://github.com/js313/art-showcase-images-test/blob/main/0027-mandala_art-art27.jpeg?raw=true"
          alt="Banner"
          className="w-full h-auto"
        />
      </div> */}

      {/* Row 1: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <img
            src="https://github.com/js313/art-showcase-images-test/blob/main/0025-mixed_media-art25.jpeg?raw=true"
            alt="My Work"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-600 jetbrains-mono-font">
            My Work
          </h3>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font">
            I work across many forms—painting, mandala art, decorated bottles,
            and mixed media—often blending traditional Indian elements with
            scenes from nature. I use oil and watercolor, homemade clay, and
            repurposed materials to bring my ideas to life. Each piece is
            created slowly, almost like meditation, where time disappears and
            making becomes everything.
          </p>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font mt-4">
            Lately, I’ve enjoyed experimenting more—especially with recycled
            cardboard to make my own clay—and turning everyday materials into
            something lasting. Even though I don’t do this professionally,
            people often assume I do. For me, this practice began out of
            curiosity and has grown into something much deeper—a way of
            reconnecting with myself and sharing what I love with others.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="md:w-1/2">
          <img
            src="https://github.com/js313/art-showcase-images-test/blob/main/0021-mandala_art-art21.jpeg?raw=true"
            alt="Biography"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-600 jetbrains-mono-font">
            Biography
          </h3>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font">
            Nidhi Sharma is a self-taught artist based in India, whose creative
            journey began in childhood and has quietly flourished in recent
            years. With more time and curiosity to explore her lifelong
            interest, she returned to art as a form of personal meditation and
            joyful expression. What began as a way to pass time has since
            deepened into something far more meaningful—a space where she can
            lose herself completely.
          </p>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font mt-4">
            Working primarily with oils, watercolors, clay, and mixed media,
            Nidhi brings both skill and spontaneity to her handmade pieces. Her
            work reflects a grounded, evolving practice rooted in tradition and
            imagination. As she begins to share her art with a wider audience,
            Nidhi hopes to connect, inspire, and perhaps even build a new path
            forward—one painted, molded, and lovingly shaped by hand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

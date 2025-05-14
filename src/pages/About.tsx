const About = () => {
  return (
    <div className="w-full px-6 py-12">
      <h2 className="text-5xl text-gray-600 text-center mb-12 jetbrains-mono-font">
        About
      </h2>

      {/* Full-width banner image */}
      <div className="w-full mb-12">
        <img
          src="https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,539,3966,2069,2280,880/0-0-0/308a4061-877f-43ba-9d20-955d35f5c3cb/1/2/SpacePicnic-Detail.jpg?fjkss=exp=2062208932~hmac=968c8d2680eab1f3027d42cf153afa93269311a2c51c04d55335220ae08bd61b"
          alt="Banner"
          className="w-full h-auto"
        />
      </div>

      {/* Row 1: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="md:w-1/2">
          <img
            src="https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,111,1445,1917,1140,1424/0-0-0/7b638cb0-3de3-4a43-95bf-0bacfef6df36/1/2/IMG_6494.JPG.JPG?fjkss=exp=2062208932~hmac=4cf2a722ffecffff9cca890c2d10ec3016b7414c7a1374351239898abeded24d"
            alt="My Work"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-600 jetbrains-mono-font">
            My Work
          </h3>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font">
            I am in love with paint as a substance, in its viscous, muddy form
            and its dry, flexible skin. I build with paint and with color; each
            layer an event of slow germination fused to the one before it,
            culminating into a self sustainable substance: a hide of seductive
            skin-like plastic. The creatures borne from this process evoke in
            the viewer the sense that they are encountering a strange but
            familiar form of life- one that oscillates between corporeal body
            and representation thereof. These imagined beings dance in and out
            of the abject, finding buoyancy in a life defined by the constant
            and inescapable force of gravity.
          </p>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font mt-4">
            The Accumulations series studies the carnal inner body, the meat and
            organs of a paint organism through the cannibalizing and
            reincarnation of older works. I compulsively collect the cast off
            and detritus of older pieces, small experiments, and assemble them.
            Shards of paint and silicone become tongues and valves; extrusions
            of caulk and polyurethane become tubes and veins. These
            accumulations document the moment where paint, image, and flatness
            grow from two dimensions into fleshy form en masse.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row-reverse gap-8">
        <div className="md:w-1/2">
          <img
            src="https://format.creatorcdn.com/15b7c12c-4aad-4663-af2c-7bc5a826b2c2/0/0/0/0,0,1235,1235,1140,1140/0-0-0/42c21247-8ed8-431f-9705-a51cc4b14e7b/1/2/20180917_101256_3-1.jpg?fjkss=exp=2062208932~hmac=4d8e03457374119df9400dfdf682c39af93604cf3fb070c547e56b5a45c53127"
            alt="Biography"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-600 jetbrains-mono-font">
            Biography
          </h3>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font">
            Andrea Lawl Manning is a Southeast CT based sculptor and
            installation artist. She studied at the Glasgow School of Art and
            holds a BFA from Pratt Institute. She’s exhibited in Brooklyn,
            Manhattan, Glasgow, and more.
          </p>
          <p className="text-base leading-relaxed text-gray-600 jetbrains-mono-p-font mt-4">
            In her current body of work, Andrea plays with color, paint, paper,
            plastics, and fiber to explore the ways we construct identity. She’s
            dedicated to building communities through interactive installations
            and creative programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

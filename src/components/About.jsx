import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Frontend Developer with 3 years of experience in crafting dynamic and
          responsive web applications. Proficient in React.js, JavaScript
          (ES6+), HTML5, and CSS3, with expertise in state management using
          Redux and Context API. Experienced in integrating RESTful APIs,
          optimizing performance through code-splitting and lazy loading, and
          ensuring cross-browser compatibility. Adept at collaborating with
          cross-functional teams to deliver high-quality, user-focused
          solutions. Committed to continuous learning and adopting emerging
          technologies to enhance user experience and achieve project goals.
        </p>

        <br />
        {/* <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          accusantium quos in, nihil iste veniam odit illum atque amet numquam
          delectus, ipsam quibusdam dicta culpa quis rerum nostrum est harum cum
          tempora hic neque ipsum! Incidunt nostrum aspernatur distinctio ullam.
          Nulla voluptatibus et dolorem. Laboriosam ipsam assumenda cumque ipsa
          fuga.
        </p> */}
      </div>
    </div>
  );
};

export default About;

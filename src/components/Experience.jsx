import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import node from "../assets/node.png";
import graphql from "../assets/graphql.png";
import nextjs from "../assets/nextjs.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      alt: "html web",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
      alt: "css web",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
      alt: "tailwind web",
    },
    {
      id: 4,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
      alt: "javascript web",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
      alt: "react web",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
      alt: "next web",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
      alt: "graphql web",
    },
    {
      id: 8,
      src: node,
      title: "Node JS",
      style: "shadow-green-500",
      alt: "node server",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
      alt: "git dev",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ src, alt, title, id, style }) => {
            return (
              <div
                className={
                  "shadow-md hover:scale-105 duration-500 py-2 rounded-lg " +
                  style
                }
                key={id}
              >
                <img src={src} alt={alt} className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;

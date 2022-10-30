import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "./constants";

export default function Projects() {
  const listic = [
    projects[0],
    projects[1],
    projects[3],
    projects[4],
    // projects[5],
  ];

  return (
    <>
      <div className=" projects" id="projects">
        <div className="title">
          <h2>Websites</h2>
        </div>
        <div className="gridContainer">
          {listic.map(({ title, description, image, detailsPage, id }) => (
            <div>
              <motion.div
                key={id}
                className="card"
                initial={{ x: "-100vw", opacity: 0.1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.7, delay: 1, type: "tween" }}
              >
                <img className="img" src={image} />
              </motion.div>
              <div className="description">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="title">
          <h2>Mobile App</h2>
        </div>
        <div className="gridContainer">
          {listic.map(({ title, description, image, detailsPage, id }) => (
            <div>
              <motion.div
                key={id}
                className="card"
                initial={{ x: "-100vw", opacity: 0.1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.7, delay: 1, type: "tween" }}
              >
                <img className="img" src={image} />
              </motion.div>
              <div className="description">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="title">
          <h2>Desktop</h2>
        </div>
        <div className="gridContainer">
          {listic.map(({ title, description, image, detailsPage, id }) => (
            <div>
              <motion.div
                key={id}
                className="card"
                initial={{ x: "-100vw", opacity: 0.1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.7, delay: 1, type: "tween" }}
              >
                <img className="img" src={image} />
              </motion.div>
              <div className="description">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

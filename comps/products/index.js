import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "./constants";

export default function Projects() {
  return (
    <>
      <div className=" products" id="products">
        <div className="title">
          <h2>Products</h2>
        </div>
        <div className="gridContainer">
          {projects.map(
            ({
              title,
              description,
              image,
              detailsPage,

              id,
            }) => (
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
            )
          )}
        </div>
      </div>
    </>
  );
}

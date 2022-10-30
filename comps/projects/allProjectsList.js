import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import styles from "./projects.module.css";
// import { projects } from "./constants";
import { HeaderThree, Tag, TagList, TitleContent } from "./projectsStyles";

export default function ProjectsGroup({ category, projectCol, title }) {
  const projectll = projectCol.filter((project) => {
    return project.frontmatter.category == category;
  });

  return (
    <div className=" projects" id="projects">
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="gridContainer">
        {projectll.map(({ slug, frontmatter }, index) => (
          <div>
            <motion.div
              key={index}
              className="card"
              initial={{ x: "-100vw", opacity: 0.1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.7, delay: 1, type: "tween" }}
            >
              <Link href={`/projects/${slug}`} target="_blank">
                {/* <a> */}
                <img className="img" src={frontmatter.cover_image} />
                {/* </a> */}
              </Link>
            </motion.div>
            <div className="description">
              <h3>{frontmatter.title}</h3>
              <p>{frontmatter.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

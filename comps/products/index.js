import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { products } from "./constants";

export default function Products() {
  return (
    <>
      <div className=" products" id="products">
        <div className="gridContainer">
          {products.map(
            ({
              title,
              description,
              image,
              detailsPage,

              id,
            }) => (
              <motion.div
                key={id}
                className="card"
                initial={{ x: "-100vw", opacity: 0.1 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.7, delay: 1, type: "tween" }}
              >
                <img className="img" src={image} />
                <div className="description">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </>
  );
}

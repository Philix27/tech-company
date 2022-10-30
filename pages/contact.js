import { Landing } from "../comps/globalComps/Landing";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Landing
        title="Contact us"
        imgUrl="images/contact.jpg"
        subtitle="We run a 247 customer care technical support services."
      />
      <div className="section formsPage contactUs">
        <motion.div
          className="sect step1"
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.5, type: "tween" }}
        >
          <form className="form">
            <h2>Email Us</h2>

            <div className="input_box">
              <label htmlFor="form-name" className="label">
                Name
              </label>
              <input
                type="text"
                id="form-name"
                placeholder="First and Last name"
                name="name"
                required
                minLength={5}
                // value={agent.name}
                // onChange={handleChange}
              />
            </div>

            <div className="input_box">
              <label htmlFor="form-email" className="label">
                Email
              </label>
              <input
                type="text"
                required
                minLength={5}
                id="form-email"
                placeholder="Enter email address"
                name="email"
                className="textarea"
                // value={agent.email}
                // onChange={handleChange}
              />
            </div>
            <div className="input_box">
              <label htmlFor="form-comment" className="label">
                Comment
              </label>
              <input
                type="text"
                required
                id="form-comment"
                placeholder="Write your comment..."
                name="comment"
                // cols="40"
                rows="10"
                // minLength={5}
                multiline

                // value={agent.email}
                // onChange={handleChange}
              />
            </div>
            <div className="btnContainer">
              <div className=" buttons">
                <input
                  type="submit"
                  value="Send"
                  // onClick={handlePrev}
                  className="btn"
                />
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
}

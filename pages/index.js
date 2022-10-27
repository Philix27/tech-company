import { Landing } from "../comps/globalComps/Landing";
import Objectives from "../comps/globalComps/objectives";
import Projects from "../comps/projects/projects";

export default function Home() {
  return (
    <>
      <Landing
        title="Musty Philix Inc"
        imgUrl="images/dark.jpg"
        subtitle="An agile tech company"
      />
      <Objectives />
      <Projects />
    </>
  );
}

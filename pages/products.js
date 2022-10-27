import { Landing } from "../comps/globalComps/Landing";
import Projects from "../comps/products/";

export default function Home() {
  return (
    <>
      <Landing
        title="Hello People"
        imgUrl="images/dark.jpg"
        subtitle="Our subtitle"
      />
      <Projects />
    </>
  );
}

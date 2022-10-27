import { Landing } from "../comps/globalComps/Landing";
import Products from "../comps/products/";

export default function Home() {
  return (
    <>
      <Landing
        title="Our products"
        imgUrl="images/darkmac.jpg"
        subtitle="We have prepacked and ready to go softwares that can easily be implemented into any business."
      />
      <Products />
    </>
  );
}

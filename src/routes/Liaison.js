
import { Counter } from '../components/counter';
import { LiaisonSection } from "../components/liaison-form";
import { IconBoxes } from "../components/icon-boxes";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";

function Liaison() {
  return (
    <>
      <Counter />
      <LiaisonSection />
      <IconBoxes />
      <Newsletter />
      <Partners />
    </>
  );
}

export default Liaison;

import { Downloads } from '../components/downloads';
import { IconBoxes } from "../components/icon-boxes";
import { Newsletter } from "../components/newsletter";
import { Partners } from "../components/partners";
import { Counter } from '../components/counter';


function Liaison() {
  return (
    <>
      <Counter />
      <Downloads />

      <IconBoxes />
      <Newsletter />
      <Partners />
    </>
  );
}

export default Liaison;
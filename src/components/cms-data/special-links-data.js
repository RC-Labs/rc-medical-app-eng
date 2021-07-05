
import logo1 from '../../assets/images/partners/mgi.png'
import logo2 from "../../assets/images/partners/my-medikal.png";
import logo3 from "../../assets/images/partners/eu-par.png";

import declaration1 from '../../assets/files/declaration-mgimed.pdf';
import declaration2 from '../../assets/files/declaration-mymedikal.pdf';

let specialLinksData = [
  {
    paragraph: 'We are an authorized distributor of MGI Medical brand products in Poland',
    logo: logo1,
    logoAlt: 'MGI Medical',
    file: declaration1,
    button: 'See more',
  },
  {
    paragraph: 'We are the exclusive and authorized distributor of MyMedical products',
    logo: logo2,
    logoAlt: 'My Medikal',
    file: declaration2,
    button: 'See more',
  },
  {
    paragraph: 'We have become a supplier of personal protection products to the European Parliament.',
    logo: logo3,
    logoAlt: 'Parlament Europejski',
    file: null,
    button: null,
  }
]


export { specialLinksData };
import Product1 from "../../assets/images/products/product-1.jpg"
import Product2 from "../../assets/images/products/product-2.jpg"
import Product3 from "../../assets/images/products/product-3.jpg"
import Product4 from "../../assets/images/products/product-4.jpg"
import Product5 from "../../assets/images/products/product-5.jpg"
import Product51 from "../../assets/images/products/product-5-1.jpg"
import Product6 from "../../assets/images/products/product-6.png"

const categories = [
  {
    name: 'All products',
    pageID: '/products/',
  }, {
    name: 'Protective gloves',
    pageID: '/products/cat1',
  }, {
    name: 'Syringes',
    pageID: '/products/cat2',
  }, {
    name: 'Protective garment',
    pageID: '/products/cat3',
  }, {
    name: 'Protective masks',
    pageID: '/products/cat4',
  }, {
    name: 'Disinfection',
    pageID: '/products/cat5',
  }
]
const products = [
  {
    image: Product1,
    alt: "",
    name: "Nitrile gloves",
    category: "Protective gloves",
    type: "nitrile",
    desc: "CE mark is fully compilance with Essential Requirement of the EC Council Directive 93/42/EEC and 89/686/EEC EN 455 -1. - 2. - 3. - 4. EN 374 -1, - 2, -3, Classification - Class I, non sterile AQL 1, 5",
    features: ['disposable', 'class I medical device', 'personal protective equipment, class III AQL 1.5'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/products/rekawice-nitrylowe",

  }, {
    image: Product2,
    alt: "",
    name: "Powdered latex gloves",
    category: "Protective gloves",
    type: "latex",
    desc: "CE mark is fully compilance with Essential Requirement of the EC Council Directive 93/42/EEC and 89/686/EEC EN 455 -1. - 2. - 3. - 4. EN 374 -1, - 2, -3, Classification - Class I, non sterile AQL 1, 5",
    features: ['disposable', 'class I medical device', 'personal protective equipment, class III AQL 1.5'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/products/rekawice-lateksowe-pudrowane",

  }, {
    image: Product2,
    alt: "",
    name: "Powderless latex gloves",
    category: "Protective gloves",
    type: "latex",
    desc: "CE mark is fully compilance with Essential Requirement of the EC Council Directive 93/42/EEC and 89/686/EEC EN 455 -1. - 2. - 3. - 4. EN 374 -1, - 2, -3, Classification - Class I, non sterile AQL 1, 5",
    features: ['disposable', 'class I medical device', 'personal protective equipment, class III AQL 1.5'],
    vendors: ['MUMU', 'MUMU Plus', 'Sempercare', 'Ansell', 'Comfort Gloves'],
    pageID: "/products/rekawice-lateksowe-bezpudrowe",

  }, {
    image: Product3,
    alt: "",
    name: "Disposable syringes",
    category: "Syringes",
    type: "",
    desc: "",
    features: ['Unsurpassed syringe', 'luer slip', 'quality and high sterility standard', '1xx X 27G X 1⁄2', 'Stain needles'],
    vendors: ['Cellotron'],
    pageID: "/products/strzykawki-trzyczesciowe",

  }, {
    image: Product4,
    alt: "",
    name: "Medical gowns",
    category: "Protective garment",
    type: "",
    desc: "",
    features: ['interlining', 'disposable', '40g/m2'],
    vendors: ['Rue Cambon'],
    pageID: "/products/medical-gowns",

  }, {
    image: Product5,
    alt: "",
    name: "FFP2 Masks",
    category: "Protective masks",
    type: "FFP2",
    desc: "",
    features: ['EN 149:2001+A1:2009', 'CE with notified unit no.', 'with or without exhalation valves'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/products/masks-ffp2",

  }, {
    image: Product51,
    alt: "",
    name: "FFP3 Masks",
    category: "Protective masks",
    type: "FFP3",
    desc: "",
    features: ['EN 149:2001+A1:2009', 'CE with notified unit no.', 'with or without exhalation valves'],
    vendors: ['Aibana', 'Agrupacion Salud', 'Baltic', 'Filter Service', 'Zgoda'],
    pageID: "/products/masks-ffp3",

  }, {
    image: Product6,
    alt: "",
    name: "Disinfecting aerosol",
    category: "Disinfection",
    type: "",
    desc: "Silver Flash Aerosol disinfects electronic devices, payment terminals, ATMs, vending machines, smartphones, tablets, door handles, handrails, buttons, kitchen utensils, surfaces related to the production process, storage and consumption of food, including drinking water. Silver Flash is odorless, leaves no traces, does not damage the surface.",
    features: ['instantly kills viruses', 'confirmed effective destruction of SARS-CoV-2', 'without alcohol'],
    vendors: ['Silverflash'],
    pageID: "/products/aerosol-silverflash",

  },
];

const productsHeading = 'Products';
const catHeading = 'Products';
const allCategory = 'All products';
const backButton = {
  name: 'back',
  link: '/products'
}


export { products, categories, productsHeading, catHeading, backButton, allCategory };
import phoneIcon from "../../assets/images/icons/phone-icon-big.svg";
import mailIcon from "../../assets/images/icons/mail-icon-big.svg";
import hoursIcon from "../../assets/images/icons/hours-icon-big.svg";


const contactBoxesData = [
  {
    icon: mailIcon,
    alt: "envelope",
    title: "Send us a message",
    mail: "biuro@rcmedical.pl",
  }, {
    icon: phoneIcon,
    alt: "phone",
    title: "Call us",
    tel: "+48 792 893 397",
  }, {
    icon: hoursIcon,
    alt: "watch",
    title: "Opening hours",
    info: "Monday - Friday",
    detail: "9:00 - 17:00"
  },
];

const address = [
  {
    title: 'Office',
    street: "ul.Mehoffera 10",
    postal: "31-322 Kraków",
  }, {
    title: 'Warehouse',
    street: "ul. Komandosów 1/2",
    postal: "32-085 Modlniczka",
  },
]



export { contactBoxesData, address };
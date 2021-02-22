const contacts = [
  {
    name: "Grzegorz Guzik",
    position: "public procurement",
    phone: "+48 501 176 792",
    mail: "grzegorz@rcmedical.pl",
  }, {
    name: "Anna Bat-Ulzii",
    position: "senior trader",
    phone: "+48 792 893 397",
    mail: "anna@rcmedical.pl",
  }, {
    name: "Marcin Bendkowski",
    position: "logistics",
    phone: "+48 603 183 207",
    mail: "marcin@rcmedical.pl",
  }, {
    name: "Sylwester Bendkowski",
    position: "id department",
    phone: "+48 575 644 394",
    mail: "sylwester@rcmedical.pl",
  }, {
    name: "Magdalena Wójtowicz",
    position: "accounting",
    phone: "+48 739 286 872",
    mail: "ksiegowosc@rcmedical.pl",
  },
]

const formData = {
  name: 'first name and last name',
  mail: 'e-mail address',
  phone: 'phone number',
  subject: 'subject',
  message: 'message',
  button: 'send',
}

const contactHeading = 'Contact';

const legalInfo = {
  street: "ul. Mehoffera 10",
  postal: "31-322 Kraków",
  NIP: "NIP 6762503470",
  KRS: "KRS 0000607445",
  REGON: "REGON 36394627900000",
};

export { contacts, formData, contactHeading, legalInfo };
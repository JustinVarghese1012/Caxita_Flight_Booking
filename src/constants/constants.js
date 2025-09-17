// flightData.js
export const flightData = [
  {
    id: 1,
    airlineName: "Air India",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/6a/Air_India_Logo.svg",
    from: "COK - Cochin",
    to: "DEL - Delhi",
    price: 4500,
    duration: "3h 10m",
    departure: "08:30",
    arrival: "11:40",
  },
  {
    id: 2,
    airlineName: "IndiGo",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0a/IndiGo_Airlines_logo.svg",
    from: "COK - Cochin",
    to: "BLR - Banglore",
    price: 2800,
    duration: "1h 15m",
    departure: "10:00",
    arrival: "11:15",
  },
  {
    id: 3,
    airlineName: "SpiceJet",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/SpiceJet_logo.svg",
    from: "COK - Cochin",
    to: "MAA - Chennai",
    price: 3200,
    duration: "1h 30m",
    departure: "12:45",
    arrival: "14:15",
  },
  {
    id: 4,
    airlineName: "AirAsia",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/8/8e/AirAsia_Logo.svg",
    from: "COK - Cochin",
    to: "BLR - Banglore",
    price: 3000,
    duration: "1h 20m",
    departure: "09:45",
    arrival: "11:05",
  },
  {
    id: 5,
    airlineName: "Emirates",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/Emirates_logo.svg",
    from: "COK - Cochin",
    to: "DXB - Dubai",
    price: 12000,
    duration: "4h 10m",
    departure: "14:00",
    arrival: "17:10",
  },
  {
    id: 6,
    airlineName: "Gulf Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/5/53/Gulf_Air_logo.svg",
    from: "COK - Cochin",
    to: "BAH - Baharin",
    price: 11000,
    duration: "4h 45m",
    departure: "22:30",
    arrival: "03:15",
  },
  {
    id: 7,
    airlineName: "Qatar Airways",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/65/Qatar_Airways_Logo.svg",
    from: "COK - Cochin",
    to: "DOH - Doha",
    price: 13500,
    duration: "5h 00m",
    departure: "19:20",
    arrival: "23:50",
  },
  {
    id: 8,
    airlineName: "Etihad Airways",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/c/c9/Etihad_Airways_logo.svg",
    from: "COK - Cochin",
    to: "AUH - Abu Dhabi",
    price: 12500,
    duration: "4h 30m",
    departure: "01:40",
    arrival: "06:10",
  },
  {
    id: 9,
    airlineName: "Singapore Airlines",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Singapore_Airlines_Logo.svg",
    from: "COK - Cochin",
    to: "SIN - singapore",
    price: 16000,
    duration: "6h 15m",
    departure: "23:55",
    arrival: "06:10",
  },
  {
    id: 10,
    airlineName: "Vistara",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Vistara_logo.svg",
    from: "COK - Cochin",
    to: "BOM - Mumbai",
    price: 4200,
    duration: "2h 05m",
    departure: "17:25",
    arrival: "19:30",
  },
  {
    id: 11,
    airlineName: "Air India",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0e/Vistara_logo.svg",
    from: "COK - Cochin",
    to: "BOM - Mumbai",
    price: 4100,
    duration: "2h 10m",
    departure: "17:25",
    arrival: "19:35",
  },

   {
    id: 12,
    airlineName: "Singapore Airlines",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Singapore_Airlines_Logo.svg",
    from: "COK - Cochin",
    to: "SIN - singapore",
    price: 15000,
    duration: "6h 00m",
    departure: "23:40",
    arrival: "06:10",
  },
];

export const navLinks = [
  { id: "home", title: "Home", link: "/home" },
  { id: "mybooking", title: "My Booking", link: "/mybooking" },
  { id: "register", title: "Register", link: "/register" },
  { id: "login", title: "Login", link: "/login" },
  { id: "contact", title: "Contact", link: "/contact" },
];

export const formControls = [
  {
    name: "from",
    label: "From",
    placeholder: "Where from?",
    type: "text",
    componentType: "select",
  },

  {
    name: "to",
    label: "To",
    placeholder: "Where to?",
    type: "text",
    componentType: "select",
  },
  {
    name: "date",
    label: "Date",
    placeholder: "When?",
    type: "date",
    componentType: "date",
  },

  
];

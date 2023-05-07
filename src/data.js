import vendingsmall from "./images/m2000.png";
import vendingmedium from "./images/m3000.png";
import vendinglarge from "./images/m4000.png";
import vendingxlarge from "./images/m5000.png";
import vendingsuperlarge from "./images/m6000.png";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "machines" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  {
    id: 3,
    href: "mailto:luluvending888@gmail.com",
    icon: "fa-envelope fas",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "top quality",
    text: `We offer a wide variety of snacks and beverages,
    including healthy options and popular brands, to ensure that
    everyone can find something they love. We work with top
    distributors to ensure that our products are always fresh and of
    the highest quality.`,
  },
  {
    id: 2,
    icon: "fas fa-phone fa-fw",
    title: "24/7 service",
    text: `Our machines are
    monitored and restocked regularly to ensure that they are always
    fully stocked with your favorite items. We also offer 24/7 customer support to ensure that you always have
    access to the help you need.`,
  },
  {
    id: 3,
    icon: "fas fa-truck fa-fw",
    title: "fast delivery",
    text: "We offer delivery service to anywhere in Australia by a third party courier.",
  },
];

export const machines = [
  {
    id: 1,
    image: vendingsmall,
    price: 6990,
    title: "SMALL M2000",
    info: `6 Selections Chocs,
    6 Selections Chips,
    18 Selections Drinks,
    Coins & Notes,
    Card Reader,
    12 months parts warranty.`,
  },
  {
    id: 2,
    image: vendingmedium,
    price: 7490,
    title: "MEDIUM M3000",
    info: `6 Selections Chocs,
    6 Selections Chips,
    18 Selections Drinks,
    Coins & Notes,
    Card Reader,
    12 months parts warranty.`,
  },
  {
    id: 3,
    image: vendinglarge,
    price: 8290,
    title: "LARGE M4000",
    info: ` 8 Selections Chocs,
    8 Selections Chips,
    24 Selections Drinks,
    Coins & Notes,
    Card Reader,
    12 months parts warranty.`,
  },
  {
    id: 4,
    image: vendingxlarge,
    price: 8790,
    title: "X-LARGE M5000",
    info: ` 10 Selections Chocs,
    10 Selections Chips,
    30 Selections Drinks,
    Coins & Notes,
    Card Reader,
    12 months parts warranty.`,
  },
  {
    id: 5,
    image: vendingsuperlarge,
    price: 9290,
    title: "XX-SUPER LARGE M6000",
    info: ` 12 Selections Chocs,
    12 Selections Chips,
    36 Selections Drinks,
    Coins & Notes,
    Card Reader,
    12 months parts warranty.`,
  },
];

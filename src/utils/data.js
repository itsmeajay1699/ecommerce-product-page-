// export list of items

import first from "../images/image-product-1-thumbnail.jpg";
import two from "../images/image-product-2-thumbnail.jpg";
import three from "../images/image-product-3-thumbnail.jpg";
import four from "../images/image-product-4-thumbnail.jpg";

export const items = ["Collections", "Men", "Women", "About", "Contact"];

export const thumbnailImage = [
  {
    id: 1,
    name: "Brown Sneakers",
    price: 250,
    img: first,
  },
  {
    id: 2,
    img: two,
  },
  {
    id: 3,
    img: three,
  },
  {
    id: 4,
    img: four,
  },
];

export const data = [
  {
    id: 1,
    name: "Brown Sneakers",
    price: 250,
    description: "Casual shoes",
    image: [first, two, three, four],
  },
];

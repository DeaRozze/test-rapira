import type { Image } from "@/types";

import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";
import card4 from "@/assets/images/card4.png";
import card5 from "@/assets/images/card5.png";
import card6 from "@/assets/images/card6.png";

export const IMAGES: Image[] = [
  {
    id: "1",
    title: "Вдохновение в каждом шаге",
    description:
      "Наши путешественники находят вдохновение в каждом шаге своего пути.",
    categories: ["Природа", "Люди"],
    date: "2025-04-09",
    readTimeMin: 2,
    comments: 1,
    imageUrl: card1,
  },
  {
    id: "2",
    title: "Моменты тишины и покоя",
    description:
      "В такие моменты наши фотографы ощущают гармонию и умиротворение.",
    categories: ["Природа", "Животные"],
    date: "2025-04-06",
    readTimeMin: 3,
    comments: 5,
    imageUrl: card2,
  },
  {
    id: "3",
    title: "Цвета природы в наших руках",
    description:
      "Наши художники выражают всю красоту окружающего мира через творчество.",
    categories: ["Природа", "Искусство"],
    date: "2025-04-05",
    readTimeMin: 3,
    comments: 10,
    imageUrl: card3,
  },
  {
    id: "4",
    title: "Семейные узы в дикой природе",
    description:
      "Наблюдая за этими сценами, наши фотографы чувствуют тепло и единство.",
    categories: ["Природа", "Животные"],
    date: "2025-04-04",
    readTimeMin: 15,
    comments: 6,
    imageUrl: card4,
  },
  {
    id: "5",
    title: "Гармония городских и природных пейзажей",
    description:
      "Этот вид напоминает нам о том, как природа и город могут сосуществовать в гармонии.",
    categories: ["Природа", "Искусство"],
    date: "2025-04-03",
    readTimeMin: 2,
    comments: 2,
    imageUrl: card5,
  },
  {
    id: "6",
    title: "Моменты, которые остаются в сердце",
    description: "Эти мгновения наполняют наши сердца радостью и любовью.",
    categories: ["Природа", "Люди", "Животные"],
    date: "2025-04-01",
    readTimeMin: 4,
    comments: 0,
    imageUrl: card6,
  },
];

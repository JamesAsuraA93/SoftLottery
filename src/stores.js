import { writable } from "svelte/store";

export const slotDigit = writable([
  {
    id: 0,
    date: "2022-01-01",
    six: "672334",
    five: "72334",
    three: "723",
    twoTop: "13",
    twoBot: "94",
  },
  {
    id: 1,
    date: "2022-01-16",
    six: "672334",
    five: "72334",
    three: "723",
    twoTop: "13",
    twoBot: "52",
  },
  {
    id: 2,
    date: "2022-02-01",
    six: "672334",
    five: "72334",
    three: "723",
    twoTop: "13",
    twoBot: "62",
  },
  {
    id: 3,
    date: "2022-02-16",
    six: "672334",
    five: "72334",
    three: "723",
    twoTop: "13",
    twoBot: "22",
  },
  {
    id: 4,
    date: "2022-03-01",
    six: "672334",
    five: "72334",
    three: "723",
    twoTop: "13",
    twoBot: "32",
  },
  {
    id: 5,
    date: "2022-03-16",
    six: "456932",
    five: "24564",
    three: "245",
    twoTop: "64",
    twoBot: "69",
  },
  {
    id: 6,
    date: "2022-04-01",
    six: "231980",
    five: "61784",
    three: "349",
    twoTop: "23",
    twoBot: "80",
  },
]);

export const givaway = writable({
  one: ["6 ล้านบาท", "รางวัลที่ 1"],
  two: ["1 แสนบาท", "รางวัลที่ 2"],
  three: ["1 หมื่นบาท", "รางวัลสามตัวตรง"],
  four: ["3 พันบาท", "รางวัลสองตัวตรง"],
});

export const storeBuy = writable("");

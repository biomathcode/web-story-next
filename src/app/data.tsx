import { nanoid } from "nanoid";

const data = [
  {
    id: nanoid(),
    name: "something",
    children: [
      {
        id: nanoid(),
        type: "text",
        content: "this is the alt of the image",
      },
      {
        id: nanoid(),
        type: "text",
        content: "This is content",
      },
    ],
  },
  {
    id: nanoid(),
    name: "dlksamfklsm",
    children: [
      {
        id: nanoid(),

        type: "text",
        content: "How to make this better",
      },
      {
        id: nanoid(),

        type: "text",
        content: "this is content",
      },
    ],
  },
];

const insert = (arr: [], index: number, newItem: any) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

export default data;

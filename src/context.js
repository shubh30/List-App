import React from "react";
const { v4: uuidv4 } = require("uuid");

export const globalState = React.createContext({
  data: [
    {
      heading: "Portugal",
      subHeadings: [
        { id: uuidv4(), text: "Aasiya Jayavant", checked: false },
        { id: uuidv4(), text: "Luvleen Lawrence", checked: false },
        { id: uuidv4(), text: "Rey Mibourne", checked: false },
        { id: uuidv4(), text: "Cayla Brister", checked: false },
      ],
    },
    {
      heading: "Nicaragua",
      subHeadings: [
        { id: uuidv4(), text: "Deveedaas Nandi", checked: false },
        { id: uuidv4(), text: "Obasey Chidy", checked: false },
        { id: uuidv4(), text: "Xenie Dolezelova", checked: false },
        { id: uuidv4(), text: "Ezequiel Dengra", checked: false },
      ],
    },
    {
      heading: "Marshall Islands",
      subHeadings: [
        { id: uuidv4(), text: "Aaron Almaraz", checked: false },
        { id: uuidv4(), text: "Jelena Denisova", checked: false },
      ],
    },
  ],
});

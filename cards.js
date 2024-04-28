document.addEventListener("DOMContentLoaded", function () {
  let cardsInformations = [
    {
      id: 1,
      image: "./images/slider/slider1.png",
      price: "42 000 $",
      marka: "Bmw",
      model: "M4",
      description: "2016, 3.0 L, 54 000 km",
      date: "28.04.2024",
    },
    {
      id: 2,
      image: "./images/slider/slider2.png",
      price: "40 000 $",
      marka: "Mercedes",
      model: "Cls 63 AMG",
      description: "2014, 5.5 L, 95 000 km",
      date: "22.04.2024",
    },
    {
      id: 3,
      image: "./images/slider/slider3.png",
      price: "55 000 $",
      marka: "Audi",
      model: "RS5",
      description: "2018, 3.0 L, 16 000 km",
      date: "13.04.2024",
    },
    {
      id: 4,
      image: "./images/slider/slider4.png",
      price: "172 000 $",
      marka: "Porsche",
      model: "911",
      description: "2020, 4.0 L, 32 000 km",
      date: "30.03.2024",
    },
    {
      id: 5,
      image: "./images/slider/slider5.png",
      price: "135 000 $",
      marka: "Toyota",
      model: "Land Cruiser",
      description: "2023, 3.5 L, 0 km",
      date: "21.03.2024",
    },
    {
      id: 6,
      image: "./images/slider/slider6.png",
      price: "98 000 $",
      marka: "Lexus",
      model: "LX570",
      description: "2020, 5.7 L, 110 000 km",
      date: "11.04.2024",
    },
    {
      id: 7,
      image: "./images/cards/card15.png",
      price: "250 000 AZN",
      marka: "Lexus",
      model: "LX300",
      description: "2024, 3.0 L, 0 km",
      date: "01.04.2024",
    },
    {
      id: 8,
      image: "./images/cards/card16.jpeg",
      price: "38 000 $",
      marka: "Lexus",
      model: "RX300",
      description: "2020, 3.0 L, 47 000 km",
      date: "17.04.2024",
    },
    {
      id: 9,
      image: "./images/cards/card9.webp",
      price: "60 000 $",
      marka: "Bmw",
      model: "X5",
      description: "2020, 3.0 L, 52 000 km",
      date: "12.04.2024",
    },
    {
      id: 10,
      image: "./images/cards/card10.jpeg",
      price: "83 000 $",
      marka: "Mercedes",
      model: "G 63 AMG",
      description: "2016, 5.5 L, 74 000 km",
      date: "18.04.2024",
    },
    {
      id: 11,
      image: "./images/cards/card6.jpeg",
      price: "110 000 $",
      marka: "Bmw",
      model: "M5",
      description: "2020, 4.4 L, 11 500 km",
      date: "02.04.2024",
    },
    {
      id: 12,
      image: "./images/cards/card5.jpeg",
      price: "42 000 $",
      marka: "Bmw",
      model: "M3",
      description: "2016, 3.0 L, 22 000 km",
      date: "28.04.2024",
    },
    {
      id: 13,
      image: "./images/cards/card4.jpeg",
      price: "150 000 $",
      marka: "Bmw",
      model: "X7",
      description: "2021, 3.0 L, 10 000 km",
      date: "10.04.2024",
    },
    {
      id: 14,
      image: "./images/cards/card3.jpeg",
      price: "130 000 $",
      marka: "Mercedes",
      model: "S 63 AMG",
      description: "2017, 4.7 L, 98 000 km",
      date: "22.02.2024",
    },
    {
      id: 15,
      image: "./images/cards/card2.jpeg",
      price: "78 000 $",
      marka: "Mercedes",
      model: "E 63 AMG",
      description: "2018, 5.5 L, 110 000 km",
      date: "21.02.2024",
    },
    {
      id: 16,
      image: "./images/cards/card1.jpeg",
      price: "17 000 $",
      marka: "Toyota",
      model: "Corolla",
      description: "2020, 1.8 L, 115 000 km",
      date: "13.04.2024",
    },
    {
      id: 17,
      image: "./images/cards/card11.avif",
      price: "41 000 AZN",
      marka: "Toyota",
      model: "Corolla Cross",
      description: "2024, 2.0 L, 0 km",
      date: "20.04.2024",
    },
    {
      id: 18,
      image: "./images/cards/card12.jpeg",
      price: "20 000 $",
      marka: "Toyota",
      model: "Camry",
      description: "2020, 2.5 L, 120 000 km",
      date: "01.04.2024",
    },
    {
      id: 19,
      image: "./images/cards/card13.jpeg",
      price: "40 000 $",
      marka: "Toyota",
      model: "Rav4",
      description: "2022, 2.5 L, 0 km",
      date: "03.03.2024",
    },
    {
      id: 20,
      image: "./images/cards/card14.jpeg",
      price: "85 000 $",
      marka: "Lexus",
      model: "LX450",
      description: "2018, 4.5 L, 72 000 km",
      date: "02.02.2024",
    },
    {
      id: 21,
      image: "./images/cards/card17.jpeg",
      price: "11 000 $",
      marka: "Lexus",
      model: "RX330",
      description: "2007, 3.3 L, 272 000 km",
      date: "21.01.2024",
    },
    {
      id: 22,
      image: "./images/cards/card18.jpeg",
      price: "57 000 $",
      marka: "Audi",
      model: "RS4",
      description: "2020, 3.0 L, 42 000 km",
      date: "29.01.2024",
    },
    {
      id: 23,
      image: "./images/cards/card19.jpeg",
      price: "47 000 $",
      marka: "Audi",
      model: "A6",
      description: "2019, 2.0 L, 22 000 km",
      date: "29.03.2024",
    },
    {
      id: 24,
      image: "./images/cards/card20.jpeg",
      price: "77 000 $",
      marka: "Audi",
      model: "A7",
      description: "2022, 3.0 L, 11 200 km",
      date: "27.03.2024",
    },
    {
      id: 25,
      image: "./images/cards/card21.jpeg",
      price: "190 000 $",
      marka: "Audi",
      model: "A8",
      description: "2023, 3.0 L, 0 km",
      date: "22.04.2024",
    },
    {
      id: 26,
      image: "./images/cards/card22.jpeg",
      price: "122 000 $",
      marka: "Porsche",
      model: "Panamera",
      description: "2023, 2.9 L, 0 km",
      date: "21.03.2024",
    },
    {
      id: 27,
      image: "./images/cards/card23.webp",
      price: "107 000 $",
      marka: "Porsche",
      model: "Cayenne",
      description: "2022, 3.0 L, 2 000 km",
      date: "19.02.2024",
    },
    {
      id: 28,
      image: "./images/cards/card24.jpeg",
      price: "55 000 $",
      marka: "Porsche",
      model: "Macan",
      description: "2021, 2.0 L, 23 100 km",
      date: "25.03.2024",
    },
    {
      id: 29,
      image: "./images/cards/card25.jpeg",
      price: "149 000 $",
      marka: "Porsche",
      model: "Cayman",
      description: "2022, 3.0 L, 500 km",
      date: "26.04.2024",
    },
    {
      id: 30,
      image: "./images/cards/card26.jpeg",
      price: "127 000 $",
      marka: "Bmw",
      model: "M5",
      description: "2021, 4.4 L, 2 200 km",
      date: "11.03.2024",
    },
  ];

  // ------------------------cards--------------------
  const cardsElement = document.querySelector(".cards-element");

  cardsInformations.forEach((card) => {
    const cardElement = document.createElement("li");
    cardElement.innerHTML = `
      <div class="card-image">
        <img src="${card.image}" alt="image ${card.id}" />
      </div>
      <div class="card-text">
        <h3>${card.price}</h3>
        <div class="card-marka-model">
          <p>${card.marka}</p>
          <span>${card.model}</span>
        </div>
        <p>${card.description}</p>
        <span class="card-date">${card.date}</span>
      </div>
    `;
    cardsElement.appendChild(cardElement);
  });

  // ------------------------select--------------------
  const markaContainer = [
    "Bütün Markalar",
    "Bmw",
    "Mercedes",
    "Toyota",
    "Lexus",
    "Audi",
    "Porsche",
  ];
  const modelContainer = [
    {
      id: 1,
      marka: "Bmw",
      model: ["Bütün Modellər", "M3", "M4", "M5", "X5", "X7"],
    },
    {
      id: 2,
      marka: "Mercedes",
      model: [
        "Bütün Modellər",
        "Cls 63 AMG",
        "G 63 AMG",
        "S 63 AMG",
        "E 63 AMG",
      ],
    },
    {
      id: 3,
      marka: "Audi",
      model: ["Bütün Modellər", "RS4", "RS5", "A6", "A7", "A8"],
    },
    {
      id: 4,
      marka: "Toyota",
      model: [
        "Bütün Modellər",
        "Corolla",
        "Corolla Cross",
        "Camry",
        "Rav4",
        "Land Cruiser",
      ],
    },
    {
      id: 5,
      marka: "Lexus",
      model: ["Bütün Modellər", "LX450", "RX300", "LX570", "LX300", "RX330"],
    },
    {
      id: 6,
      marka: "Porsche",
      model: [
        "Bütün Modellər",
        "Panamera",
        "Cayenne",
        "Macan",
        "Cayman",
        "911",
      ],
    },
  ];
  // --------marka---------
  const markaElement = document.querySelector("#marka");
  const modelElement = document.querySelector("#model");
  const modelElementOneItem = document.createElement("option");
  modelElementOneItem.value = "Bütün Modellər";
  modelElementOneItem.textContent = "Bütün Modellər";
  modelElement.appendChild(modelElementOneItem);

  modelElement.style.pointerEvents = "none";
  modelElement.style.backgroundColor = "rgb(200, 200, 200)";

  markaContainer.forEach((marka) => {
    const markaElementItem = document.createElement("option");
    markaElementItem.value = marka;
    markaElementItem.textContent = marka;
    markaElement.appendChild(markaElementItem);
  });
  markaElement.addEventListener("change", () => {
    if (markaElement.value === "Bütün Markalar") {
      modelElement.style.pointerEvents = "none";
      modelElement.style.backgroundColor = "rgb(200, 200, 200)";
    }
    if (markaElement.value !== "Bütün Markalar") {
      modelElement.style.pointerEvents = "unset";
      modelElement.style.backgroundColor = "white";
    }
  });
  // --------model---------
  markaElement.addEventListener("change", () => {
    const selectedMarka = markaElement.value;
    modelElement.innerHTML = "";
    modelContainer.forEach((model) => {
      if (model.marka === selectedMarka) {
        model.model.forEach((model) => {
          const modelElementItem = document.createElement("option");
          modelElementItem.value = model;
          modelElementItem.textContent = model;
          modelElement.appendChild(modelElementItem);
        });
      } else if (selectedMarka === "Bütün Markalar") {
        const modelElementOneItem = document.createElement("option");
        modelElementOneItem.value = "Bütün Modellər";
        modelElementOneItem.textContent = "Bütün Modellər";
        modelElement.appendChild(modelElementOneItem);
      }
    });
  });
  // --------------filter-----------
  const selectedContainer = document.querySelector(".selected-container");
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener(
    "click",
    (filterCards = (e) => {
      e.preventDefault();
      const cardsElement = document.querySelector(".cards-element");
      const selectedMarka = markaElement.value;
      const selectedModel = modelElement.value;
      selectedContainer.innerHTML = "";
      cardsInformations.forEach((card) => {
        if (
          (card.marka === selectedMarka && card.model === selectedModel) ||
          (card.marka === selectedMarka && selectedModel === "Bütün Modellər")
        ) {
          const selectedLi = document.createElement("li");
          selectedLi.innerHTML = `
          <div class="card-image">
            <img src="${card.image}" alt="image ${card.id}" />
          </div>
          <div class="card-text">
            <h3>${card.price}</h3>
            <div class="card-marka-model">
              <p>${card.marka}</p>
              <span>${card.model}</span>
            </div>
            <p>${card.description}</p>
            <span class="card-date">${card.date}</span>
          </div>
        `;
          cardsElement.style.display = "none";
          selectedContainer.appendChild(selectedLi);
          selectedContainer.style.display = "flex";
        }
        if (
          markaElement.value === "Bütün Markalar" &&
          modelElement.value === "Bütün Modellər"
        ) {
          selectedContainer.style.display = "none";
          cardsElement.style.display = "flex";
        }
      });
    })
  );
});

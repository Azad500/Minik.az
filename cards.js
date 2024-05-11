document.addEventListener("DOMContentLoaded", function () {
  let cardsInformations = [
    {
      id: 1,
      image: "./images/slider/slider1.png",
      prices: "42000",
      price: "42 000 $",
      marka: "Bmw",
      model: "M4",
      description: "2016, 3.0 L, 54 000 km",
      dates: "04.28.2024",
      date: "28.04.2024",
    },
    {
      id: 2,
      image: "./images/slider/slider2.png",
      prices: "40000",
      price: "40 000 $",
      marka: "Mercedes",
      model: "Cls 63 AMG",
      description: "2014, 5.5 L, 95 000 km",
      dates: "04.22.2024",
      date: "22.04.2024",
    },
    {
      id: 3,
      image: "./images/slider/slider3.png",
      prices: "55000",
      price: "55 000 $",
      marka: "Audi",
      model: "RS5",
      description: "2018, 3.0 L, 16 000 km",
      dates: "04.13.2024",
      date: "13.04.2024",
    },
    {
      id: 4,
      image: "./images/slider/slider4.png",
      prices: "172000",
      price: "172 000 $",
      marka: "Porsche",
      model: "911",
      description: "2020, 4.0 L, 32 000 km",
      dates: "03.30.2024",
      date: "30.03.2024",
    },
    {
      id: 5,
      image: "./images/slider/slider5.png",
      prices: "135000",
      price: "135 000 $",
      marka: "Toyota",
      model: "Land Cruiser",
      description: "2023, 3.5 L, 0 km",
      dates: "03.21.2024",
      date: "21.03.2024",
    },
    {
      id: 6,
      image: "./images/slider/slider6.png",
      prices: "98000",
      price: "98 000 $",
      marka: "Lexus",
      model: "LX570",
      description: "2020, 5.7 L, 110 000 km",
      dates: "04.11.2024",
      date: "11.04.2024",
    },
    {
      id: 7,
      image: "./images/cards/card15.png",
      prices: "250000",
      price: "250 000 AZN",
      marka: "Lexus",
      model: "LX300",
      description: "2024, 3.0 L, 0 km",
      dates: "04.01.2024",
      date: "01.04.2024",
    },
    {
      id: 8,
      image: "./images/cards/card16.jpeg",
      prices: "38000",
      price: "38 000 $",
      marka: "Lexus",
      model: "RX300",
      description: "2020, 3.0 L, 47 000 km",
      dates: "04.17.2024",
      date: "17.04.2024",
    },
    {
      id: 9,
      image: "./images/cards/card9.webp",
      prices: "60000",
      price: "60 000 $",
      marka: "Bmw",
      model: "X5",
      description: "2020, 3.0 L, 52 000 km",
      dates: "04.12.2024",
      date: "12.04.2024",
    },
    {
      id: 10,
      image: "./images/cards/card10.jpeg",
      prices: "83000",
      price: "83 000 $",
      marka: "Mercedes",
      model: "G 63 AMG",
      description: "2016, 5.5 L, 74 000 km",
      dates: "04.18.2024",
      date: "18.04.2024",
    },
    {
      id: 11,
      image: "./images/cards/card6.jpeg",
      prices: "110000",
      price: "110 000 $",
      marka: "Bmw",
      model: "M5",
      description: "2020, 4.4 L, 11 500 km",
      dates: "04.02.2024",
      date: "02.04.2024",
    },
    {
      id: 12,
      image: "./images/cards/card5.jpeg",
      prices: "42000",
      price: "42 000 $",
      marka: "Bmw",
      model: "M3",
      description: "2016, 3.0 L, 22 000 km",
      dates: "04.28.2024",
      date: "28.04.2024",
    },
    {
      id: 13,
      image: "./images/cards/card4.jpeg",
      prices: "150000",
      price: "150 000 $",
      marka: "Bmw",
      model: "X7",
      description: "2021, 3.0 L, 10 000 km",
      dates: "04.10.2024",
      date: "10.04.2024",
    },
    {
      id: 14,
      image: "./images/cards/card3.jpeg",
      prices: "130000",
      price: "130 000 $",
      marka: "Mercedes",
      model: "S 63 AMG",
      description: "2017, 4.7 L, 98 000 km",
      dates: "02.22.2024",
      date: "22.02.2024",
    },
    {
      id: 15,
      image: "./images/cards/card2.jpeg",
      prices: "78000",
      price: "78 000 $",
      marka: "Mercedes",
      model: "E 63 AMG",
      description: "2018, 5.5 L, 110 000 km",
      dates: "02.21.2024",
      date: "21.02.2024",
    },
    {
      id: 16,
      image: "./images/cards/card1.jpeg",
      prices: "17000",
      price: "17 000 $",
      marka: "Toyota",
      model: "Corolla",
      description: "2020, 1.8 L, 115 000 km",
      dates: "04.13.2024",
      date: "13.04.2024",
    },
    {
      id: 17,
      image: "./images/cards/card11.avif",
      prices: "41000",
      price: "41 000 AZN",
      marka: "Toyota",
      model: "Corolla Cross",
      description: "2024, 2.0 L, 0 km",
      dates: "04.20.2024",
      date: "20.04.2024",
    },
    {
      id: 18,
      image: "./images/cards/card12.jpeg",
      prices: "20000",
      price: "20 000 $",
      marka: "Toyota",
      model: "Camry",
      description: "2020, 2.5 L, 120 000 km",
      dates: "04.01.2024",
      date: "01.04.2024",
    },
    {
      id: 19,
      image: "./images/cards/card13.jpeg",
      prices: "40000",
      price: "40 000 $",
      marka: "Toyota",
      model: "Rav4",
      description: "2022, 2.5 L, 0 km",
      dates: "03.03.2024",
      date: "03.03.2024",
    },
    {
      id: 20,
      image: "./images/cards/card14.jpeg",
      prices: "85000",
      price: "85 000 $",
      marka: "Lexus",
      model: "LX450",
      description: "2018, 4.5 L, 72 000 km",
      dates: "02.02.2024",
      date: "02.02.2024",
    },
    {
      id: 21,
      image: "./images/cards/card17.jpeg",
      prices: "11000",
      price: "11 000 $",
      marka: "Lexus",
      model: "RX330",
      description: "2007, 3.3 L, 272 000 km",
      dates: "01.21.2024",
      date: "21.01.2024",
    },
    {
      id: 22,
      image: "./images/cards/card18.jpeg",
      prices: "57000",
      price: "57 000 $",
      marka: "Audi",
      model: "RS4",
      description: "2020, 3.0 L, 42 000 km",
      dates: "01.29.2024",
      date: "29.01.2024",
    },
    {
      id: 23,
      image: "./images/cards/card19.jpeg",
      prices: "47000",
      price: "47 000 $",
      marka: "Audi",
      model: "A6",
      description: "2019, 2.0 L, 22 000 km",
      dates: "03.29.2024",
      date: "29.03.2024",
    },
    {
      id: 24,
      image: "./images/cards/card20.jpeg",
      prices: "77000",
      price: "77 000 $",
      marka: "Audi",
      model: "A7",
      description: "2022, 3.0 L, 11 200 km",
      dates: "03.27.2024",
      date: "27.03.2024",
    },
    {
      id: 25,
      image: "./images/cards/card21.jpeg",
      prices: "190000",
      price: "190 000 $",
      marka: "Audi",
      model: "A8",
      description: "2023, 3.0 L, 0 km",
      dates: "04.22.2024",
      date: "22.04.2024",
    },
    {
      id: 26,
      image: "./images/cards/card22.jpeg",
      prices: "122000",
      price: "122 000 $",
      marka: "Porsche",
      model: "Panamera",
      description: "2023, 2.9 L, 0 km",
      dates: "03.21.2024",
      date: "21.03.2024",
    },
    {
      id: 27,
      image: "./images/cards/card23.webp",
      prices: "107000",
      price: "107 000 $",
      marka: "Porsche",
      model: "Cayenne",
      description: "2022, 3.0 L, 2 000 km",
      dates: "02.19.2024",
      date: "19.02.2024",
    },
    {
      id: 28,
      image: "./images/cards/card24.jpeg",
      prices: "55000",
      price: "55 000 $",
      marka: "Porsche",
      model: "Macan",
      description: "2021, 2.0 L, 23 100 km",
      dates: "03.25.2024",
      date: "25.03.2024",
    },
    {
      id: 29,
      image: "./images/cards/card25.jpeg",
      prices: "149000",
      price: "149 000 $",
      marka: "Porsche",
      model: "Cayman",
      description: "2022, 3.0 L, 500 km",
      dates: "04.26.2024",
      date: "26.04.2024",
    },
    {
      id: 30,
      image: "./images/cards/card26.jpeg",
      prices: "127000",
      price: "127 000 $",
      marka: "Bmw",
      model: "M5",
      description: "2021, 4.4 L, 2 200 km",
      dates: "03.11.2024",
      date: "11.03.2024",
    },
  ];
  cardsInformations.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });

  // ------------------------cards--------------------
  const cardsElement = document.querySelector(".cards-element");
  const paginationControls = document.getElementById("pagination-controls");

  const recordsPerPage = 10;
  const numberOfPages = Math.ceil(cardsInformations.length / recordsPerPage);

  function renderCards(page) {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const itemsToShow = cardsInformations.slice(startIndex, endIndex);

    cardsElement.innerHTML = ""; // Clear existing cards
    itemsToShow.forEach((card) => {
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
  }

  function renderPagination(currentPage) {
    paginationControls.innerHTML = ""; // Clear existing pagination controls

    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#b0c"; // Highlight the current page
      }
      pageLink.addEventListener("click", () => {
        renderCards(i);
        renderPagination(i);
      });
      paginationControls.appendChild(pageLink);
    }
  }

  renderCards(1); // Initial rendering for page 1
  renderPagination(1);
  // ------------------------all-cards--------------------
  const filterElement = document.querySelector(".filter-container");
  const sliderElement = document.querySelector(".slider-container");
  const allCards = document.querySelectorAll(".all-cards");

  allCards.forEach((card) => {
    card.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
    });
  });
  // ---------------refresh-page---------------
  const logoImage = document.querySelector(".logo-element-in-mobile img");
  logoImage.addEventListener("click", () => {
    location.reload();
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
  modelElement.style.backgroundColor = "#e3e3e3";

  markaContainer.forEach((marka) => {
    const markaElementItem = document.createElement("option");
    markaElementItem.value = marka;
    markaElementItem.textContent = marka;
    markaElement.appendChild(markaElementItem);
  });
  markaElement.addEventListener("change", () => {
    if (markaElement.value === "Bütün Markalar") {
      modelElement.style.pointerEvents = "none";
      modelElement.style.backgroundColor = "#e3e3e3";
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
  const notInformation = document.querySelector(".not-information");
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener(
    "click",
    (filterCards = (e) => {
      e.preventDefault();
      const cardsElement = document.querySelector(".cards-element");
      const priceMin = document.querySelector("#priceMin").value.toString();
      const priceMax = document.querySelector("#priceMax").value.toString();
      const selectedMarka = markaElement.value;
      const selectedModel = modelElement.value;
      selectedContainer.innerHTML = "";
      cardsInformations.forEach((card) => {
        if (
          (card.marka === selectedMarka && card.model === selectedModel) ||
          (card.marka === selectedMarka &&
            selectedModel === "Bütün Modellər") ||
          (card.marka === selectedMarka &&
            card.model === selectedModel &&
            priceMin <= card.prices &&
            priceMax >= card.prices)
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
        } else {
          cardsElement.style.display = "none";
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
// ---------------------login-----------------
const loginEntryText = document.querySelector(".login-entry-text");
const loginRegistrationText = document.querySelector(
  ".login-registration-text"
);
const entryElement = document.querySelector(".entry-element");
const registrationElement = document.querySelector(".registration-element");
const loginContainer = document.querySelector(".login-container");
loginContainer.style.display = "none";
registrationElement.style.display = "none";
const entrySubmitButton = document.querySelector(".entry-button");
const addCarsText = document.querySelector(".add-cars-texts");

const usersAddCars = document.querySelector(".users-add-cars");
const searchCars = document.querySelector(".search-cars");
const addCars = document.querySelector(".add-cars");

const cardContainer = document.querySelector(".cards-container");
const paginationContainer = document.querySelector("#pagination-controls");

const userButton = document.querySelector(".user-in-mobile");
const login = document.querySelector(".login");
const loginButton = document.querySelector(".login-in-mobile");
const userDesktop = document.querySelector(".user-in-desktop");
userButton.style.display = "none";
userDesktop.style.display = "none";

function loginFunction() {
  if (loginContainer.style.display === "none") {
    document.querySelector("body").style.overflow = "hidden";
    loginContainer.style.display = "flex";
    window.scrollTo(0, 0);
    if (window.innerWidth < 1024) {
      userDesktop.style.display = "none";
      if (addCars.addEventListener) {
        addCars.addEventListener("click", () => {
          usersAddCars.style.display = "block";
          addCarsText.style.display = "none";
          cardContainer.style.display = "none";
          paginationContainer.style.display = "none";
          document.querySelector(".filter-container").style.height = "1700px";
          document.querySelector(".filter-elements").style.height = "1700px";
        });
      }
      if (searchCars.addEventListener) {
        searchCars.addEventListener("click", () => {
          usersAddCars.style.display = "none";
          addCarsText.style.display = "none";
          cardContainer.style.display = "block";
          paginationContainer.style.display = "flex";
          document.querySelector(".filter-container").style.height = "320px";
          document.querySelector(".filter-elements").style.height = "320px";
        });
      }
    }
    loginEntryText.addEventListener("click", () => {
      loginEntryText.style.setProperty("--searchCars", "100%");
      loginRegistrationText.style.setProperty("--addCars", "0");
      entryElement.style.display = "flex";
      registrationElement.style.display = "none";
    });
    loginRegistrationText.addEventListener("click", () => {
      loginEntryText.style.setProperty("--searchCars", "0");
      loginRegistrationText.style.setProperty("--addCars", "100%");
      entryElement.style.display = "none";
      registrationElement.style.display = "flex";
    });
  } else {
    loginContainer.style.display = "none";
    document.querySelector("body").style.overflow = "auto";
  }
}
// -------------------entry-button----------------
entrySubmitButton.addEventListener("click", () => {
  userButton.style.display = "flex";
  loginButton.style.display = "none";
  loginContainer.style.display = "none";
  login.style.display = "none";
  if (window.innerWidth < 1024) {
    userDesktop.style.display = "none";
  }
  if (window.innerWidth > 1024) {
    userDesktop.style.display = "flex";
  }
  if (userDesktop.style.display === "flex") {
    if (addCars.addEventListener) {
      addCars.addEventListener("click", () => {
        usersAddCars.style.display = "block";
        addCarsText.style.display = "none";
        cardContainer.style.display = "none";
        paginationContainer.style.display = "none";
        document.querySelector(".filter-container").style.height = "1000px";
        document.querySelector(".filter-elements").style.height = "1000px";
      });
    }
    if (searchCars.addEventListener) {
      searchCars.addEventListener("click", () => {
        usersAddCars.style.display = "none";
        addCarsText.style.display = "none";
        cardContainer.style.display = "block";
        paginationContainer.style.display = "flex";
        document.querySelector(".filter-container").style.height = "200px";
        document.querySelector(".filter-elements").style.height = "200px";
      });
    }
  }
  document.querySelector("body").style.overflow = "auto";
});

const userElement = document.querySelector(".user-element");
const userElement1 = document.querySelector(".user-element1");
const userButton1 = document.querySelector(".user1");
userElement.style.display = "none";
userElement1.style.display = "none";

userButton.addEventListener("click", () => {
  if (userElement.style.display === "none") {
    userElement.style.display = "block";
  } else if (userElement.style.display === "block") {
    userElement.style.display = "none";
  }
});
userButton1.addEventListener("click", () => {
  if (userElement1.style.display === "none") {
    userElement1.style.display = "block";
  } else if (userElement1.style.display === "block") {
    userElement1.style.display = "none";
  }
});

const userCloseDesktop = document.querySelector(".user-exit-desktop");
const userCloseMobile = document.querySelector(".user-exit-mobile");
const searchInputs = document.querySelector(".input-elements");

userCloseDesktop.addEventListener("click", () => {
  userDesktop.style.display = "none";
  login.style.display = "flex";
  if (addCars.addEventListener) {
    addCars.addEventListener("click", () => {
      usersAddCars.style.display = "none";
      addCarsText.style.display = "flex";
      cardContainer.style.display = "block";
      paginationContainer.style.display = "flex";
      document.querySelector(".filter-container").style.height = "200px";
      document.querySelector(".filter-elements").style.height = "200px";
    });
  }
});
userCloseMobile.addEventListener("click", () => {
  userButton.style.display = "none";
  loginButton.style.display = "flex";
  if (addCars.addEventListener) {
    addCars.addEventListener("click", () => {
      usersAddCars.style.display = "none";
      addCarsText.style.display = "flex";
      cardContainer.style.display = "block";
      paginationContainer.style.display = "flex";
      document.querySelector(".filter-container").style.height = "220px";
      document.querySelector(".filter-elements").style.height = "220px";
    });
  }
});

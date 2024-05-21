document.addEventListener("DOMContentLoaded", function () {
  let cardsInformations = [
    {
      id: 1,
      image: "./images/cars/nissansunny/sunny1.png",
      image1: "./images/cars/nissansunny/sunny2.png",
      image2: "./images/cars/nissansunny/sunny3.png",
      image3: "./images/cars/nissansunny/sunny4.png",
      image4: "./images/cars/nissansunny/sunny5.png",
      image5: "./images/cars/nissansunny/sunny6.png",
      carTool1: "Yüngül lehimli disklər",
      carTool2: "Dəri salon",
      carTool3: "Mərkəzi qapanma",
      carTool4: "Oturacaqların ventilyasiyası",
      carTool5: "ABS",
      carTool6: "Park radarı",
      prices: 13500,
      price: "13 500 AZN",
      marka: "Nissan",
      model: "Sunny",
      year: "2013",
      millage: "115 000 km",
      engine: "1.2 L",
      horsePower: "84",
      banType: "sedan",
      gearBox: "variator",
      transmission: "Ön",
      color: "Ağ",
      fuel: "Benzin",
      description: "2013, 1.2 L, 115 000 km",
      aboutCar: "Avtomobil əla vəziyyətdədir.hec bir problemi yoxdur.",
      salerName: "Emin",
      phoneNumber: "055 555 55 55",
      dates: "04.28.2024",
      date: "28.04.2024",
    },
    {
      id: 2,
      image: "./images/cars/bmwx5old/x51.png",
      image1: "./images/cars/bmwx5old/x52.png",
      image2: "./images/cars/bmwx5old/x53.png",
      image3: "./images/cars/bmwx5old/x54.png",
      image4: "./images/cars/bmwx5old/x55.png",
      image5: "./images/cars/bmwx5old/x56.png",
      image6: "./images/cars/bmwx5old/x57.png",
      image7: "./images/cars/bmwx5old/x58.png",
      image8: "./images/cars/bmwx5old/x59.png",
      carTool1: "Yüngül lehimli disklər",
      carTool2: "Dəri salon",
      carTool3: "Mərkəzi qapanma",
      carTool4: "Oturacaqların ventilyasiyası",
      prices: 12000,
      price: "12 000 AZN",
      marka: "Bmw",
      model: "X5",
      year: "2000",
      millage: "315 666 km",
      engine: "4.4 L",
      horsePower: "385",
      banType: "offroader/suv",
      gearBox: "avtomat",
      transmission: "Tam",
      color: "Metallik",
      fuel: "Benzin",
      description: "2000, 4.4 L, 315 666 km",
      aboutCar:
        "Salam şexsi masinimdi nomresiz satilir. Karopqada vurma gecikme yoxdu pec kondisoner sideniya qizdirici.paketler hamsi qaydasindadi Bele xadavoyunda citdi probem yoxdu otur sur masindi. Zehmet olmasa yigib 2020 aid suallar vermeyin.BMW den anlayiwi olanlar narahat etsin Teşekkurler",
      salerName: "Eldar",
      phoneNumber: "055 555 55 55",
      dates: "04.22.2024",
      date: "22.04.2024",
    },
    {
      id: 3,
      image: "./images/cars/hyundaisantafe/santafe1.png",
      image1: "./images/cars/hyundaisantafe/santafe2.png",
      image2: "./images/cars/hyundaisantafe/santafe3.png",
      image3: "./images/cars/hyundaisantafe/santafe4.png",
      image4: "./images/cars/hyundaisantafe/santafe5.png",
      image5: "./images/cars/hyundaisantafe/santafe6.png",
      image6: "./images/cars/hyundaisantafe/santafe7.png",
      image7: "./images/cars/hyundaisantafe/santafe8.png",
      carTool1: "Park radarı",
      carTool2: "ABS",
      carTool3: "Kondisioner",
      carTool4: "Arxa görüntü kamerası",
      carTool5: "Yağış sensoru",
      prices: 22000,
      price: "22 000 AZN",
      marka: "Hyundai",
      model: "Santafe",
      year: "2007",
      millage: "200 000 km",
      engine: "2.7 L",
      horsePower: "201",
      banType: "offroader/suv",
      gearBox: "avtomat",
      transmission: "Tam",
      color: "Ağ",
      fuel: "Dizel",
      description: "2007, 2.7 L, 200 000 km",
      aboutCar:
        "Masin Tam ideal veziyyetdedir!Masinin elektron,mator karopka sisteminde hec bir problem yoxdur,Istenilen Yerde yoxlatdira bilersiz,Hal hazirda hec bir xerc teleb etmir. Masin tam FULL Komplektasiyadir.Masinda vuruq udar ve deyisen detal yoxdur. Masin tam olaraq Idealdir!",
      salerName: "Sahib",
      phoneNumber: "055 555 55 55",
      dates: "04.13.2024",
      date: "13.04.2024",
    },
    {
      id: 4,
      image: "./images/cars/hyundai30/i301.png",
      image1: "./images/cars/hyundai30/i302.png",
      image2: "./images/cars/hyundai30/i303.png",
      image3: "./images/cars/hyundai30/i304.png",
      image4: "./images/cars/hyundai30/i305.png",
      image5: "./images/cars/hyundai30/i306.png",
      image6: "./images/cars/hyundai30/i307.png",
      image7: "./images/cars/hyundai30/i308.png",
      image8: "./images/cars/hyundai30/i309.png",
      image9: "./images/cars/hyundai30/i3010.png",
      prices: 16000,
      price: "16 000 AZN",
      marka: "Hyundai",
      model: "i30",
      year: "2013",
      millage: "212 000 km",
      engine: "1.4 L",
      horsePower: "150",
      banType: "hetcbek",
      gearBox: "mexanika",
      transmission: "Ön",
      color: "Qara",
      fuel: "Benzin",
      description: "2013, 1.4 L, 212 000 km",
      aboutCar:
        "Mator karopka sisteminde hec bir problem yoxdur,Istenilen Yerde yoxlatdira bilersiz,Hal hazirda hec bir xerc teleb etmir. Masin tam FULL Komplektasiyadir.Masinda vuruq udar ve deyisen detal yoxdur.",
      salerName: "Sabir",
      phoneNumber: "055 555 55 55",
      dates: "03.30.2024",
      date: "30.03.2024",
    },
    {
      id: 5,
      image: "./images/cars/rav4old/rav4old1.png",
      image1: "./images/cars/rav4old/rav4old2.png",
      image2: "./images/cars/rav4old/rav4old3.png",
      image3: "./images/cars/rav4old/rav4old4.png",
      image4: "./images/cars/rav4old/rav4old5.png",
      image5: "./images/cars/rav4old/rav4old6.png",
      image6: "./images/cars/rav4old/rav4old7.png",
      image7: "./images/cars/rav4old/rav4old8.png",
      image8: "./images/cars/rav4old/rav4old9.png",
      prices: 20000,
      price: "20 000 $",
      marka: "Toyota",
      model: "Rav4",
      year: "2015",
      millage: "137 755 km",
      engine: "2.5 L",
      horsePower: "180",
      banType: "offroader/suv",
      gearBox: "avtomat",
      transmission: "Tam",
      color: "Ağ",
      fuel: "Benzin",
      description: "2015, 2.5 L, 137 755 km",
      aboutCar:
        "Maşın sinfinin ən full versiyasıdır(Limited version).Bütün funksiyaları işləkdir.Bu günə heç bir xərci yoxdur.Ehtiyac olduğu üçün dəyərindən ucuz satılır",
      salerName: "Akif",
      phoneNumber: "055 555 55 55",
      dates: "03.21.2024",
      date: "21.03.2024",
    },
    {
      id: 6,
      image: "./images/cars/prius30kuza/prius301.png",
      image1: "./images/cars/prius30kuza/prius302.png",
      image2: "./images/cars/prius30kuza/prius303.png",
      image3: "./images/cars/prius30kuza/prius304.png",
      image4: "./images/cars/prius30kuza/prius305.png",
      image5: "./images/cars/prius30kuza/prius306.png",
      image6: "./images/cars/prius30kuza/prius307.png",
      image7: "./images/cars/prius30kuza/prius308.png",
      prices: 14000,
      price: "14 000 AZN",
      marka: "Toyota",
      model: "Prius",
      year: "2009",
      millage: "236 000 mil",
      engine: "1.8 L",
      horsePower: "110",
      banType: "hetcbek",
      gearBox: "variator",
      transmission: "Ön",
      color: "Qara",
      fuel: "Hibrid",
      description: "2009, 1.8 L, 236 000 mil",
      aboutCar:
        "Avtomobil haqqında məlumat.Qovanda yağ azalma var.Təcili satılır qiymət sondur",
      salerName: "Azad",
      phoneNumber: "055 555 55 55",
      dates: "04.11.2024",
      date: "11.04.2024",
    },
    {
      id: 7,
      image: "./images/cars/sklassold/sklassold1.png",
      image1: "./images/cars/sklassold/sklassold2.png",
      image2: "./images/cars/sklassold/sklassold3.png",
      image3: "./images/cars/sklassold/sklassold4.png",
      image4: "./images/cars/sklassold/sklassold5.png",
      image5: "./images/cars/sklassold/sklassold6.png",
      image6: "./images/cars/sklassold/sklassold7.png",
      image7: "./images/cars/sklassold/sklassold8.png",
      image8: "./images/cars/sklassold/sklassold9.png",
      image9: "./images/cars/sklassold/sklassold10.png",
      prices: 74000,
      price: "7400 AZN",
      marka: "Mercedes-Benz",
      model: "S-Class",
      year: "2001",
      millage: "300 000 km",
      engine: "3.2 L",
      horsePower: "250",
      banType: "sedan",
      gearBox: "avtomat",
      transmission: "Arxa",
      color: "Metallik",
      fuel: "Benzin",
      description: "2001, 3.2 L, 300 000 km",
      aboutCar: "Qiymət sondur",
      salerName: "Xudaverdi",
      phoneNumber: "055 555 55 55",
      dates: "04.01.2024",
      date: "01.04.2024",
    },
    {
      id: 8,
      image: "./images/cars/bmw528/bmw5281.png",
      image1: "./images/cars/bmw528/bmw5282.png",
      image2: "./images/cars/bmw528/bmw5283.png",
      image3: "./images/cars/bmw528/bmw5284.png",
      image4: "./images/cars/bmw528/bmw5285.png",
      image5: "./images/cars/bmw528/bmw5286.png",
      image6: "./images/cars/bmw528/bmw5287.png",
      image7: "./images/cars/bmw528/bmw5288.png",
      image8: "./images/cars/bmw528/bmw5289.png",
      prices: 31000,
      price: "31 000 AZN",
      marka: "Bmw",
      model: "5-series",
      year: "2015",
      millage: "195 000 km",
      engine: "2.0 L",
      horsePower: "230",
      banType: "sedan",
      gearBox: "avtomat",
      transmission: "Arxa",
      color: "Qara",
      fuel: "Benzin",
      description: "2015, 2.0 L, 195 000 km",
      aboutCar:
        "KREDIT MÜMKÜNDÜR ILK ÖDƏNIŞ 10000 AZN.Öz aramızda banksız kredit mümkündür.95 lə sürurem motorun yağı bmw qrup tökülür.BEZKRASKA Özünə ideal F10 axtaranlar buyursun",
      salerName: "Elnur",
      phoneNumber: "055 555 55 55",
      dates: "04.17.2024",
      date: "17.04.2024",
    },
    {
      id: 9,
      image: "./images/cars/bmw328old/bmw3281.png",
      image1: "./images/cars/bmw328old/bmw3282.png",
      image2: "./images/cars/bmw328old/bmw3283.png",
      image3: "./images/cars/bmw328old/bmw3284.png",
      prices: 5500,
      price: "5500 AZN",
      marka: "Bmw",
      model: "X5",
      year: "1992",
      millage: "360 000 km",
      engine: "2.5 L",
      horsePower: "200",
      banType: "sedan",
      gearBox: "avtomat",
      transmission: "Arxa",
      color: "Metallik",
      fuel: "Benzin",
      description: "1992, 2.5 L, 360 000 km",
      aboutCar:
        "Kondisioner işləkdir,Motor karopka salamat vəziyyətdədir,Təcili satılır,Qiymətdə cuzi endirim olacaq",
      salerName: "Nazim",
      phoneNumber: "055 555 55 55",
      dates: "04.12.2024",
      date: "12.04.2024",
    },
    {
      id: 10,
      image: "./images/cars/cruz/cruz1.png",
      image1: "./images/cars/cruz/cruz2.png",
      image2: "./images/cars/cruz/cruz3.png",
      image3: "./images/cars/cruz/cruz4.png",
      image4: "./images/cars/cruz/cruz5.png",
      image5: "./images/cars/cruz/cruz6.png",
      image6: "./images/cars/cruz/cruz7.png",
      image7: "./images/cars/cruz/cruz8.png",
      image8: "./images/cars/cruz/cruz9.png",
      image9: "./images/cars/cruz/cruz10.png",
      prices: 17000,
      price: "17 000 AZN",
      marka: "Chevrolet",
      model: "Cruz",
      year: "2017",
      millage: "149 000 km",
      engine: "1.4 L",
      horsePower: "160",
      banType: "sedan",
      gearBox: "avtomat",
      transmission: "Arxa",
      color: "Metallik",
      fuel: "Benzin",
      description: "2017, 1.4 L, 149 000 km",
      aboutCar:
        "5000 km tamam olan kimi yagı dəyişdirilir Chevrolet servisdə. Karobkanın yagına kimi dəyişdirilib. 92 benzinlə rahat işləyir. Maşının heç bir problemi yoxdur. Otur sür maşındır. Təcili pul lazımdır ona görə satıram. 12000 azn nağd şəkildə 448 azndən 12 ay krediti qalıb. Real alıcıya biraz endirim ederem.",
      salerName: "Nadir",
      phoneNumber: "055 555 55 55",
      dates: "04.18.2024",
      date: "18.04.2024",
    },
    {
      id: 11,
      image: "./images/cars/elantra/elantra1.png",
      image1: "./images/cars/elantra/elantra2.png",
      image2: "./images/cars/elantra/elantra3.png",
      image3: "./images/cars/elantra/elantra4.png",
      image4: "./images/cars/elantra/elantra5.png",
      image5: "./images/cars/elantra/elantra6.png",
      image6: "./images/cars/elantra/elantra7.png",
      image7: "./images/cars/elantra/elantra8.png",
      image8: "./images/cars/elantra/elantra9.png",
      prices: 23800,
      price: "23 800 AZN",
      marka: "Hyundai",
      model: "Elantra",
      year: "2018",
      millage: "61 000 mil",
      engine: "2.0 L",
      horsePower: "180",
      banType: "sedan",
      gearBox: "avtomat",
      transmission: "Ön",
      color: "Mavi",
      fuel: "Benzin",
      description: "2018, 2.0 L, 61 000 mil",
      aboutCar:
        "Sadə motor sadə karobkadır.Özüm üçün gətirmişəm pula ehtiyac olduğu üçün satılır.Heç bir problemi yoxdur",
      salerName: "Nadim",
      phoneNumber: "055 555 55 55",
      dates: "04.02.2024",
      date: "02.04.2024",
    },
    {
      id: 12,
      image: "./images/cars/rangeroverold/rangerover1.png",
      image1: "./images/cars/rangeroverold/rangerover2.png",
      image2: "./images/cars/rangeroverold/rangerover3.png",
      image3: "./images/cars/rangeroverold/rangerover4.png",
      image4: "./images/cars/rangeroverold/rangerover5.png",
      image5: "./images/cars/rangeroverold/rangerover6.png",
      image6: "./images/cars/rangeroverold/rangerover7.png",
      image7: "./images/cars/rangeroverold/rangerover8.png",
      image8: "./images/cars/rangeroverold/rangerover9.png",
      prices: 15300,
      price: "15 300 AZN",
      marka: "Land Rover",
      model: "Range Rover",
      year: "2003",
      millage: "198 000 km",
      engine: "4.4 L",
      horsePower: "300",
      banType: "offroader/suv",
      gearBox: "avtomat",
      transmission: "Tam",
      color: "Qara",
      fuel: "Benzin",
      description: "2003, 4.4 L, 198 000 km",
      aboutCar:
        "Motor korobka ideal.Vuruq udar qəti yoxdur.Pnevmaları tam işlək.Salona yüngül əl gəzdirmək lazımdır",
      salerName: "Afiq",
      phoneNumber: "055 555 55 55",
      dates: "04.28.2024",
      date: "28.04.2024",
    },
    {
      id: 13,
      image: "./images/cars/vito/vito1.png",
      image1: "./images/cars/vito/vito2.png",
      image2: "./images/cars/vito/vito3.png",
      image3: "./images/cars/vito/vito4.png",
      image4: "./images/cars/vito/vito5.png",
      image5: "./images/cars/vito/vito6.png",
      image6: "./images/cars/vito/vito7.png",
      image7: "./images/cars/vito/vito8.png",
      image8: "./images/cars/vito/vito9.png",
      image9: "./images/cars/vito/vito10.png",
      prices: 27000,
      price: "27 000 AZN",
      marka: "Mercedes-Benz",
      model: "Vito",
      year: "2007",
      millage: "217 100 km",
      engine: "2.2 L",
      horsePower: "170",
      banType: "minivan",
      gearBox: "mexanika",
      transmission: "Ön",
      color: "Mavi",
      fuel: "Dizel",
      description: "2007, 2.2 L, 217 100 km",
      aboutCar: "Təcili satılır!!!!",
      salerName: "Qorxmaz",
      phoneNumber: "055 555 55 55",
      dates: "04.10.2024",
      date: "10.04.2024",
    },
    {
      id: 14,
      image: "./images/cars/ml/ml1.png",
      image1: "./images/cars/ml/ml2.png",
      image2: "./images/cars/ml/ml3.png",
      image3: "./images/cars/ml/ml4.png",
      image4: "./images/cars/ml/ml5.png",
      image5: "./images/cars/ml/ml6.png",
      prices: 12700,
      price: "12 700 AZN",
      marka: "Mercedes-Benz",
      model: "Ml",
      year: "2002",
      millage: "267 000 km",
      engine: "3.2 L",
      horsePower: "220",
      banType: "offroader/suv",
      gearBox: "avtomat",
      transmission: "Tam",
      color: "Metallik",
      fuel: "Benzin",
      description: "2002, 3.2 L, 267 000 km",
      aboutCar: "Təcili satılır.",
      salerName: "Rafiq",
      phoneNumber: "055 555 55 55",
      dates: "02.22.2024",
      date: "22.02.2024",
    },
    {
      id: 15,
      image: "./images/cards/card2.jpeg",
      prices: 78000,
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
      prices: 17000,
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
      prices: 41000,
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
      prices: 20000,
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
      prices: 40000,
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
      prices: 85000,
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
      prices: 11000,
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
      prices: 57000,
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
      prices: 47000,
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
      prices: 77000,
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
      prices: 122000,
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
      prices: 107000,
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
      prices: 55000,
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
      prices: 149000,
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
      prices: 127000,
      price: "127 000 $",
      marka: "Bmw",
      model: "M5",
      description: "2021, 4.4 L, 2 200 km",
      dates: "03.11.2024",
      date: "11.03.2024",
    },
    {
      id: 31,
      image: "./images/cards/card31.jpeg",
      prices: 10000,
      price: "10 000 $",
      marka: "Hyundai",
      model: "Sonata",
      description: "2015, 2.0 L, 190 200 km",
      dates: "02.19.2024",
      date: "19.02.2024",
      crashed: true,
      crash: "Qəzalı",
    },
    {
      id: 32,
      image: "./images/cards/card32.jpeg",
      prices: 14000,
      price: "14 000 $",
      marka: "Mercedes",
      model: "E-Class",
      description: "2016, 3.5 L, 220 000 km",
      dates: "01.22.2024",
      date: "22.01.2024",
      crashed: true,
      crash: "Qəzalı",
    },
    {
      id: 33,
      image: "./images/cards/card33.jpeg",
      prices: 2000,
      price: "2 000 $",
      marka: "Lada",
      model: "Vaz-2107",
      description: "2005, 1.7 L, 234 000 km",
      dates: "04.27.2024",
      date: "27.04.2024",
      crashed: true,
      crash: "Qəzalı",
    },
    {
      id: 34,
      image: "./images/cards/card34.jpeg",
      prices: 5000,
      price: "5 000 $",
      marka: "Kia",
      model: "Optima",
      description: "2013, 2.4 L, 134 000 km",
      dates: "02.04.2024",
      date: "04.02.2024",
      crashed: true,
      crash: "Qəzalı",
    },
    {
      id: 35,
      image: "./images/cards/card37.jpeg",
      prices: 1500,
      price: "1500 $",
      marka: "Lada",
      model: "Priora",
      description: "2009, 1.6 L, 221 000 km",
      dates: "11.05.2024",
      date: "05.11.2024",
      crashed: true,
      crash: "Qəzalı",
    },
    {
      id: 36,
      image: "./images/cards/card38.jpeg",
      prices: 11000,
      price: "11 000 $",
      marka: "Hyundai",
      model: "Sonata",
      description: "2013, 2.4 L, 111 000 km",
      dates: "01.05.2024",
      date: "05.01.2024",
      crashed: true,
      crash: "Qəzalı",
    },
    {
      id: 37,
      image: "./images/cards/card39.jpeg",
      prices: 5000,
      price: "5 000 $",
      marka: "Mercedes",
      model: "E-Class",
      description: "1998, 3.2 L, 341 000 km",
      dates: "01.04.2024",
      date: "04.01.2024",
      crashed: true,
      crash: "Qəzalı",
    },
  ];
  cardsInformations.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });
  const rentCar = [
    {
      id: 1,
      image: "./images/cards/card35.jpeg",
      prices: 30,
      price: "30 AZN / Günlük",
      marka: "Opel",
      model: "Astra",
      description: "2010, 1.8 L, Dizel",
      dates: "05.08.2024",
      date: "08.05.2024",
      rent: true,
      rentCar: "Icarə",
    },
    {
      id: 2,
      image: "./images/cards/card36.jpeg",
      prices: 150,
      price: "150 AZN / Günlük",
      marka: "Land Rover",
      model: "Range Rover",
      description: "2016, 5.0 L, Benzin",
      dates: "04.12.2024",
      date: "12.04.2024",
      rent: true,
      rentCar: "Icarə",
    },
    {
      id: 3,
      image: "./images/cards/card40.jpeg",
      prices: 100,
      price: "100 AZN / Günlük",
      marka: "BMW",
      model: "5 series",
      description: "2013, 2.0 L, Benzin",
      dates: "04.22.2024",
      date: "22.04.2024",
      rent: true,
      rentCar: "Icarə",
    },
    {
      id: 4,
      image: "./images/cards/card41.jpeg",
      prices: 70,
      price: "70 AZN / Günlük",
      marka: "Mercedes",
      model: "E-Class",
      description: "2011, 2.2 L, Dizel",
      dates: "02.28.2024",
      date: "28.02.2024",
      rent: true,
      rentCar: "Icarə",
    },
    {
      id: 5,
      image: "./images/cards/card42.jpeg",
      prices: 65,
      price: "65 AZN / Günlük",
      marka: "Hyundai",
      model: "Elantra",
      description: "2017, 2.0 L, Benzin",
      dates: "02.28.2024",
      date: "28.02.2024",
      rent: true,
      rentCar: "Icarə",
    },
    {
      id: 6,
      image: "./images/cards/card43.jpeg",
      prices: 160,
      price: "160 AZN / Günlük",
      marka: "Mercedes",
      model: "V-Class",
      description: "2021, 3.0 L, Benzin",
      dates: "03.17.2024",
      date: "17.03.2024",
      rent: true,
      rentCar: "Icarə",
    },
    {
      id: 6,
      image: "./images/cards/card44.jpeg",
      prices: 140,
      price: "140 AZN / Günlük",
      marka: "Toyota",
      model: "Camry",
      description: "2021, 2.5 L, Hibrid",
      dates: "05.10.2024",
      date: "10.05.2024",
      rent: true,
      rentCar: "Icarə",
    },
  ];

  rentCar.sort((a, b) => {
    let d1 = new Date(a.dates);
    let d2 = new Date(b.dates);
    return d2 - d1;
  });

  // ------------------------cards--------------------
  const cardsElement = document.querySelector(".cards-element");
  const paginationControls = document.getElementById("pagination-controls");

  let isCardClicked = false;
  let isNewCardClicked = false;
  let isCrashedCardClicked = false;
  let isRentCardClicked = false;
  const recordsPerPage = 10;
  const numberOfPages = Math.ceil(cardsInformations.length / recordsPerPage);

  const currentDate = new Date();

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function renderCards(page) {
    const startIndex = (page - 1) * recordsPerPage;
    const endIndex = startIndex + recordsPerPage;
    const itemsToShow = cardsInformations.slice(startIndex, endIndex);

    cardsElement.innerHTML = "";

    if (isCardClicked) {
      // ------------------all-cards------------------
      const shuffledCards = shuffle([...cardsInformations]);
      shuffledCards.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
        <div class="card-image">
          <img src="${card.image}" alt="image ${card.id}" />
          <p class="card-crash" ${card.crash ? "" : 'style="display: none;"'}>${
          card.crash || ""
        }</p>
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
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "cars.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else if (isNewCardClicked) {
      // ------------------new-cards------------------
      const sortedCards = cardsInformations.sort((a, b) => {
        const dateA = new Date(a.dates);
        const dateB = new Date(b.dates);
        return Math.abs(currentDate - dateA) - Math.abs(currentDate - dateB);
      });
      const closestCards = sortedCards.slice(0, 15);
      closestCards.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
          <div class="card-image">
            <img src="${card.image}" alt="image ${card.id}" />
            <p class="card-crash" ${
              card.crash ? "" : 'style="display: none;"'
            }>${card.crash || ""}</p>
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
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "cars.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else if (isCrashedCardClicked) {
      // ------------------crash-cards------------------
      const crashedCards = cardsInformations.filter(
        (card) => card.crashed === true
      );
      crashedCards.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
          <div class="card-image">
            <img src="${card.image}" alt="image ${card.id}" />
            <p class="card-crash">${card.crash}</p>
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
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "cars.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    } else if (isRentCardClicked) {
      // ------------------rent-cards------------------
      rentCar.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
          <div class="card-image">
            <img src="${card.image}" alt="image ${card.id}" />
            <p class="card-rent">${card.rentCar}</p>
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
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "cars.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
      // handleAboutUsers;
    } else {
      // ------------------------------------
      itemsToShow.forEach((card) => {
        const cardElement = document.createElement("li");
        cardElement.innerHTML = `
        <div class="card-image">
          <img data=${card.id}  src="${card.image}" alt="image ${card.id}" />
          <p class="card-crash" ${card.crash ? "" : 'style="display: none;"'}>${
          card.crash || ""
        }</p>
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
        // ---------------------cards-click------------
        cardElement.addEventListener("click", (e) => {
          localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
          const url = new URL(window.location.href);
          url.pathname = "cars.html";
          url.searchParams.set("id", card.id);
          window.open(url.toString(), "_blank");
        });
      });
    }
  }

  function renderPagination(currentPage) {
    paginationControls.innerHTML = "";

    for (let i = 1; i <= numberOfPages; i++) {
      const pageLink = document.createElement("button");
      pageLink.textContent = i;
      pageLink.className = "page-number";
      if (i === currentPage) {
        pageLink.style.backgroundColor = "#b0c";
      }
      pageLink.addEventListener("click", () => {
        renderCards(i);
        renderPagination(i);
      });
      paginationControls.appendChild(pageLink);
    }
  }

  renderCards(1);
  renderPagination(1);

  // ------------------------all-cards--------------------
  const filterElement = document.querySelector(".filter-container");
  const sliderElement = document.querySelector(".slider-container");
  const activeAllCArd = document.querySelector(".active-all-card");
  const activeNewCArd = document.querySelector(".active-new-card");
  const activeCrashCArd = document.querySelector(".active-crash-card");
  const activeRentCArd = document.querySelector(".active-rent-card");
  const hamburgerClosed = document.querySelector(".mobile-list");

  document.querySelectorAll(".all-cards").forEach((card) => {
    card.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = true;
      isNewCardClicked = false;
      isCrashedCardClicked = false;
      isRentCardClicked = false;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "100%");
      activeNewCArd.style.setProperty("--zero", "0%");
      activeCrashCArd.style.setProperty("--zero", "0%");
      activeRentCArd.style.setProperty("--zero", "0%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });

  // --------------------new-cards-------------------
  document.querySelectorAll(".new-cards").forEach((newCard) => {
    newCard.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isNewCardClicked = true;
      isCardClicked = false;
      isCrashedCardClicked = false;
      isRentCardClicked = false;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "0%");
      activeNewCArd.style.setProperty("--zero", "100%");
      activeCrashCArd.style.setProperty("--zero", "0%");
      activeRentCArd.style.setProperty("--zero", "0%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });

  // ------------------------crash-cards--------------------
  document.querySelectorAll(".crash-cards").forEach((crashCard) => {
    crashCard.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = false;
      isNewCardClicked = false;
      isCrashedCardClicked = true;
      isRentCardClicked = false;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "0%");
      activeNewCArd.style.setProperty("--zero", "0%");
      activeCrashCArd.style.setProperty("--zero", "100%");
      activeRentCArd.style.setProperty("--zero", "0%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });
  // ------------------rent-cards-----------
  document.querySelectorAll(".rent-cards").forEach((rentCard) => {
    rentCard.addEventListener("click", () => {
      filterElement.style.display = "none";
      sliderElement.style.display = "none";
      paginationControls.style.display = "none";
      isCardClicked = false;
      isNewCardClicked = false;
      isCrashedCardClicked = false;
      isRentCardClicked = true;
      renderCards(1);
      activeAllCArd.style.setProperty("--zero", "0%");
      activeNewCArd.style.setProperty("--zero", "0%");
      activeCrashCArd.style.setProperty("--zero", "0%");
      activeRentCArd.style.setProperty("--zero", "100%");
      hamburgerClosed.style.display = "none";
      document.body.style.overflow = "unset";
    });
  });

  // ---------------refresh-page---------------
  const logoImage = document.querySelector(".logo-element-in-mobile img");
  logoImage.addEventListener("click", () => {
    location.reload();
  });
  const logoMobile = document.querySelector(".logo-mobile img");
  logoMobile.addEventListener("click", () => {
    hamburgerClosed.style.display = "none";
    document.body.style.overflow = "unset";
  });
  // ------------------------select--------------------
  const markaContainer = [
    "Bütün Markalar",
    "Audi",
    "Bmw",
    "Chevrolet",
    "Hyundai",
    "Kia",
    "Lada",
    "Lexus",
    "Mercedes-Benz",
    "Nissan",
    "Porsche",
    "Toyota",
  ];
  const modelContainer = [
    {
      id: 1,
      marka: "Bmw",
      model: ["Bütün Modellər", "5-series", "X5", "X7", "M3", "M5"],
    },
    {
      id: 2,
      marka: "Mercedes-Benz",
      model: [
        "Bütün Modellər",
        "E-Class",
        "Cls 63 AMG",
        "E 63 AMG",
        "G 63 AMG",
        "S 63 AMG",
        "S-Class",
      ],
    },
    {
      id: 3,
      marka: "Audi",
      model: ["Bütün Modellər", "A6", "A7", "A8", "RS4", "RS5"],
    },
    {
      id: 4,
      marka: "Toyota",
      model: [
        "Bütün Modellər",
        "Camry",
        "Corolla",
        "Corolla Cross",
        "Land Cruiser",
        "Rav4",
        "Prius",
      ],
    },
    {
      id: 5,
      marka: "Lexus",
      model: ["Bütün Modellər", "LX300", "LX450", "LX570", "RX300", "RX330"],
    },
    {
      id: 6,
      marka: "Lexus",
      model: ["Bütün Modellər", "LX300", "LX450", "LX570", "RX300", "RX330"],
    },
    {
      id: 7,
      marka: "Nissan",
      model: ["Bütün Modellər", "Sunny"],
    },
    {
      id: 8,
      marka: "Lada",
      model: ["Bütün Modellər", "Vaz-2107", "Priora"],
    },
    {
      id: 9,
      marka: "Hyundai",
      model: ["Bütün Modellər", "Sonata", "Santafe", "i30", "Elantra"],
    },
    {
      id: 10,
      marka: "Kia",
      model: ["Bütün Modellər", "Optima"],
    },
    {
      id: 11,
      marka: "Chevrolet",
      model: ["Bütün Modellər", "Cruz"],
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
      const priceMin =
        parseInt(document.querySelector("#priceMin").value, 10) || 0;
      const priceMax =
        parseInt(document.querySelector("#priceMax").value, 10) ||
        Number.MAX_SAFE_INTEGER;
      const selectedMarka = markaElement.value;
      const selectedModel = modelElement.value;
      selectedContainer.innerHTML = "";
      cardsInformations.forEach((card) => {
        const cardPrice = parseInt(card.prices, 10);
        if (
          (card.marka === selectedMarka && card.model === selectedModel) ||
          (card.marka === selectedMarka &&
            selectedModel === "Bütün Modellər") ||
          (card.marka === selectedMarka &&
            card.model === selectedModel &&
            priceMin <= cardPrice &&
            priceMax >= cardPrice)
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
          paginationContainer.style.display = "none";
          // ---------------------cards-click------------
          selectedLi.addEventListener("click", (e) => {
            localStorage.setItem(`cardInfo-${card.id}`, JSON.stringify(card));
            const url = new URL(window.location.href);
            url.pathname = "cars.html";
            url.searchParams.set("id", card.id);
            window.open(url.toString(), "_blank");
          });
        } else {
          cardsElement.style.display = "none";
        }
        if (
          markaElement.value === "Bütün Markalar" &&
          modelElement.value === "Bütün Modellər"
        ) {
          selectedContainer.style.display = "none";
          cardsElement.style.display = "flex";
          paginationContainer.style.display = "flex";
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
          document.querySelector(".filter-container").style.height = "1750px";
          document.querySelector(".filter-elements").style.height = "1750px";
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
        document.querySelector(".filter-container").style.height = "1050px";
        document.querySelector(".filter-elements").style.height = "1050px";
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

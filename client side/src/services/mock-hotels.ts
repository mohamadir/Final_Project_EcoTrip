export let HOTELS = [
  {

    id: 1,
    name: "מלון המלך דוד",
    rating: 4.2,
    stars: 5,
    price: 1399,
    sale_price: 999,
    location: {
      lat: 31.7744,
      lon: 35.2226,
      distance: 3.2
    },
    address: "המלך דוד 23, ירושלים, 94101",
    description: "אחד ממלונות הפאר הטובים בעולם, נוף לחומות העיר. ",
    location_text: "המלון נמצא בירושלים ",
    features: "במלון יש שירותים למיניהם , שירות אינטרנט , חדר אוכל , ספא וכו'",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_1.jpg",
    images: [
      "assets/img/hotel/thumb/img_2.jpg",
      "assets/img/hotel/thumb/img_4.jpg",
      "assets/img/hotel/thumb/img_5.jpg",
      "assets/img/hotel/thumb/img_6.jpg"
    ],
    services: [],
    numb_available_rooms: 5,
    scores: [
      {
        id: 1,
        name: "נוסעים עסקיים",
        score: 98
      },
      {
        id: 2,
        name: "משפחה",
        score: 80
      },
      {
        id: 3,
        name: "יוקרה",
        score: 71
      },
      {
        id: 4,
        name: "צמחוניים",
        score: 64
      }
    ],
    reviews: [
      {
        id: 1,
        username: "David",
        avatar: "assets/img/user/adam.jpg",
        from: "נצרת",
        title: "מקום מדהים אין ספק , חייב לחזור למקום הזה , ממליץ בחום",
        content: "אין לי מילים אפילו לתאר כמה נהיננו במלון המיוחד הזה, מהשירות המדהים, האוכל, החדר והאנשים! פשוט אין מילים כמה מדהים! קיבלו אותנו בצורה יפה, אין דבר שביקשנו ואמרו לנו לא, פשוט חלום! אין ספק שנחזור שוב ושוב!",
        rating: 4,
        recommended_for: [1, 3]
      }
    ]
  }


  
  /*,{
    id: 2,
    name: "Hanoi Fortuna Hotel",
    rating: 3.7,
    stars: 4,
    price: 131,
    sale_price: 73,
    location: {
      lat: 21.021425,
      lon: 105.8158252,
      distance: 3.2
    },
    address: "360 Kim Ma Street Hanoi 100000",
    description: "Family-friendly Hanoi hotel in Ba Dinh, near Ho Chi Minh Mausoleum ",
    location_text: "This family-friendly Hanoi hotel is located in the business district, within 1 mi (2 km) of Thu Le Park, Vietnam Museum of Ethnology, and Giang Vo Exhibition Center. Ho Chi Minh Mausoleum and Temple of Literature are also within 2 mi (3 km). ",
    features: "Along with 3 restaurants, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_7.jpg",
    images: [],
    services: [],
    numb_available_rooms: 5,
        scores: [
      {
        id: 1,
        name: "Business Travelers",
        score: 98
      },
      {
        id: 2,
        name: "Family Travelers",
        score: 80
      },
      {
        id: 3,
        name: "Luxury Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Vegetarian",
        score: 64
      }
    ],
    reviews: []
  },*/
  /*{
    id: 3,
    name: "Pullman Hanoi Hotel",
    rating: 4.1,
    stars: 4,
    price: 93,
    sale_price: 88,
    location: {
      lat: 21.0295445,
      lon: 105.82603,
      distance: 3.2
    },
    address: "360 Kim Ma Street Hanoi 100000",
    description: "Family-friendly Hanoi hotel in Ba Dinh, near Ho Chi Minh Mausoleum ",
    location_text: "This family-friendly Hanoi hotel is located in the business district, within 1 mi (2 km) of Thu Le Park, Vietnam Museum of Ethnology, and Giang Vo Exhibition Center. Ho Chi Minh Mausoleum and Temple of Literature are also within 2 mi (3 km). ",
    features: "Along with 3 restaurants, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_8.jpg",
    images: [],
    services: [],
    numb_available_rooms: 5,
        scores: [
      {
        id: 1,
        name: "Business Travelers",
        score: 98
      },
      {
        id: 2,
        name: "Family Travelers",
        score: 80
      },
      {
        id: 3,
        name: "Luxury Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Vegetarian",
        score: 64
      }
    ],
    reviews: []
  },
  {
    id: 4,
    name: "Windy Hotel",
    rating: 3.3,
    stars: 4,
    price: 37,
    sale_price: 35,
    location: {
      lat: 21.0260087,
      lon: 105.8321135,
      distance: 3.2
    },
    address: "360 Kim Ma Street Hanoi 100000",
    description: "Family-friendly Hanoi hotel in Ba Dinh, near Ho Chi Minh Mausoleum ",
    location_text: "This family-friendly Hanoi hotel is located in the business district, within 1 mi (2 km) of Thu Le Park, Vietnam Museum of Ethnology, and Giang Vo Exhibition Center. Ho Chi Minh Mausoleum and Temple of Literature are also within 2 mi (3 km). ",
    features: "Along with 3 restaurants, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_8.jpg",
    images: [],
    services: [],
    numb_available_rooms: 5,
        scores: [
      {
        id: 1,
        name: "Business Travelers",
        score: 98
      },
      {
        id: 2,
        name: "Family Travelers",
        score: 80
      },
      {
        id: 3,
        name: "Luxury Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Vegetarian",
        score: 64
      }
    ],
    reviews: []
  },
  {
    id: 5,
    name: "Capital Garden Hotel",
    rating: 4.1,
    stars: 4,
    price: 37,
    sale_price: 35,
    location: {
      lat: 21.0154663,
      lon: 105.8109217,
      distance: 3.2
    },
    address: "360 Kim Ma Street Hanoi 100000",
    description: "Family-friendly Hanoi hotel in Ba Dinh, near Ho Chi Minh Mausoleum ",
    location_text: "This family-friendly Hanoi hotel is located in the business district, within 1 mi (2 km) of Thu Le Park, Vietnam Museum of Ethnology, and Giang Vo Exhibition Center. Ho Chi Minh Mausoleum and Temple of Literature are also within 2 mi (3 km). ",
    features: "Along with 3 restaurants, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_9.jpg",
    images: [],
    services: [],
    numb_available_rooms: 5,
        scores: [
      {
        id: 1,
        name: "Business Travelers",
        score: 98
      },
      {
        id: 2,
        name: "Family Travelers",
        score: 80
      },
      {
        id: 3,
        name: "Luxury Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Vegetarian",
        score: 64
      }
    ],
    reviews: []
  },
  {
    id: 6,
    name: "Hotel Nikko Hanoi",
    rating: 4.1,
    stars: 4,
    price: 37,
    sale_price: 35,
    location: {
      lat: 21.0179794,
      lon: 105.8397699,
      distance: 3.2
    },
    address: "360 Kim Ma Street Hanoi 100000",
    description: "Family-friendly Hanoi hotel in Ba Dinh, near Ho Chi Minh Mausoleum ",
    location_text: "This family-friendly Hanoi hotel is located in the business district, within 1 mi (2 km) of Thu Le Park, Vietnam Museum of Ethnology, and Giang Vo Exhibition Center. Ho Chi Minh Mausoleum and Temple of Literature are also within 2 mi (3 km). ",
    features: "Along with 3 restaurants, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_10.jpg",
    images: [],
    services: [],
    numb_available_rooms: 5,
        scores: [
      {
        id: 1,
        name: "Business Travelers",
        score: 98
      },
      {
        id: 2,
        name: "Family Travelers",
        score: 80
      },
      {
        id: 3,
        name: "Luxury Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Vegetarian",
        score: 64
      }
    ],
    reviews: []
  },
  {
    id: 7,
    name: "Parkside Sunline Hotel",
    rating: 4.0,
    stars: 4,
    price: 104,
    sale_price: 47,
    location: {
      lat: 21.0084391,
      lon: 105.8452307,
      distance: 3.2
    },
    address: "360 Kim Ma Street Hanoi 100000",
    description: "Family-friendly Hanoi hotel in Ba Dinh, near Ho Chi Minh Mausoleum ",
    location_text: "This family-friendly Hanoi hotel is located in the business district, within 1 mi (2 km) of Thu Le Park, Vietnam Museum of Ethnology, and Giang Vo Exhibition Center. Ho Chi Minh Mausoleum and Temple of Literature are also within 2 mi (3 km). ",
    features: "Along with 3 restaurants, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_11.jpg",
    images: [],
    services: [],
    numb_available_rooms: 5,
        scores: [
      {
        id: 1,
        name: "Business Travelers",
        score: 98
      },
      {
        id: 2,
        name: "Family Travelers",
        score: 80
      },
      {
        id: 3,
        name: "Luxury Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Vegetarian",
        score: 64
      }
    ],
    reviews: []
  },
  {
    id: 8,
    name: "Pullman Hanoi Hotel",
    rating: 4.1,
    stars: 4,
    price: 93,
    sale_price: 0,
    location: {
      lat: 21.032786,
      lon: 105.812913,
      distance: 3.2
    },
    address: "360 Kim Ma Street Hanoi 100000",
    description: "Family-friendly Hanoi hotel in Ba Dinh, near Ho Chi Minh Mausoleum ",
    location_text: "This family-friendly Hanoi hotel is located in the business district, within 1 mi (2 km) of Thu Le Park, Vietnam Museum of Ethnology, and Giang Vo Exhibition Center. Ho Chi Minh Mausoleum and Temple of Literature are also within 2 mi (3 km). ",
    features: "Along with 3 restaurants, this hotel has a full-service spa and an outdoor pool. Free WiFi in public areas and free valet parking are also provided. Other amenities include a nightclub, a health club, and a bar/lounge. ",
    room_amenities: "All 411 rooms feature thoughtful touches like bathrobes and slippers, plus free WiFi, free wired Internet, and LCD TVs with satellite channels. Guests will also find sitting areas, 24-hour room service, and minibars. ",
    thumb: "assets/img/hotel/thumb/img_8.jpg",
    images: [],
    services: [],
    numb_available_rooms: 5,
        scores: [
      {
        id: 1,
        name: "Business Travelers",
        score: 98
      },
      {
        id: 2,
        name: "Family Travelers",
        score: 80
      },
      {
        id: 3,
        name: "Luxury Travelers",
        score: 71
      },
      {
        id: 4,
        name: "Vegetarian",
        score: 64
      }
    ],
    reviews: []
  }*/
]

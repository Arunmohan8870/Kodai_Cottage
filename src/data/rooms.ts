import { Room } from "../types/Room";

export const rooms: Room[] = [
  {
    id: 1,
    name: "Valley View Cottage",
    description:
      "Luxurious cottage with panoramic views of the Kodaikanal valley, featuring a private garden and outdoor seating area",
    price: 1000,
    image:
      "https://media.istockphoto.com/id/2150982889/photo/beautiful-landscape-with-terrace-fields-at-poondi-a-remote-village-near-kodaikanal-in-tamil.jpg?s=612x612&w=0&k=20&c=XLWf2oQQHK8P4yp-gs5bAHv_mlD3zy-Fciqd3CKlcwA=",
    amenities: [
      "Mountain View",
      "Private Garden",
      "Fireplace",
      "Room Service",
      "Free Wi-Fi",
      "24/7 Security",
      "Parking",
      "Restaurant",
      "Laundry",
      "Mini Bar",
    ],
    maxOccupancy: 4,
    size: 30,
    bedType: "King",
    rating: 4.8,
    reviews: 10,
    location: {
      lat: 10.1984621,
      lng: 77.3297691,
    },
    nearbyAttractions: [
      {
        name: "Kodaikanal Lake",
        distance: 1.2,
        description:
          "A star-shaped artificial lake surrounded by lush green Palani Hills",
        image:
          "https://images.unsplash.com/photo-1584246805472-d6e6238798ee?auto=format&fit=crop&q=80",
        rating: 4.7,
      },
      {
        name: "Bryant Park",
        distance: 1.5,
        description:
          "A beautifully maintained botanical garden with exotic flowers",
        image:
          "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80",
        rating: 4.5,
      },
      {
        name: "Coaker's Walk",
        distance: 1.8,
        description:
          "A paved pedestrian path along the edge of steep slopes with panoramic views",
        image:
          "https://images.unsplash.com/photo-1623937228195-0e2c60f64b8a?auto=format&fit=crop&q=80",
        rating: 4.6,
      },
      {
        name: "Pine Forest",
        distance: 2.0,
        description: "Dense forest of tall pine trees perfect for nature walks",
        image:
          "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80",
        rating: 4.4,
      },
      {
        name: "Pillar Rocks",
        distance: 2.0,
        description: "Three gigantic rock pillars standing 400 feet high",
        image:
          "https://images.unsplash.com/photo-1622651783098-0bc0035d3b54?auto=format&fit=crop&q=80",
        rating: 4.8,
      },
    ],
  },
];

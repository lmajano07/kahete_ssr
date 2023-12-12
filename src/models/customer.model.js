const customers = [
  {
    id: 1,
    slug: "john1",
    name: "John",
    lastname: "Smith",
    email: "email@a.com",
    phone_number: "+503 7777-2052",
    photo: {
      name: "file1.png",
      image_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    user_links: [
      {
        url: "www.google.com",
        social_media: {
          type: "instagram",
          icon: "url",
        },
      },
      {
        url: "www.google.com",
        social_media: {
          type: "youtube",
          icon: "url",
        },
      },
    ],
  },
  {
    id: 2,
    slug: "sam-last",
    name: "Sam",
    lastname: "Lastname",
    email: "email@a.com",
    phone_number: "+503 7777-2052",
    photo: {
      name: "file1.png",
      image_url: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    user_links: [
      {
        url: "www.google.com",
        social_media: {
          type: "instagram",
          icon: "url",
        },
      },
    ],
  },
];

export default customers;

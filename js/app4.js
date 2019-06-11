"use strict";

const products = [
      {
        id: 3,
        price: 127,
        photos: [
              "1.jpg",
              "2.jpg",
              ]
      },
      {
        id: 5,
        price: 499,
      },
      {
        id: 10,
        price: 26,
        photos: [
          "3.jpg"
          ]
      },
      {
        id: 8,
        price: 78,
      },
    ];

  
  const photo = products.filter(item => "photos" in item && item.photos.length > 0 );
  console.log(photo);


  const cost = products.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
     
    return 0;
  });
   
  console.log(cost);

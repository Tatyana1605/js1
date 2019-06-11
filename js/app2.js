'use strict';

const post = {
        author: "John", //вывести этот текст
        postId: 23,
        commments: [
              {
                userId: 10,
                userName: "Alex",
                text: "lorem ipsum",
                rating: {
                     likes: 10,
                    dislikes: 2 //вывести это число
              }
           },
             {
              userId: 5, //вывести это число
              userName: "Jane",
              text: "lorem ipsum 2", //вывести этот текст
              rating: {
                    likes: 3,
                    dislikes: 1
            }
          },
        ]
    };

    console.log(post.author);
    console.log(post.commments[0].rating.dislikes);
    console.log(post.commments[1].userId);
    console.log(post.commments[1].text);
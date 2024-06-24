import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Post from './Post';


                    // Nguyen Tien Duc - 21521963
const postsData = [
    {
        id: 1,
        avatar: 'https://reactnative.dev/img/logo-og.png',
        username: 'Nguyen Tien Duc - 21521963',
        text: 'Ronaldo is better than Messi... 😀 😃 😄',
        image: 'https://cdn-img.thethao247.vn/origin_456x0/storage/files/tranvutung/2023/10/19/ronaldo-chan-sut-xuat-sac-nhat-teh-gioi-1697687464-105315.jpg',
        likes: 123,
        comments: 456,
        shares: 789,
    },
    {
        id: 2,
        avatar: 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png',
        username: 'Justin Bikeber',
        text: 'Hello UIT , I love You ',
        image: 'https://cdn.tuoitre.vn/thumb_w/640/471584752817336320/2023/2/10/tieu-su-justin-bieber-3678-167601620270457998666.jpg',
        likes: 111,
        comments: 555,
        shares: 9876,
    },
    {
        id: 3,
        avatar: 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png',
        username: 'Messi',
        text: 'Im The Second Player in The Word  ',
        image: 'https://cdnphoto.dantri.com.vn/4E4uBTbRctAjFU78Qh_IZsORz14=/thumb_w/1020/2023/10/17/bobnnat-1697538033845.jpg',
        likes: 111,
        comments: 555,
        shares: 9876,
    },
];

const Demo28_09 = () => {
    const [posts, setPosts] = useState([...postsData]);

    const handleOnCommentClick = (postId) => {
        const updatedPosts = posts.map(post => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: post.comments + 1,
                };
            }
            return post;
        });

        setPosts(updatedPosts);
    };

  

    const handleOnLikeClick = (postId) => {
    const updatePosts = posts.map(post => {
      if (post.id === postId) {
        if (post.liked) {
          return {
            ...post,
            likes: post.likes - 1,
            liked: false,

          }
        }
        else {
          return {
            ...post,
            likes: post.likes + 1,
            liked: true,
          }
        }
      }
      return post
    });
    setPosts(updatePosts);
  }

    const handleOnShareClick = (postId) => {
        const [posts, setPosts] = useState([...postsData]);

        const handleOnShareClick = (postId) => {
            const updatedPosts = posts.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        shares: post.shares + 1,
                    };
                }
                return post;
            });
    
            setPosts(updatedPosts);
        };
    };

    return (
        <ScrollView style={styles.container}>
            <Header appName="Social Media App" />

            <View style={styles.feed}>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                        handleOnCommentClick={handleOnCommentClick}
                        handleOnLikeClick={handleOnLikeClick}
                        handleOnShareClick={handleOnShareClick}
                    />
                ))}
            </View>
        </ScrollView>
    );
};

export default Demo28_09;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    feed: {
        flex: 1,
    },
});


// import React, {useState} from 'react';

// import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from 'react-native';
// import Lab1_2 from './components/Lab1_2'

// // Lý thuyết
// // Các biến cục bộ không tồn tại giữa các lần render
// // và các thay đổi đối với biến cục bộ không kích hoạt re-render

// // State ra đời
// // Hook useState: Cung cấp 2 thứ
// // 1. Một biến có thể lưu giá trị giữa các lần render
// // 2. Một hàm để cập nhật giá trị của biến và kích hoạt re-render

// const postsData = [
//   {
//     id: 1,
//     avatar: 'https://reactnative.dev/img/logo-og.png',
//     username: "Traveler",
//     text: "Exploring... 😀 😃 😄",
//     image: 'https://reactnative.dev/img/logo-og.png',
//     likes: 123,
//     comments: 456,
//     shares: 789
//   },
//   {
//     id: 2,
//     avatar: 'https://reactnative.dev/img/logo-og.png',
//     username: "Traveler2",
//     text: "Exploring... 😀 😃 😄2",
//     image: 'https://reactnative.dev/img/logo-og.png',
//     likes: 111,
//     comments: 555,
//     shares: 9876,
//   },
// ];

// export default function App() {
//   const [posts, setPosts] = useState([...postsData]);

//   function handleOnCommentClick(postId) {
//     const updatedPosts = posts.map(post => {
//       if (post.id === postId) {
//         return {
//           ...post,
//           comments: post.comments + 1,
//         }
//       }
//       return post;
//     });

//     setPosts(updatedPosts);
//   }

//   return (
// // <Lab1_2 />

//     <ScrollView style={styles.container}>
//       <View style={styles.feed}>
//     {posts.map(post => (
//       <View style={styles.post} key={post.id}>
//       <View style={styles.postHeader}>
//     <Image source={{uri: post.avatar}} style={styles.profileImage} />
//       <Text style={styles.text}>{post.username}</Text>
//     </View>
//       <Text>{post.text}</Text>
//       <Image source={{uri: post.image}} style={styles.contentImage} />
// <View style={styles.statContainer}>
//       <Text><Text>{post.likes}</Text> Likes</Text>
//       <Text><Text>{post.comments}</Text> Comments</Text>
//       <Text><Text>{post.shares}</Text> Shares</Text>
//       </View>

//       <View style={styles.horizontalLine}></View>
// <View style={styles.interactiveContainer}>
//       <TouchableOpacity style={styles.buttonContainer}>
//         <Image source={require('./assets/snack-icon.png')} style={styles.buttonImage} />
//         <Text>Likes</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.buttonContainer}
//       onPress={
//         () => handleOnCommentClick(post.id)
//         } >
//         <Image source={require('./assets/snack-icon.png')} style={styles.buttonImage} />
//         <Text>Comments</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.buttonContainer}>
//         <Image source={require('./assets/snack-icon.png')} style={styles.buttonImage} />
//         <Text>Shares</Text>
//       </TouchableOpacity>
//       </View>
//       </View>
//     ))}
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   text: {
//     fontSize: 30,
//     marginVertical: 10,
//   },
//   feed: {
//     flex: 1,
//   },
//   post: {
//     flex: 1,
//     padding: 20,
//   },
//   profileImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginRight: 10,
//   },
//   postHeader: {
//     flexDirection: 'row',
//   },
//   contentImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     marginVertical: 10,
//   },
//   statContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between'
//   },
//   horizontalLine: {
//     height: 1,
//     backgroundColor: '#ccc',
//     marginVertical: 10,
//   },
//   buttonImage: {
//     width: 20,
//     height: 20,
//     marginRight: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//   },
//   interactiveContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   }
// });

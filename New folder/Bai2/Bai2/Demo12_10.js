import React, { useState } from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './Header';
import Post from './Post';



const postsData = [
    {
        id: 1,
        avatar: 'https://reactnative.dev/img/logo-og.png',
        username: 'Nguyen Tien Duc',
        text: 'Nguyen Tien Duc- 21521963 , Hello every body!',
        image: 'https://nld.mediacdn.vn/291774122806476800/2023/8/13/3665085349062225008642913913849963549045693n-16918926488651354781164.jpg',
        likes: 777,
        comments: 456,
        shares: 789,
    },
    {
        id: 2,
        avatar: 'https://cdn.haitrieu.com/wp-content/uploads/2021/10/Logo-DH-Cong-Nghe-Thong-Tin-UIT.png',
        username: 'UIT',
        text: 'Hello UIT',
        image: 'https://www.uit.edu.vn/sites/vi/files/banner_uit.png',
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
        const [posts, setPosts] = useState([...postsData]);

        const handleOnCommentClick = (postId) => {
            const updatedPosts = posts.map(post => {
                if (post.id === postId) {
                    return {
                        ...post,
                        likes: post.likes + 1,
                    };
                }
                return post;
            });
    
            setPosts(updatedPosts);
        };
    };

    const handleOnShareClick = (postId) => {
        const [posts, setPosts] = useState([...postsData]);

        const handleOnCommentClick = (postId) => {
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
            <Header />

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

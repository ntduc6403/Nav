import React from 'react';

import { View, StyleSheet } from 'react-native';
import CustomButton from './CustomButton';

const InteractiveButtons = ({ post, handleOnCommentClick, handleOnLikeClick, handleOnShareClick }) => {

    return (
        <View style={styles.interactiveContainer}>
            {/* Likes Button */}
            <CustomButton
                post={post}
                image={require('./assets/like.jpg')}
                text="Likes"
                handleOnClick={handleOnLikeClick}
            />

            {/* Comments Button */}
            <CustomButton
                post={post}
                image={require('./assets/cmt.jpg')}
                text="Comments"
                handleOnClick={handleOnCommentClick}
            />

            {/* Shares Button */}
            <CustomButton
                post={post}
                image={require('./assets/share.png')}
                text="Shares"
                handleOnClick={handleOnShareClick}
            />
        </View>
    );
};

export default InteractiveButtons;

const styles = StyleSheet.create({
    interactiveContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

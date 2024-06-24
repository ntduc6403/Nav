import React, { useState } from 'react';


import { View, Text, Button, Image, Platform, StyleSheet, FlatList, ImageBackground, SectionList,TouchableOpacity } from 'react-native';
import { fruits_vegetables, workouts } from './components/data';

const Lab1_2 = () => {
    const [selectedExercises, setSelectedExercises] = useState([]);

    const toggleExerciseSelection = (exercise) => {
        if (selectedExercises.includes(exercise)) {
            const newSelectedExercises = selectedExercises.filter((ex) => ex !== exercise);
            setSelectedExercises(newSelectedExercises);
        } else {
            setSelectedExercises([...selectedExercises, exercise]);
        }
    };
    
          // Nguyễn Tiến Đức _ 21521963 
          // Nguyễn Tiến Đức _ 21521963 


    const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>
                {item}
            </Text>
            <Button
                title={selectedExercises.includes(item) ? 'DESELECT' : 'SELECT'}
                onPress={() => toggleExerciseSelection(item)}
            />
        </View>
    );

    const renderSectionHeader = ({ section }) => (
        <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>{section.title}</Text>
            <Image source={{ uri: section.url }} style={styles.sectionHeaderImage} />
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                FlatList - Workouts
            </Text>

            <ImageBackground style={styles.backgroundImage}
                source={{ uri: 'data:image/jpeg;base64,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'}}>
                <FlatList
                    data={workouts.map((item) => item.type)}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                    style={styles.listView}
                />
            </ImageBackground>

            <Text style={styles.title}>
                SectionList - Fruits & Vegetables
            </Text>

            <ImageBackground style={styles.backgroundImage}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN8mfx4-yJfYE-6Yb70zv9X3vXAXsF7JAO5EPCw-a7cg8urunN' }} >
                <SectionList
                    sections={fruits_vegetables}
                    renderItem={({ item }) => renderItem({ item })}
                    renderSectionHeader={renderSectionHeader}
                    keyExtractor={(item, index) => item + index}
                    style={styles.listView}
                    // stickySectionHeadersEnabled={true}
                />
            </ImageBackground>

            <Text style={styles.selectedItemsText}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ color: 'red', fontWeight: 'bold' }}>SELECTED EXERCISES:</Text>
                </View>
                {'\n'}
                {selectedExercises.join(', ')}

            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 35,
        marginBottom: 10,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        marginBottom: 10,
    },
    listView: {
        maxHeight: Platform.OS === 'ios' ? 280 : 260,
        marginBottom: 15,
        width: 320,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: 'white',
        margin:6,
        borderRadius: 10,
    },
    itemText: {
        fontSize: 16,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 70,
        paddingVertical: 8,
        
    },
    sectionHeaderText: {
        fontSize: 20,
        flex: 1,
        color:'white',
        fontWeight: 'bold',
    },
    sectionHeaderImage: {
        width: 30,
        height: 30,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color:'blue',
    },
    selectedItemsText: {
        fontSize: 16,
        marginTop: 10,
    },
});

export default Lab1_2;
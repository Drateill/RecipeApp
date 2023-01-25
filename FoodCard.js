import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FullRecipe from './FullRecipe'

const FoodCard = ({ recipe }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
{ !isOpen &&       <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: recipe.image }}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{recipe.title}</Text>
                <View style={styles.tagContainer}>
                    {recipe.tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>#{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>}
              {isOpen && <FullRecipe recipe={recipe} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6FFFD',
        borderWidth: 2,
        borderColor: '#00B894',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        alignItems: 'center',
    },
    imageContainer: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    tagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tag: {
        backgroundColor: '#C5E9E2',
        padding: 5,
        borderRadius: 20,
        marginRight: 10,
    },
    tagText: {
        color: '#033E32',
        fontSize: 12,
    },
});

export default FoodCard;
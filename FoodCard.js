import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const FoodCard = ({ recipe }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Full Recipe', { recipe })}>
<View style={styles.container}>
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
        </View>
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
    tagsContainer: {
        display:"flex",
        flexWrap: 'wrap',
      },
      tag: {
        backgroundColor: '#C5E9E2',
        borderRadius: 20,
        padding: 5,
        margin: 5,
        color: '#033E32',
      },
    tagText: {
        color: '#033E32',
        fontSize: 12,
    },
});

export default FoodCard;
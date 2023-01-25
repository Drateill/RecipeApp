import React from 'react';
import { View, Image, Text, FlatList, StyleSheet } from 'react-native';

function FullRecipe({ recipe }) {
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: recipe.image }} 
        style={styles.image}
      />
      <View style={styles.tagsContainer}>
        {recipe.tags.map((tag, index) => (
          <View key={index} style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
          </View>
        ))}
      </View>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(item) => item.ingredient}
        renderItem={({ item }) => (
          <View style={styles.ingredientContainer}>
            <Text style={styles.ingredientName}>{item.ingredient}</Text>
            <Text style={styles.ingredientQuantity}>{item.quantity}</Text>
          </View>
        )}
      />
      {recipe.instructions.map((instruction, index) => (
        <Text key={index} style={styles.instruction}>
          {instruction}
        </Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6FFFD',
      padding: 20,
    },
    image: {
      width: '100%',
      height: 250,
      borderRadius: 10,
      marginBottom: 20,
    },
    tagsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginBottom: 20,
    },
    tagContainer: {
      backgroundColor: '#C5E9E2',
      padding: 5,
      borderRadius: 20,
      marginRight: 10,
      marginBottom: 10,
    },
    tag: {
      color: '#033E32',
      fontWeight: 'bold',
    },
    ingredientContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    ingredientName: {
      flex: 1,
      fontWeight: 'bold',
      marginRight: 10,
    },
    ingredientQuantity: {
      fontWeight: 'bold',
    },
    instruction: {
      marginVertical: 10,
    },
  });
  
export default FullRecipe;
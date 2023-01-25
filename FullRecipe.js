import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function FullRecipe({ route }) {
  const { recipe } = route.params;

  return (
    <ScrollView>
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />
      <View style={styles.recipeContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.tagsContainer}>
        </View>
        <View style={styles.ingredientsContainer}>
          <Text style={styles.ingredientsTitle}>Ingredients:</Text>
          {recipe.ingredients.map((ingredient) => (
            <Text style={styles.ingredient} key={ingredient.ingredient}>
              {ingredient.quantity} {ingredient.ingredient}
            </Text>
          ))}
        </View>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructionsTitle}>Instructions:</Text>
          {recipe.instructions.map((instruction) => (
            <Text style={styles.instruction} key={instruction}>
              {instruction}
            </Text>
          ))}
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFFD',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  recipeContainer: {
    marginTop: 20,
    width: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#C5E9E2',
    padding: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  tagText: {
    color: '#033E32',
    fontWeight: 'bold',
  },
  ingredientsContainer: {
    marginBottom: 20,
  },
  ingredientsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  ingredient: {
    marginBottom: 5,
  },
  instructionsContainer: {},
  instructionsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  instruction: {
    marginBottom: 10,
  },
});

export default FullRecipe;
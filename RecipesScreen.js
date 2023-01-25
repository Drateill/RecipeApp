import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Button } from 'react-native';
import FoodCard from './FoodCard';
import { getRandomRecipes, getRecipes } from './api';
import { Picker } from '@react-native-picker/picker'

function RecipesScreen() {
  const [recipes, setRecipes] = useState([]);
  const [randomRecipeNumber, setRandomRecipeNumber] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newRecipes = await getRecipes();
        setRecipes(newRecipes);
        console.log(recipes)
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleNumberChange = (number) => {
    setRandomRecipeNumber(number);
  };

  const handleRandomRecipes = async () => {
    try {
      const randomRecipes = await getRandomRecipes(randomRecipeNumber);
      setRecipes(randomRecipes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <FoodCard recipe={item} />}
      />
      <View style={styles.menuContainer}>
        <Text style={styles.menuLabel}>Combien de repas ?</Text>
        <Picker
          selectedValue={randomRecipeNumber}
          style={styles.picker}
          onValueChange={handleNumberChange}
        >
          <Picker.Item label="1" value={1} />
          <Picker.Item label="2" value={2} />
          <Picker.Item label="3" value={3} />
          <Picker.Item label="4" value={4} />
          <Picker.Item label="5" value={5} />
        </Picker>
        <Button title="Random Recipe" onPress={handleRandomRecipes} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6FFFD',
    padding: 20,
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  menuLabel: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  picker: {
    width: 80,
    height: 40,
    // backgroundColor: '#C5E9E2',
    // borderRadius: 10,
    // padding: 5,
    // color: '#033E32',
  },
  // pickerText: {
  //   color: '#033E32',
  // },
});


export default RecipesScreen;

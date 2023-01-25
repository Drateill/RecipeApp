import React, { Component } from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import { getRecipes, getRandomRecipes } from './api';
import FoodCard from './FoodCard';
import {Picker} from '@react-native-picker/picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      randomRecipeNumber: 1,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    try {
      const recipes = await getRecipes();
      this.setState({ recipes });
    } catch (error) {
      console.error(error);
    }
  };

  handleRandomRecipes = async () => {
    try {
      const { randomRecipeNumber } = this.state;
      const newRecipes = await getRandomRecipes(randomRecipeNumber);
      console.log(newRecipes)

      if(newRecipes){
        this.setState({ recipes: newRecipes });
      }
    } catch (error) {
      console.error(error);
    }
  };




  handleNumberChange = (number) => {
    this.setState({ randomRecipeNumber: number });
  };

  render() {
    const { recipes, randomRecipeNumber } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuLabel}>Combien de repas ?</Text>
          <Picker
            selectedValue={randomRecipeNumber}
            style={styles.menuPicker}
            onValueChange={this.handleNumberChange}
          >
            <Picker.Item label="1" value={1} />
            <Picker.Item label="2" value={2} />
            <Picker.Item label="3" value={3} />
            <Picker.Item label="4" value={4} />
            <Picker.Item label="5" value={5} />
          </Picker>
        </View>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={recipes}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <FoodCard recipe={item} />}
        />
        <Button
          title="Random Recipes"
          onPress={this.handleRandomRecipes}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f6fffd'
  },
  menuLabel: {
    fontSize: 18,
    marginRight: 10,
  },
  menuPicker: {
    width: 100,
  },
  contentContainer: {
    alignSelf: 'stretch',
  },
});


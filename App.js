import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RecipesScreen from './RecipesScreen';
import FullRecipe from './FullRecipe';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Recipes" component={RecipesScreen} />
        <Stack.Screen name="Full Recipe" component={FullRecipe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

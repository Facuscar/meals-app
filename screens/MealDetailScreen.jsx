import { Text, View, Image } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const { imageUrl, title, ingredients, steps } = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text>{title}</Text>
      <View>

      </View>
      <Text>Ingredients</Text>
      {ingredients.map((ingredient) => <Text key={ingredient}>{ingredient}</Text>)}
      <Text>Steps</Text>
      {steps.map((step) => <Text key={step} >{step}</Text>)}
    </View>
  )
}

export default MealDetailScreen;

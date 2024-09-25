import { Text } from "react-native";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId
  return (
    <Text>
      This is the detail meal {mealId}
    </Text>
  )
}

export default MealDetailScreen;

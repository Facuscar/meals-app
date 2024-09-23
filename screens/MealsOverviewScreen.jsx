import { StyleSheet, FlatList, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)

  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>
            <MealItem title={itemData.item.title} />
        </Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList data={displayedMeals} keyExtractor={(itemData) => itemData.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  
})
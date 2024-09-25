import { StyleSheet, FlatList, View, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)

  const renderMealItem = (itemData) => {
    const { title, imageUrl, affordability, complexity, duration } = itemData.item;
    return (
      <View>
        <Text>
            <MealItem
              title={title}
              imageUrl={imageUrl}
              affordability={affordability}
              complexity={complexity}
              duration={duration}
            />
        </Text>
      </View>
    )
  }

  return (
    <View style={styles.listContainer}>
      <FlatList data={displayedMeals} keyExtractor={(itemData) => itemData.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    padding: 16,
  }
})
import { StyleSheet, FlatList, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;

  const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0)
  
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    })
  }, [])

  const renderMealItem = (itemData) => {
    const { title, imageUrl, affordability, complexity, duration, id } = itemData.item;
    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
        id={id}
      />
    )
  }

  return (
    <View>
      <FlatList contentContainerStyle={styles.listContainer} data={displayedMeals} keyExtractor={(itemData) => itemData.id} renderItem={renderMealItem} />
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
    gap: 16,
    padding: 16,
  }
})
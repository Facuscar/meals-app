import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/Subtitle";
import List from "../components/List";

const MealDetailScreen = ({ route }) => {
  const mealId = route.params.mealId

  const { imageUrl, title, ingredients, steps, affordability, complexity, duration } = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetail
        textStyle={styles.detailText}
        affordability={affordability}
        complexity={complexity}
        duration={duration}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List list={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List list={steps} />
        </View>
      </View>
    </ScrollView>
  )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: 'center',
    marginBottom: 16
  },
  listContainer: {
    maxWidth: "80%",
  },
})

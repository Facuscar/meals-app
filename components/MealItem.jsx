import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native";
import MealDetail from "./MealDetail";

const MealItem = ({ title, imageUrl, duration, complexity, affordability, id }) => {
  const navigation = useNavigation();

  const onClickMeal = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    })
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => pressed ? styles.buttonPressed : null}
        onPress={onClickMeal}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <MealDetail complexity={complexity} duration={duration} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? "hidden" : "visible",
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    width: '100%'
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 8,
  },
})
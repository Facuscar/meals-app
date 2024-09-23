import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const { categoryId } = route.params;

  return (
    <View>
      <Text>
        TEST {categoryId}
      </Text>
    </View>
  )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  
})
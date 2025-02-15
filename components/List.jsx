import { StyleSheet, Text, View } from "react-native";

const List = ({ list }) => {
  return list.map((listItem) => (
    <View key={listItem} style={styles.listItem}>
      <Text style={styles.itemText}>
        {listItem}
      </Text>
    </View>
  ))
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 8,
    marginHorizontal: 12,
    backgroundColor: "#e2b497"
  },
  itemText: {
    color: "#351401",
    textAlign: 'center',
  }
})
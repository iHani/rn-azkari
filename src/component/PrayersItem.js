import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import R from "./R";

const { PALETTE, IMAGES, COLORS } = R;

const PrayersItem = ({ pName, onPress }) => {
  return (
    <TouchableOpacity
      style={[PALETTE.row, PALETTE.center, styles.itemWrapper]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {pName.replace("My Prayers", "أذكـــــــــــــــاري")}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    borderRadius: 5,
    padding: 20,
    margin: 10,
    marginBottom: 3,
    backgroundColor: COLORS.blue,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    shadowOffset: { width: 0.2, height: 0.1 },
    shadowColor: "black",
    shadowOpacity: 5,
  },
});

export default PrayersItem;

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import R from "./R";

const { PALETTE, IMAGES, COLORS } = R;

const SadaqaButton = ({ pName, onPress }) => {
  return (
    <TouchableOpacity
      style={[PALETTE.row, PALETTE.center, styles.itemWrapper]}
      onPress={onPress}
    >
      <Text style={styles.text}>Hi</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    height: 62,
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 5,
    backgroundColor: COLORS.blue
  },
  text: {
    fontSize: 21,
    color: COLORS.white,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4
  }
});

export default SadaqaButton;

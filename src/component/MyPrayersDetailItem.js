import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import R from "./R";

const { PALETTE, COLORS } = R;

const MyPrayersDetailItem = ({
  pContent,
  pCount,
  onPressCount,
  editPrayers,
  fontSize,
  onShare
}) => {
  return (
    <View style={styles.mainWrapper}>
      <TouchableOpacity style={[styles.itemWrapper]} onPress={onPressCount}>
        <Text style={[styles.textContent, { fontSize: fontSize }]}>
          {pContent}
        </Text>
      </TouchableOpacity>
      <View
        style={[
          PALETTE.row,
          PALETTE.primaryBetween,
          PALETTE.secondaryCenter,
          styles.countWrapper
        ]}
      >
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text onPress={() => onShare(pContent)}>
            <Icon name="md-send" size={23} color={COLORS.white} />
          </Text>
          <Text style={{ paddingHorizontal: 10 }} onPress={editPrayers}>
            <Icon name="md-create" size={23} color={COLORS.white} />
          </Text>
        </TouchableOpacity>
        <Text style={styles.textCount}>{getCuontAsText(pCount)}</Text>
      </View>
    </View>
  );
};

function getCuontAsText(number) {
  console.log("dddd", parseInt(number) && true);
  if (parseInt(number) == 0) {
    number = 1;
  }

  if (number == 1) {
    return `مره واحده`;
  } else if (number == 2) {
    // weirdly '===' will fail if 2 is 2!
    return `مرتين`;
  } else if (number < 11) {
    return `${number} مرات`;
  } else {
    return `${number} مره`;
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    marginHorizontal: 7,
    marginBottom: 7
  },
  countWrapper: {
    width: "100%",
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.blue
  },
  itemWrapper: {
    width: "100%",
    padding: 8,
    backgroundColor: COLORS.transparentGrey
  },
  textContent: {
    writingDirection: "rtl",
    lineHeight: 38,
    color: COLORS.blue
  },
  textCount: {
    fontSize: 14,
    color: COLORS.white
  }
});

export default MyPrayersDetailItem;

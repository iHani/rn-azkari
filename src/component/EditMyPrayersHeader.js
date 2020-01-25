import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  Platform
} from "react-native";
import R from "./R";
import Icon from "react-native-vector-icons/AntDesign";

const { PALETTE, COLORS } = R;

const EditMyPrayersHeader = ({ onPressBack, onPressPlus, onPressMinus }) => {
  return (
    <View
      style={[
        PALETTE.row,
        PALETTE.primaryBetween,
        PALETTE.secondaryCenter,
        styles.header,
        Platform.OS == "android" && {
          marginTop: StatusBar.currentHeight
        }
      ]}
    >
      <TouchableOpacity onPress={onPressBack}>
        <Text>
          <Icon name="arrowleft" size={30} color={COLORS.white} />
        </Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>{"تــعــديــل الــدعــاء"}</Text>
      <View style={PALETTE.row}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 52.8,
    paddingHorizontal: 24,
    backgroundColor: COLORS.blue
  },
  headerText: {
    color: COLORS.white,
    fontSize: 18
  }
});

export default EditMyPrayersHeader;

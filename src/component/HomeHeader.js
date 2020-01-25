import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  Platform
} from "react-native";
import R from "./R";
import Icon from "react-native-vector-icons/Entypo";

const { PALETTE, IMAGES, COLORS } = R;

const HomeHeader = ({ onShare }) => {
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
      <TouchableOpacity onPress={onShare}>
        <Text>
          <Icon name="share" size={30} color={COLORS.white} />
        </Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>{"أذكــاري"}</Text>
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
    fontSize: 22,
    fontWeight: "700"
  }
});

export default HomeHeader;

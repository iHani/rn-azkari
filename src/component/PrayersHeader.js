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
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const { PALETTE, COLORS } = R;

const PrayersHeader = ({
  onPressBack,
  onPressPlus,
  onPressMinus,
  headerTitle
}) => {
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
      <View style={PALETTE.row}>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={onPressBack}>
          <Text>
            <Icon name="home" size={26} color={COLORS.white} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginRight: 12 }} onPress={onPressMinus}>
          <Text>
            <Icon name="magnify-minus" size={26} color={COLORS.white} />
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressPlus}>
          <Text>
            <Icon name="magnify-plus" size={26} color={COLORS.white} />
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>
        {headerTitle.replace(/ـ/g, "").replace("My Prayers", "أذكـــــاري")}
      </Text>
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

export default PrayersHeader;

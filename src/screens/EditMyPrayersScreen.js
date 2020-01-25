import React, { useState, useEffect } from "react";
import {
  View,
  Alert,
  Image,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import R from "../component/R";
import EditMyPrayersHeader from "../component/EditMyPrayersHeader";
import Database from "../../Database";

const { COLORS, IMAGES, PALETTE } = R;

const db = new Database();

const EditMyPrayersScreen = props => {
  const [times, setTimes] = useState("1");
  const [text, setText] = useState("");

  const flag = props.navigation.getParam("flag", 0);
  const edtData = props.navigation.getParam("data", []);
  const index = props.navigation.getParam("index", index);

  useEffect(() => {
    if (flag === 1) {
      setTimes(edtData && edtData.times ? edtData.times.toString() : "1");
      setText(edtData.text || "");
    }
  }, []);

  const submit = () => {
    if (flag == 1) {
      const editSubmit = props.navigation.getParam("editSubmit", "");
      if (times.toString().trim() && text.trim()) {
        editSubmit(times, text, index);
      }
      props.navigation.goBack();
    } else {
      const addSubmit = props.navigation.getParam("addSubmit", "");
      if (times.trim() && text.trim()) {
        addSubmit(times, text);
      }
      props.navigation.goBack();
    }
  };

  const del = () => {
    Alert.alert(
      "هل تريد حذف الدعاء بالتأكيد؟",
      " ",
      [
        {
          text: "حذف الدعاء",
          onPress: () => {
            const deleteSubmit = props.navigation.getParam("deleteSubmit", "");
            deleteSubmit(index);
            props.navigation.goBack();
          }
        },
        {
          text: "إلـغـاء",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  };

  const englishinize = number => {
    console.log("typeof number", typeof number);

    return number
      .toString()
      .replace(/[٠١٢٣٤٥٦٧٨٩]/g, d => parseInt(d.charCodeAt(0) - 1632));
  };

  return (
    <KeyboardAvoidingView
      style={[
        PALETTE.body,
        {
          backgroundColor: COLORS.bluePastel
        }
      ]}
    >
      <Image source={IMAGES.BACKGROUND} style={styles.bgImage} />
      <ScrollView>
        <View>
          {/** Header Section */}
          <EditMyPrayersHeader
            onPressBack={() => props.navigation.goBack()}
            // onPressMinus={() => {}}
            // onPressPlus={() => {}}
          />

          {/** Body Section */}
          <View style={[PALETTE.center, { padding: 10 }]}>
            <View style={{ width: "100%" }}>
              <Text style={styles.text}>{"نص الدعاء"}</Text>
              <TextInput
                style={styles.textInput}
                multiline={true}
                value={text}
                onChangeText={text => setText(text)}
              />
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row-reverse",
                paddingVertical: 8
              }}
            >
              <Text style={styles.text}>{"مرات التكرار"}</Text>
              <TextInput
                style={styles.textCount}
                keyboardType="numeric"
                value={englishinize(times)}
                onChangeText={text => setTimes(englishinize(text))}
              />
            </View>
            <View style={PALETTE.row}>
              {flag == 1 ? (
                <TouchableOpacity
                  style={[
                    styles.editingButtons,
                    { backgroundColor: COLORS.red }
                  ]}
                  onPress={del}
                >
                  <Text style={styles.delete}>{"حـــذف"}</Text>
                </TouchableOpacity>
              ) : (
                <View />
              )}
              <TouchableOpacity
                style={[
                  styles.editingButtons,
                  { backgroundColor: COLORS.blue }
                ]}
                onPress={submit}
              >
                <Text style={styles.submit}>{"حـــفـــظ"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

var styles = StyleSheet.create({
  editingButtons: {
    // width: 100,
    borderRadius: 4,
    backgroundColor: "green",
    marginHorizontal: 8,
    marginTop: 30
  },
  submit: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: "bold",
    shadowOffset: { width: 0.2, height: 0.1 },
    shadowColor: "black",
    shadowOpacity: 5,
    textAlign: "center"
  },
  delete: {
    color: "white",
    fontSize: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontWeight: "bold",
    shadowOffset: { width: 0.2, height: 0.1 },
    shadowColor: "black",
    shadowOpacity: 5,
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    color: COLORS.blue,
    textAlign: "right",
    fontWeight: "bold",
    padding: 8
  },
  textInput: {
    width: "100%",
    backgroundColor: "white",
    fontSize: 20,
    color: COLORS.blue,
    padding: 10,
    minHeight: 200,
    height: "auto",
    justifyContent: "flex-start",
    textAlignVertical: "top",
    textAlign: "right",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "lightgrey"
  },
  textCount: {
    width: 80,
    height: 50,
    backgroundColor: "white",
    fontSize: 20,
    color: COLORS.blue,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "lightgrey",
    textAlign: "center"
    // alignSelf: "flex-start"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute"
  }
});

export default EditMyPrayersScreen;

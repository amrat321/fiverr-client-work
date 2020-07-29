import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

class Card extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.logo}
              source={{
                uri:
                  "https://img.pngio.com/profile-icon-png-image-free-download-searchpngcom-profile-icon-png-673_673.png",
              }}
            />
            <View>
              <Text style={styles.text}>Text</Text>
              <Text style={styles.text}>Text</Text>
            </View>
          </View>

          <View style={styles.btn_View}>
            <View style={styles.btn_View2}>
              <View style={styles.btn_View3}>
                <MaterialCommunityIcons name="fan" size={24} color="#6e0abf" />
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.text}>Text : Text Text</Text>
          <Text style={styles.text}>Text : Text : Text</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    flexDirection: "column",
    borderWidth: 1,
    padding: 17,
    width: "90%",
    backgroundColor: "#2d3642",
    borderColor: "#192130",
    borderRadius: 20,
    elevation: 5,
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    flexDirection: "column",
  },
  logo: {
    width: 60,
    height: 60,
  },
  btn_View: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#2d3642",
    elevation: 5,
    borderColor: "#253045",
  },
  btn_View2: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#2d3642",
    elevation: 5,
    borderColor: "#253045",
  },
  btn_View3: {
    borderWidth: 1,
    padding: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "#2d3642",
    elevation: 5,
    borderColor: "#253045",
    paddingHorizontal: 7,
  },
  text: {
    color: "white",
  },
});

export default Card;

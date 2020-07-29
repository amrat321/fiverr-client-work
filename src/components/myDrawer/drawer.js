import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import DrawerMenu from "./menu";

export default class MyDrawer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgContainer}>
          <TouchableOpacity>
            <View style={styles.userNombre}>
              <Text style={styles.userTitulo}>B</Text>
            </View>
          </TouchableOpacity>
        </View>
        <DrawerMenu
          iconName="home"
          titleName="Text"
          navigation={() => this.props.navigation.navigate("Screen1")}
        />

        <DrawerMenu
          iconName="globe"
          titleName="Text"
          navigation={() => this.props.navigation.navigate("Screen2")}
        />
        <DrawerMenu iconName="globe" titleName="Comming Soon" />
        <DrawerMenu iconName="globe" titleName="Comming Soon" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#253045",
    flex: 1,
  },

  bgContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#A0A0A0",
    backgroundColor: "#262e39",
  },

  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },

  camaraContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  userNombre: {
    marginVertical: 10,
    backgroundColor: "#262e39",
  },

  userTitulo: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    fontStyle: "italic",
    marginHorizontal: 12,
    borderWidth: 2,
    width: 45,
    borderRadius: 100,
    color: "#fff",
    borderColor: "#293243",
    backgroundColor: "#252d3d",
  },
});

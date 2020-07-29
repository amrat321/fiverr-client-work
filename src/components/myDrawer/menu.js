import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

import Icon from "@expo/vector-icons/FontAwesome";


class Menu extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.navigation}>
        <View style={s.menuContainer}>
          <View style={s.tituloContainer}>
            <Text style={s.tituloTxt}>{this.props.titleName}</Text>
            <Text style={s.border}></Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10,
    marginVertical: 15,
  },

  iconoContainer: {
    flex: 1.5,
    justifyContent: "center",
  },

  tituloContainer: {
    flex: 8.5,
    justifyContent: "center",
  },
  tituloTxt: {
    fontSize: 13,
    color: "white",
    // borderBottomColor: 'red',
    // borderBottomWidth: 3,
    
    fontSize: 20

  },
  border:{
    borderBottomWidth: 4, borderBottomColor: '#9932CC', width: 90
  }
});

export default Menu;

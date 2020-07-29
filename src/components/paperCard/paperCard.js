import React from "react";
import {} from "native-base";
import { StyleSheet, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

class PaperCards extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.card}>
          <View style={styles.text_View}>
            <Text style={styles.text1}>Text</Text>
            <Text style={styles.text}>Text Text Text</Text>
          </View>
          <Image
            style={styles.image}
            source={{
              uri:
                "https://media-cdn.tripadvisor.com/media/photo-s/19/e3/d1/51/holland-casino-valkenburg.jpg",
            }}
          />
          <Text style={styles.title}>Latest Video</Text>
          <Text style={styles.info}>Text Text Text Text Text Text Text</Text>
          <View style={styles.gradientContainer}>
            <LinearGradient
              start={[1, 0.1]}
              colors={["#262d42", "#373e57"]}
              style={styles.gradient}
            >
              <View style={styles.btn}>
                <Text style={styles.btntext}>Text +100</Text>
              </View>
            </LinearGradient>
            <Text style={{ color: "white" }}>Text +100</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: 360,
    height: 350,
    backgroundColor: "black",
    color: "white",
  },
  image: {
    width: 350,
    height: 150,
  },
  text1: {
    color: "white",
    fontSize: 22,
  },
  text: {
    color: "white",
  },
  text_View: {
    marginLeft: 20,
    marginBottom: 20,
  },

  title: {
    color: "white",
    fontSize: 18,
    paddingVertical: 8,
  },
  info: {
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#262d42",
    paddingVertical: 10,
  },
  gradientContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  gradient: {
    alignItems: "center",
    borderRadius: 100,
  },
  btn: {
    width: 150,
    padding: 5,
    borderRadius: 20,
    // marginTop: 5,
    paddingVertical: 4,
  },
  btntext: {
    textAlign: "center",
    justifyContent: "center",
    color: "#fff",
  },
});
export default PaperCards;

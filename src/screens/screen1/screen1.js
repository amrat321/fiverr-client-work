import React from "react";
import { StyleSheet, View, ScrollView, SafeAreaView } from "react-native";
import { Card, MainHeader } from "../../components/index";

class ScreenOne extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <View style={styles.container}>
          <MainHeader />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#192130",
  },

  scrollView: {
    flex: 1,
  },
});

export default ScreenOne;

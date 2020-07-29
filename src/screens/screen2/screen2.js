import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PaperCard, MainHeader } from "../../components";

class ScreenTwo extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeView}>
        <MainHeader />
        <ScrollView style={styles.scrollView}>
          <View>
            <PaperCard />
            <PaperCard />
            <PaperCard />
            <PaperCard />
            <PaperCard />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  main_view: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollView: {
    flex: 1,
  },
});

export default ScreenTwo;

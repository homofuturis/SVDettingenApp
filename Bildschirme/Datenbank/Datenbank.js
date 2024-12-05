import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Kopfzeile from "../../komponenten/Kopfzeile";
const { height } = Dimensions.get("window");
const StockBildschirm = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={["left", "right"]}>
      <ImageBackground
        source={require("../../assets/Bilder/Startseite_Kopfzeile/background.png")} // Hintergrundbild
        resizeMode="cover"
        style={styles.image}
      >
        <Kopfzeile titel="Beispieltext" />
</ImageBackground>
</SafeAreaView>
</SafeAreaProvider>
);

export default StockBildschirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

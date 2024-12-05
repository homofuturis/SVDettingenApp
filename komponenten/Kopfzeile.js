import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { height: screenHeight } = Dimensions.get("window");

const Kopfzeile = ({ titel = "Meine App" }) => {
  return (
    <View style={styles.balken}>
      <Text style={styles.titel}>{titel}</Text>
      <Image
        source={require("../assets/Bilder/Startseite_Kopfzeile/logoQuadratisch.png")} // Feste Bildquelle
        style={styles.bild}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  balken: {
    height: screenHeight * 0.12, // 10 % der Bildschirmhöhe
    backgroundColor: "black", // Hintergrundfarbe
    flexDirection: "row", // Elemente horizontal ausrichten
    justifyContent: "space-between", // Abstand zwischen Text und Bild
    alignItems: "center", // Vertikale Ausrichtung
  },
  titel: {
    color: "white", // Textfarbe
    fontSize: 28, // Textgröße
    fontWeight: "bold", // Fettdruck
    marginLeft: 30,
    flexWrap: "wrap",
    width: "70%",
    fontStyle:"italic",
  },
  bild: {
    height: screenHeight * 0.1, // Gleiche Höhe wie der Balken
    width: screenHeight * 0.1, // Quadratische Größe
    marginRight: 15,
  },
});

export default Kopfzeile;

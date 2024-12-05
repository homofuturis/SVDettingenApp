// ButtonComponent.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Image } from "react-native";

const Button = ({ text, imageSource, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
    <View style={styles.contentContainer}>
      {imageSource && <Image source={imageSource} style={styles.icon} />}
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "flex-start",
    borderColor: "#F0F8FF",
    borderWidth: 3,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 60, // Beispielhöhe, anpassen nach Bedarf
    width: 60, // Beispielbreite, anpassen nach Bedarf
    marginRight: 40, // Abstand zwischen Bild und Text
  },
  buttonText: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default Button;

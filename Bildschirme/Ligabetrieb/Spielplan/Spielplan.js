import React from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Kopfzeile from "../../../komponenten/Kopfzeile";
import { useNavigation } from "@react-navigation/native";

const Spielplan = () => {
  const navigation = useNavigation();

  const showOptions = () => {
    Alert.alert(
      "Mannschaft auswählen",
      "Bitte wählen Sie die Mannschaft aus:",
      [
        {
          text: "1. Mannschaft",
          onPress: () => {
            navigation.navigate("Mannschaft1");
          },
        },
        {
          text: "2. Mannschaft",
          onPress: () => {
            navigation.navigate("Mannschaft2");
          },
        },
        {
          text: "3. Mannschaft",
          onPress: () => {
            navigation.navigate("Mannschaft3");
          },
        },
        {
          text: "Abbrechen",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <Kopfzeile titel={"Spielplan"} />
        <View style={styles.contentContainer}>
          <Button title="Mannschaft auswählen" onPress={showOptions} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    marginTop: 20,
  },
});

export default Spielplan;

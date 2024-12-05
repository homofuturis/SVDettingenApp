import React from "react";
import { ScrollView, ImageBackground, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native"; // Importiere useNavigation
import Button from "./Button"; // Import der Button-Komponente
import Kopfzeile from "../../komponenten/Kopfzeile";

const Startbildschirm = () => {
  const navigation = useNavigation(); // Verwende useNavigation

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground
          source={require("../../assets/Bilder/Startseite_Kopfzeile/background.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Kopfzeile titel={"Schach in \n jeder Form"} />
          <ScrollView contentContainerStyle={styles.schaltflächenContainer}>
            <Button
              text={"Datenbank"}
              imageSource={require("../../assets/Bilder/ButtonIcons/datenbank.png")}
              onPress={() => navigation.navigate("Datenbank")} // Navigiere zu Datenbank
            />
            <Button
              text={"Jugendtraining"}
              imageSource={require("../../assets/Bilder/ButtonIcons/jugendtraining.png")}
              onPress={() => navigation.navigate("Jugendtraining")} // Navigiere zu Jugendtraining
            />
            <Button
              text={"Rangliste Jugend"}
              imageSource={require("../../assets/Bilder/ButtonIcons/jugendranking.png")}
              onPress={() => navigation.navigate("RanglisteJugend")} // Navigiere zu Rangliste Jugend
            />
            <Button
              text={"DWZ-Liste"}
              imageSource={require("../../assets/Bilder/ButtonIcons/dwzliste.png")}
              onPress={() => navigation.navigate("DWZListe")} // Navigiere zu DWZ-Liste
            />
            <Button
              text={"Ligabetrieb"}
              imageSource={require("../../assets/Bilder/ButtonIcons/liga.png")}
              onPress={() => navigation.navigate("Ligabetrieb")} // Navigiere zu Ligabetrieb
            />
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "black"
      },

  image: {
    flex: 1,
    justifyContent: "flex-start",
    
  },
  schaltflächenContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 5,
    marginBottom: 15,
  },
});

export default Startbildschirm;

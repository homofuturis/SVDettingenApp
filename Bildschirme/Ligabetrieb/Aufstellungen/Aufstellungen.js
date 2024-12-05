import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Linking } from "react-native";
import Kopfzeile from "../../../komponenten/Kopfzeile"; // Import der Kopfzeile
import vereine from "./Aufstellungen.json"; // JSON-Daten importieren

const Aufstellungen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Funktion zum Filtern der Vereine basierend auf der Suchanfrage
  const filteredVereine = vereine.filter((verein) =>
    verein.Vereinsname.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePress = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error opening URL", err)
    );
  };

  return (
    <ImageBackground
      source={require("../../../assets/Bilder/Startseite_Kopfzeile/background.png")} // Pfad zum Hintergrundbild anpassen
      style={styles.container}
    >
      <Kopfzeile titel="Aufstellungen" /> {/* Kopfzeile hinzufügen */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Suche nach Vereinen..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => setSearchQuery("")}
          >
            <Text style={styles.clearButtonText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView style={styles.listContainer}>
        {filteredVereine.length > 0 ? (
          filteredVereine.map((verein, index) => (
            <View
              key={index}
              style={styles.listItem}
              onTouchEnd={() => handlePress(verein.Link)}
            >
              <Text style={styles.listText}>{verein.Vereinsname}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>Keine Vereine gefunden</Text>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 50
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // leicht transparenter Hintergrund
    paddingHorizontal: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
  },
  clearButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 30, // Quadratische Breite
    height: 30, // Quadratische Höhe
    borderWidth: 1,
    borderColor: "#000000", // Blaue Umrandung
    borderRadius: 2, // Abgerundete Ecken
    marginLeft: 10, // Abstand zur Suchleiste
    backgroundColor: "#880011",
  },
  clearButtonText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#808080", 
    textAlign: "center",
  },
  listContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
  listItem: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: "#808080", // Weiße Hintergrundfarbe
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  listText: {
    fontSize: 20,
    color: "#000", // Schwarzer Text
  },
  noResultsText: {
    textAlign: "center",
    color: "rgb(136 0 17)",
    marginTop: 20,
    fontSize: 22,
    backgroundColor: "rgba(128, 128, 128, 0.87)", // Durchsichtiger Hintergrund
    borderRadius: 3,
    alignSelf: "center", // Container auf Textbreite beschränken
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default Aufstellungen;

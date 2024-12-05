import React, { useContext } from "react";
import { View, FlatList, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Kopfzeile from "../../komponenten/Kopfzeile";
import { AppContext } from "./AppContext"; // Importiere den AppContext

const { height } = Dimensions.get("window");

const DWZListe = () => {
  const { dwzData } = useContext(AppContext); // Zugriff auf die DWZ-Daten aus dem Kontext

  // Header der Tabelle
  const tableHead = ["Spieler-ID","Nachname", "Vorname", "DWZ", "Elo"];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <Kopfzeile titel="DWZ-Liste" />

        {/* FlatList für die gesamte Tabelle */}
        <FlatList
          ListHeaderComponent={
            <View style={styles.headerRow}>
              {tableHead.map((header, index) => (
                <Text key={index} style={styles.headerText}>
                  {header}
                </Text>
              ))}
            </View>
          }
          data={dwzData} // Verwende die geladenen Daten aus dem Kontext
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View
              style={[
                styles.row,
                index % 2 === 0 ? styles.evenRow : styles.oddRow,
              ]}
            >
              {item.map((cell, cellIndex) => (
                <Text key={cellIndex} style={styles.cell}>
                  {cell}
                </Text>
              ))}
            </View>
          )}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f4f4f4", // Hintergrundfarbe für die Seite
    marginBottom: 50
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#880011",
    paddingVertical: 10,
    justifyContent: "space-between",
  },
  headerText: {
    flex: 1,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  evenRow: {
    backgroundColor: "#ffffff",
  },
  oddRow: {
    backgroundColor: "#f9f9f9",
  },
  cell: {
    flex: 1,
    textAlign: "center",
    color: "#333",
    fontSize: 12,
  },
});

export default DWZListe;

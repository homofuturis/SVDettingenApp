import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SectionList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Kopfzeile from "../../../komponenten/Kopfzeile";

// Direktes Importieren der JSON-Datei
import m2Termine from "./M2Termine.json";

const M2 = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const parseData = () => {
      // JSON-Daten direkt verwenden
      const parsedData = m2Termine.map((row) => ({
        date: row.Datum,
        time: row.Uhrzeit,
        venue: row.Sportstätte,
        homeTeam: row.Heimmannschaft,
        awayTeam: row.Gastmannschaft,
        result: row.Ergebnis,
      }));

      // Termine nach Datum gruppieren
      const groupedMatches = parsedData.reduce((acc, match) => {
        const date = match.date;
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(match);
        return acc;
      }, {});

      const sections = Object.keys(groupedMatches).map((date) => ({
        title: date,
        data: groupedMatches[date],
      }));

      setMatches(sections);
    };

    parseData();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <Kopfzeile titel="Mannschaft 2 - Spieltermine" />
        <SectionList
          sections={matches}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.matchContainer}>
              <Text style={styles.matchText}>
                {item.time} - {item.venue}
              </Text>
              <Text style={styles.matchText}>
                {item.homeTeam} vs {item.awayTeam}
              </Text>
              {item.result && <Text style={styles.resultText}>{item.result}</Text>}
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.dateHeader}>{title}</Text>
          )}
          stickySectionHeadersEnabled
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginBottom: 40,
  },
  dateHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
    textAlign: "center"
  },
  matchContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  matchText: {
    fontSize: 16,
    marginBottom: 5,
  },
  resultText: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default M2;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppNavigator from "./navigation/AppNavigator"; // Importiere den AppNavigator
import { AppContext } from "./Bildschirme/DWZListe/AppContext";
import { AppProvider } from "./Bildschirme/DWZListe/AppContext";
export default function App() {
  return (
    <AppProvider> {/* Umgebe den gesamten App-Inhalt mit dem Provider */}
      <>
        <StatusBar style="light" hidden={true} /> {/* Statusbar ausblenden */}
        <View style={styles.container}>
          <AppNavigator /> {/* Verwende den Navigator hier */}
        </View>
      </>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
});

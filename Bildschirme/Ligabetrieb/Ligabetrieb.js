import React, { useState } from "react";
import {
  ScrollView,
  ImageBackground,
  StyleSheet,
  Modal,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Button from "../Startbildschirm/Button";
import Kopfzeile from "../../komponenten/Kopfzeile";

const { height, width } = Dimensions.get("window");

const Ligabetrieb = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleOptionPress = (option) => {
    setModalVisible(false);
    navigation.navigate(`Mannschaft${option}`); // Navigiere zur entsprechenden Mannschaft
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["left", "right"]}>
        <ImageBackground
          source={require("../../assets/Bilder/Startseite_Kopfzeile/background.png")}
          resizeMode="cover"
          style={styles.image}
        >
          <Kopfzeile titel={"Ligabetrieb"} />
          <ScrollView contentContainerStyle={styles.schaltflächenContainer}>
            <Button
              text={"Spielplan"}
              imageSource={require("../../assets/Bilder/ButtonIcons/spielplan.png")}
              onPress={() => setModalVisible(true)} // Öffne das Modal
            />
            <Button
              text={"Aufstellungen"}
              imageSource={require("../../assets/Bilder/ButtonIcons/aufstellungen.png")}
              onPress={() => navigation.navigate("Aufstellungen")} // Navigiere zu Aufstellungen
            />
          </ScrollView>

          {/* Modal für die Auswahl der Mannschaft */}
          <Modal
            visible={modalVisible}
            animationType="none"
            transparent={true} // Erlaube transparente Darstellung
            onRequestClose={() => setModalVisible(false)} // Schließe Modal bei Zurück-Taste
          >
            <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Mannschaft auswählen</Text>
                  {/* Optionen in der Reihenfolge 1, 2, 3 */}
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => handleOptionPress(1)}
                  >
                    <Text style={styles.modalButtonText}>1. Mannschaft</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => handleOptionPress(2)}
                  >
                    <Text style={styles.modalButtonText}>2. Mannschaft</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => handleOptionPress(3)}
                  >
                    <Text style={styles.modalButtonText}>3. Mannschaft</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Halbtransparenter Hintergrund
    position: "absolute",
    top: 0,
    left: 0,
    width: width,
    height: height, // Decke den gesamten Bildschirm ab
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // Für Android Schatten
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  modalButton: {
    width: "100%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: "#af2230",
    alignItems: "center",
  },
  modalButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Ligabetrieb;

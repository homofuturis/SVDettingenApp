import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Startbildschirm from "../Bildschirme/Startbildschirm/Startbildschirm";
import StockBildschirm from "../Bildschirme/StockBildschirm";
import Datenbank from "../Bildschirme/Datenbank/Datenbank";
import Jugendtraining from "../Bildschirme/Jugendtraining/Jugendtraining";
import RanglisteJugend from "../Bildschirme/RanglisteJugend/RanglisteJugend";
import DWZListe from "../Bildschirme/DWZListe/DwzListe";
import LigaBetrieb from "../Bildschirme/Ligabetrieb/Ligabetrieb";
import Aufstellungen from "../Bildschirme/Ligabetrieb/Aufstellungen/Aufstellungen";
import Spielplan from "../Bildschirme/Ligabetrieb/Spielplan/Spielplan";
import Mannschaft1 from "../Bildschirme/Ligabetrieb/Spielplan/M1";
import Mannschaft2 from "../Bildschirme/Ligabetrieb/Spielplan/M2";
import Mannschaft3 from "../Bildschirme/Ligabetrieb/Spielplan/M3";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Startbildschirm"
      screenOptions={{ headerShown: false, animation: "slide_from_right" }} // Kopfzeile deaktivieren
    >
      <Stack.Screen name="Startbildschirm" component={Startbildschirm} />
      <Stack.Screen name="StockBildschirm" component={StockBildschirm} />
      <Stack.Screen name="Jugendtraining" component={Jugendtraining} />
      <Stack.Screen name="RanglisteJugend" component={RanglisteJugend} />
      <Stack.Screen name="DWZListe" component={DWZListe} />
      <Stack.Screen name="Ligabetrieb" component={LigaBetrieb} />
      <Stack.Screen name="Spielplan" component={Spielplan} />
      <Stack.Screen name="Mannschaft1" component={Mannschaft1} />
      <Stack.Screen name="Mannschaft2" component={Mannschaft2} />
      <Stack.Screen name="Mannschaft3" component={Mannschaft3} />
      <Stack.Screen name="Aufstellungen" component={Aufstellungen} />
      <Stack.Screen name="Datenbank" component={Datenbank} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

import { NavigationContainer } from "@react-navigation/native";
import { Text, View } from "react-native";
import { SplashScreen } from "./pages";
import 'react-native-gesture-handler'

export default function Index() {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
}

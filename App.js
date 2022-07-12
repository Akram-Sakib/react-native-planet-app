import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import Text from "./src/components/text/text";
import Details from "./src/screens/details";
import Home from "./src/screens/home";
import { colors } from "./src/theme/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-medium.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Light.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
  });

  if (!loaded) {
    return <Text>Font is loading</Text>;
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: "center",
    justifyContent: "center",
  },
});

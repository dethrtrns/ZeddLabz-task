import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  Link,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { Text } from "../components/Themed";
import { SearchBar } from "react-native-screens";
import { PoppinsText } from "../components/StyledText";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name='(tabs)'
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='modal'
          options={{
            headerTitle: () =>
              isSearchBarOpen ? (
                <SearchBar placeholder='search here...' />
              ) : (
                <PoppinsText>Products</PoppinsText>
              ),
            // title: isSearchBarOpen ? "" : "Products",
            presentation: "modal",
            headerRight: () => (
              <>
                <Pressable onPress={() => setIsSearchBarOpen(!isSearchBarOpen)}>
                  {({ pressed }) => (
                    <FontAwesome
                      name='search'
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
                <SearchBar placeholder='search here' />
                <Link to='/cart'>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name='shopping-cart'
                        size={25}
                        color={Colors[colorScheme ?? "light"].text}
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
                <Text
                  style={{
                    position: "absolute",
                    height: 16,
                    width: 16,
                    top: -3,
                    right: 0,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "#FFA347",
                    borderRadius: 50,
                  }}>
                  5
                </Text>
              </>
            ),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

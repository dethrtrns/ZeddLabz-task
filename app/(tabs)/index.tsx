import { Pressable, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { Link } from "expo-router";
import Colors from "../../constants/Colors";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Shop Landing Tab</Text>
      {/* button to navigate to the /modal route */}
      <Link
        href='/modal'
        asChild>
        <Pressable
          style={{
            alignItems: "center",
          }}>
          {({ pressed }) => (
            <>
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                }}>
                cleck below icon to shop for all your grocery needs!
              </Text>
              <FontAwesome
                name='shopping-bag'
                size={25}
                color={Colors.light.text}
                style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
              />
            </>
          )}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

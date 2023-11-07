import { useContext, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Text, Pressable } from "react-native";
import { Link } from "@react-navigation/native";
import { CartContext } from "../../context/cardContext";

const CartIcon = () => {
  const { cartItems } = useContext(CartContext);
  const colorScheme = useColorScheme();

  return (
    <Link
      style={{
        position: "relative",
      }}
      to='/cart'>
      <Pressable>
        {({ pressed }) => (
          <>
            <FontAwesome
              name='shopping-cart'
              size={25}
              color={Colors[colorScheme ?? "light"].text}
              style={{
                marginRight: 15,
                opacity: pressed ? 0.5 : 1,
              }}
            />
            <Text
              style={{
                position: "absolute",
                height: 16,
                width: 16,
                top: -3,
                right: 3,
                textAlign: "center",
                fontSize: 12,
                fontWeight: "bold",
                color: "#fff",
                backgroundColor: "#FFA347",
                borderRadius: 50,
              }}>
              {cartItems.length}
            </Text>
          </>
        )}
      </Pressable>
    </Link>
  );
};

export default CartIcon;

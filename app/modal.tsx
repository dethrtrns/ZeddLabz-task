import { StatusBar } from "expo-status-bar";
import { Image, Platform, ScrollView, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import { View } from "../components/Themed";
import { PoppinsText } from "../components/StyledText";
import Colors from "../constants/Colors";
import ProductCard from "../features/shop/components/ProductCard/ProductCard";
import { products } from "../constants/dummyDb";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {/* horizontally scrollable category list */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/images/CategoryImgs/Ellipse17ctgryBreads.png")}
              style={styles.categoryImage}
            />
            <PoppinsText style={styles.categoryTitle}>breads</PoppinsText>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/images/CategoryImgs/Ellipse18ctgryChoc.png")}
              style={styles.categoryImage}
            />
            <PoppinsText style={styles.categoryTitle}>Chocolates</PoppinsText>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/images/CategoryImgs/Ellipse19ctgryGrains.png")}
              style={styles.categoryImage}
            />
            <PoppinsText style={styles.categoryTitle}>Grains</PoppinsText>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/images/CategoryImgs/Ellipse20ctgryVeg.png")}
              style={styles.categoryImage}
            />
            <PoppinsText style={styles.categoryTitle}>Vegetables</PoppinsText>
          </View>
          <View style={styles.categoryItem}>
            <Image
              source={require("../assets/images/CategoryImgs/Ellipse21ctgryFruits.png")}
              style={styles.categoryImage}
            />
            <PoppinsText style={styles.categoryTitle}>Fruits</PoppinsText>
          </View>
        </ScrollView>
      </View>
      <View style={styles.separator}></View>
      {/* vertically scrollable product list */}
      <ScrollView style={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ScrollView>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar
        backgroundColor='#03634A' //Added the correct status bar color from the figma file
        style={Platform.OS === "ios" ? "light" : "auto"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    backgroundColor: "lightgrey",
    height: 2,
    width: "90%",
  },
  categoryContainer: {
    height: 100,
    marginVertical: 20,
  },
  categoryItem: {
    height: 80,
    width: 80,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryImage: {
    height: 50,
    width: 50,
    backgroundColor: "grey",
    borderRadius: 50,
  },
  categoryTitle: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 5,
  },
  productList: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
  productItem: {
    flexDirection: "row",
    height: 120,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    gap: 10,
  },
  productImage: {
    height: 80,
    width: 80,
    backgroundColor: "grey",
    borderRadius: 50,
  },
  productInfo: {
    flex: 1,
    marginLeft: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    // color: "grey",
    marginVertical: 5,
  },
  productQuantity: {
    width: 80,
    height: 30,
  },
  productButton: {
    color: "#06D6A0",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: -40,
  },
  productButtonPoppinsText: {
    //change font color to #06D6A0
    fontSize: 14,

    color: Colors.primary,
    fontWeight: "bold",
  },
});

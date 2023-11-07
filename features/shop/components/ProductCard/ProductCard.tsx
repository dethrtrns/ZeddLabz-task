import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PoppinsText } from "../../../../components/StyledText";
import { Picker } from "@react-native-picker/picker";
import Colors from "../../../../constants/Colors";
import { Product } from "../../../../types/products";
import { useContext, useState } from "react";
import { CartContext } from "../../../cart/context/cardContext";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { setCartItems } = useContext(CartContext);
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantity[0]);

  return (
    <>
      <TouchableOpacity style={styles.productItem}>
        <Image
          source={product.img}
          style={styles.productImage}
        />
        <View style={styles.productInfo}>
          <PoppinsText style={styles.productTitle}>{product.title}</PoppinsText>
          {product.description && (
            <PoppinsText style={styles.productDescription}>
              {product.description}
            </PoppinsText>
          )}
          <PoppinsText style={styles.productPrice}>
            ₹{product.price}
          </PoppinsText>
          <View style={styles.qtyBox}>
            <Text>{selectedQuantity} gm.</Text>
            <Picker
              placeholder={selectedQuantity.toString()}
              style={styles.productQuantity}
              selectedValue={selectedQuantity}
              onValueChange={(itemValue) => setSelectedQuantity(itemValue)}>
              {product.quantity.map((quantity) => (
                <Picker.Item
                  key={quantity}
                  label={`${quantity.toString()} gm`}
                  value={quantity}
                />
              ))}
            </Picker>
          </View>
        </View>
        <TouchableOpacity
          style={styles.productButton}
          onPress={() => setCartItems((prev) => [...prev, product])}>
          <PoppinsText style={styles.productButtonPoppinsText}>
            +Add
          </PoppinsText>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.seperator}></View>
    </>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
  productList: {
    flex: 1,
    width: "100%",
  },
  productItem: {
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  productImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  productInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productDescription: {
    fontSize: 14,
    color: Colors.light.text,
    marginVertical: 5,
    height: 40,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
  },
  qtyBox: {
    flexDirection: "row",
    height: 30,
    marginBottom: -10,
  },
  productQuantity: {
    width: 50,
    color: Colors.primary,
    marginTop: -15,
    marginLeft: -15,
  },
  productButton: {
    color: Colors.primary,
    padding: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: Colors.primary,
    marginTop: -50,
  },
  productButtonPoppinsText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 16,
    elevation: 3,
  },
});

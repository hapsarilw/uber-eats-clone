import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomata and sauce bechamel",
    price: "$13.50",
    image:
      "https://assets.bonappetit.com/photos/5a7353351dcac060cadcc5e4/1:1/w_960,c_limit/lasagna-4.jpg",
  },
  {
    title: "Tandori Chicken",
    description: "Amazing Indian dish with tenderloin chicken off the sizzl",
    price: "$19.20",
    image:
      "https://www.simplyrecipes.com/thmb/xNRMdPJcmR20G5gcwBjndiMxYBk=/736x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__06__tandoori-chicken-horiz-a-1600-a92053df1c764ee1beaa91ae6383dcfd.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://www.simplyrecipes.com/thmb/7ZfquLmjpr0-XGrBiSX77r0evm4=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Chilaquiles-LEAD-1-be30b6674d3b43288bebc87e5eca1bec.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://www.verywellfit.com/thmb/jO_FJohYG5WDcIku937hi58GL_A=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/caesar-salad-with-grilled-chicken-121664016-5bd22cbc46e0fb00519577c3.jpg",
  },
  {
    title: "Gudeg",
    description:
      "Gudeg is made from young unripe jack fruit (Javanese: gori, Indonesian: nangka muda) stewed for several hours with palm sugar, and coconut milk.",
    price: "$32.50",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Nasi_Gudeg.jpg/1600px-Nasi_Gudeg.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    // food -> current food that just selected
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <View style={{ height: "80%" }}>
      <ScrollView
        showsVerticalScrollIndicatora={true}
        contentContainerStyle={{ paddingBottom: 400 }}
      >
        {foods.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor="green"
                isChecked={isFoodInCart(food, cartItems)}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
            </View>
            <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ ...props }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
      }}
    />
  </View>
);

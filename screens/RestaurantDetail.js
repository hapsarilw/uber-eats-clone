import { View } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
import { SafeAreaView } from "react-native";

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

export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeAreaView>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 10 }} />
      <MenuItems restaurantName={route.params.name} foods={foods}/>
      <ViewCart
        // style={{ position: "absolute", zIndex: 999 }}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

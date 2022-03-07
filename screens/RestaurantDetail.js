import { View } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
import Check from "../components/restaurantDetail/Check";
import { SafeAreaView } from "react-native";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeAreaView>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 10 }} />
      <MenuItems />
      <ViewCart
        style={{ position: "absolute", zIndex: 999 }}
        navigation={navigation}
        restaurantName={route.params.name}
      />
    </SafeAreaView>
  );
}

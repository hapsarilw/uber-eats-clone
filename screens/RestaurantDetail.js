import { View } from "react-native";
import React from "react";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
import { SafeAreaView } from "react-native";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <SafeAreaView>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 10 }} />
      <MenuItems restaurantName={route.params.name}/>
      <ViewCart
        // style={{ position: "absolute", zIndex: 999 }}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

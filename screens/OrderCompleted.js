import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function OrderCompleted() {
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  // return it back to string
  const totalUSD = "\u0024" + total;
  //console.log("VIEW CHART ITEMS => " + JSON.stringify(items));
  return (
    <View>
      <Text>
        Your order at {restaurantName} has been placed for {totalUSD}
      </Text>
    </View>
  );
}

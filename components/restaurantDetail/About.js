import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cuisine",
  image_url:
    "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
  price: "$$",
  review_count: "1500",
  rating: 5,
  categories: [
    { title: "Indian" },
    { title: "Comfort Food" },
    { title: "Coffee" },
  ],
};

export default function About(props) {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" · ");

  const description = `${formattedCategories} ${
    price ? " · " + price : ""
  } · 🎫 · ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 10,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 10,
      fontWeight: "600",
      marginTop: 10,
    }}
  >
    {props.description}
  </Text>
);

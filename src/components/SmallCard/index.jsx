import React from "react";
import { View, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { color, windowWidth } from "../../utils";
import styles from "./styles";

export default function SmallCard({ hotel }) {
  const rating = () => {
    if (hotel?.starRating === 1) return [1];
    if (hotel?.starRating === 2) return [1, 2];
    if (hotel?.starRating === 3) return [1, 2, 3];
    if (hotel?.starRating === 4) return [1, 2, 3, 4];
    if (hotel?.starRating === 5) return [1, 2, 3, 4, 5];
  };

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri:
            `${hotel.images}` ||
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fhotel-vector&psig=AOvVaw0MoEqZlHNs7GFnu5PiWI21&ust=1669380778390000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPibppfuxvsCFQAAAAAdAAAAABAD",
        }}
      />
      <View style={styles.card_body}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={styles.text_name}>
          {hotel.hotelName}
        </Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={styles.text_location}
        >
          {hotel.hotelAddress.city + "," + hotel.hotelAddress.countryName}
        </Text>
        <View style={styles.star_icons}>
          {rating().map((index) => (
            <AntDesign
              key={index}
              name="star"
              size={windowWidth * 0.04}
              color={color.orange}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
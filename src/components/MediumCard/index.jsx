import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "./styles";

export default function MediumCard({ navigation, hotel }) {
  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail", { hotel });
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{
            uri:
              `${hotel?.images[0]?.url}` ||
              "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fhotel-vector&psig=AOvVaw0MoEqZlHNs7GFnu5PiWI21&ust=1669380778390000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPibppfuxvsCFQAAAAAdAAAAABAD",
          }}
        />
        <View style={styles.card_body}>
          <Text style={styles.card_title} numberOfLines={2}>
            {hotel?.name}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
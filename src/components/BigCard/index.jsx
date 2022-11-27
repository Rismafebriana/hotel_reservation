import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Gap from "../Gap";
import { AntDesign } from "@expo/vector-icons";
import { color, windowWidth } from "../../utils";
import styles from "./styles";

export default function BigCard({ hotel }) {
  const navigation = useNavigation();

  const rating = () => {
    if (hotel?.starRating === 1) return [1];
    if (hotel?.starRating === 2) return [1, 2];
    if (hotel?.starRating === 3) return [1, 2, 3];
    if (hotel?.starRating === 4) return [1, 2, 3, 4];
    if (hotel?.starRating === 5) return [1, 2, 3, 4, 5];
  };

  const handleNavigateToDetail = () => {
    return navigation.navigate("Detail", { hotel });
  };

  return (
    <Pressable onPress={handleNavigateToDetail}>
      <View style={styles.card}>
        <View>
          <Image
            style={styles.image}
            source={{
              uri:
                `${hotel?.images[0].url}` ||
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-png-vectors%2Fhotel-vector&psig=AOvVaw0MoEqZlHNs7GFnu5PiWI21&ust=1669380778390000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPibppfuxvsCFQAAAAAdAAAAABAD",
            }}
          />
        </View>
        <View style={styles.card_body}>
          <View>
            <Gap height={5} />
            <Text style={styles.card_title}>{hotel?.name}</Text>
            <Gap height={10} />
            <View style={styles.icons}>
              {rating().map((index) => (
                <AntDesign
                  key={index}
                  name="star"
                  size={windowWidth * 0.05}
                  color={color.orange}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
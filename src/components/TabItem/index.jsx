import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function TabItem({ label, onPress, onLongPress }) {
  const Icon = () => {
    if (label === "Home")
      return (
        <FontAwesome5
          name="home"
          size={24}
          color={"#ffffff"}
        />
      );
    if (label === "My Favourite")
      return (
        <FontAwesome
          name="heart"
          size={24}
         color={"#ffffff"}
        />
      );
    if (label === "History Booking")
      return (
        <FontAwesome5
          name="history"
          size={24}
         color={"#ffffff"}
        />
      );
    if (label === "Profile")
      return (
        <FontAwesome5
          name="user-alt"
          size={24}
         color={"#ffffff"}
        />
      );
    return (
      <FontAwesome5
        name="home"
        size={24}
       color={"#ffffff"}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <Icon />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
  },
});
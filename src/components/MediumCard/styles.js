import { StyleSheet } from "react-native";
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  card: {
    width: windowWidth * 0.4,
    marginVertical: 15,
  },
  image: {
    width: "100%",
    height: windowHeight * 0.22,
    borderRadius: 15,
  },
  card_body: {
    paddingVertical: 5,
  },
  card_title: {
    color: color.black,
    fontSize: windowWidth * 0.04,
    fontFamily: "Outfit-Regular",
    textAlign: "center",
  },
});

export default styles;
import { StyleSheet } from "react-native";
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  image: {
    backgroundColor: color.lightGray,
    width: windowWidth,
    height: windowHeight * 0.35,
  },
  title: {
    color: color.black,
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
  },
  subtitle: {
    color: color.black,
    fontSize: windowWidth * 0.045,
    borderTopColor: color.black,
    borderWidth: 2,
    paddingTop: 8,
    fontFamily: "Outfit-Regular",
  },
  description: {
    color: color.black,
    fontSize: windowWidth * 0.035,
    fontFamily: "Outfit-Regular",
  },
  icon_star_wrapper: {
    flexDirection: "row",
  },
  icon_facility_wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  text_price: {
    paddingVertical: 5,
    borderRadius: 10,
    color: color.black,
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
  },
  btn_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  btn_booking: (pressed) => ({
    width: "50%",
    borderColor: pressed ? color.black : color.black,
    borderWidth: 2,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 10,
  }),
  text_booking: (pressed) => ({
    color: pressed ? color.whitePrimary : color.black,
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
  }),
  text_facility: {
    color: color.black,
    fontFamily: "Outfit-Regular",
  },
});

export default styles;
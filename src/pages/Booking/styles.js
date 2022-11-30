import { StyleSheet } from "react-native";
import { color, windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.05,
    marginTop: windowHeight * 0.02,
  },
  label: {
    color: color.black,
    fontSize: windowWidth * 0.04,
    fontFamily: "Outfit-Black",
  },
  wrapper_input_date: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    borderBottomColor: color.blackPrimary,
    borderWidth: 1,
  },
  input_date: {
    flex: 1,
    padding: 10,
    color: color.black,
    fontFamily: "Outfit-Regular",
  },
  wrapper_total_guest: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: color.blackPrimary,
    borderWidth: 1,
  },
  input_guest: {
    padding: 10,
    color: color.black,
    fontFamily: "Outfit-Regular",
  },
  wrapper_rooms_rent: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: color.blackPrimary,
    borderWidth: 1,
  },
  wrapper_contact_info: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: color.blackPrimary,
    borderWidth: 1,
  },
  input_contact: {
    padding: 10,
    color: color.black,
    fontFamily: "Outfit-Regular",
  },
  btn_next: (pressed) => ({
    borderColor: pressed ? color.whitePrimary : color.black,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  }),
  label_btn_next: (pressed) => ({
    color: pressed ? color.whitePrimary : color.black,
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
  }),
});

export default styles;
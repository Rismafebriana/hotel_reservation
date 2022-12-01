import { StyleSheet } from "react-native";
import { color, windowHeight, windowWidth } from "../../utils";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: windowWidth * 0.05,
    paddingTop: windowHeight * 0.02,
  },
  title_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: color.black,
    paddingBottom: windowHeight * 0.01,
  },
  card_title: {
    color: color.black,
    fontSize: windowWidth * 0.049,
    fontFamily: "Outfit-Bold",
    
  },
  account_data: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: windowHeight * 0.02,
  },
  logout: (pressed) => ({
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    borderColor: pressed ? color.blackPrimary : color.black,
    borderRadius: 10,
  }),
  text_logout: (pressed) => ({
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    alignItems: "center",
    color: pressed ? color.black : color.black,
  }),
  login: (pressed) => ({
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    borderColor: pressed ? color.black : color.black,
    borderRadius: 10,
  }),
  text_login: (pressed) => ({
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    alignItems: "center",
    color: pressed ? color.black : color.black,
  }),
  register: (pressed) => ({
    flex: 1,
    paddingVertical: windowHeight * 0.02,
    borderWidth: 2,
    borderColor: pressed ? color.black : color.black,
    borderRadius: 10,
  }),
  text_register: (pressed) => ({
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
    alignItems: "center",
    color: pressed ? color.black : color.black,
  }),

  // edit page
  label: {
    color: color.black,
    fontSize: windowWidth * 0.04,
    fontFamily: "Outfit-Bold",
  },
  input: {
    borderBottomColor: color.black,
    borderWidth: 1,
    padding: 10,
    color: color.black,
    fontFamily: "Outfit-Regular",
  },
  btn_gender_male: (gender) => ({
    borderColor: gender === "Male" ? color.black : color.black,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  }),
  btn_gender_female: (gender) => ({
    borderColor: gender === "Female" ? color.black : color.black,
    borderWidth: 2,
    borderRadius: 5,
    padding: 5,
  }),
  btn_save: (pressed) => ({
    borderWidth: 2,
    borderColor: pressed ? color.black : color.black,
    borderRadius: 10,
  }),
  label_save: (pressed) => ({
    color: pressed ? color.black : color.black,
    padding: 10,
    fontSize: windowWidth * 0.05,
    fontFamily: "Outfit-Bold",
    textAlign: "center",
  }),
});

export default styles;
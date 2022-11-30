import { StyleSheet } from "react-native";
import { color, windowWidth, windowHeight } from "../../utils";

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    flex: 1,
    position: "relative",
  },
  card: {
    borderRadius: 10,
    flex: 0.8,
    padding: 20,
    justifyContent: "center",
  },
  card_title: {
    color: color.black,
    fontSize: windowWidth * 0.08,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input_email: {
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: color.black,
    color: color.black,
  },
  input_password: {
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: color.black,
    color: color.black,
  },
  btn_login: (pressed) => ({
    backgroundColor: pressed ? color.whitePrimary : null,
    borderRadius: 50,
    borderColor: color.whitePrimary,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }),
  text_btn_login: {
    color: color.black,
    fontSize: windowWidth * 0.045,
    fontWeight: "bold",
  },
});

export default styles;
import React from "react";
import { View, Text, Pressable, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

// redux
import { useDispatch, useSelector } from "react-redux";
import { setUserIsLoggedIn } from "../../redux/userSlice";
import Gap from "../../components/Gap";
import { AntDesign } from "@expo/vector-icons";
import { color, windowWidth, windowHeight } from "../../utils";
import styles from "./styles";

export default function Login() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const navigation = useNavigation();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const showAlert = () => Alert.alert("Wrong email or password!");

  function handleLogin() {
    if (userData.email === email && userData.password === password) {
      dispatch(setUserIsLoggedIn(true));
      return navigation.goBack();
    } else {
      showAlert();
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.card_title}>Login</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.input_email}
          placeholder="Your Email"
          placeholderTextColor={color.whiteSecondary}
        />
        <Gap height={10} />
        <TextInput
          type="password"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.input_password}
          placeholder="Password"
          placeholderTextColor={color.whiteSecondary}
          secureTextEntry={true}
        />
        <Gap height={10} />
        <Pressable
          style={({ pressed }) => styles.btn_login(pressed)}
          onPress={handleLogin}
        >
          <AntDesign
            name="login"
            size={windowWidth * 0.06}
            color={color.black}
          />
          <Gap width={10} />
          <Text style={styles.text_btn_login}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}
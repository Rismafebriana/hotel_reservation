import React from "react";
import { ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import BigCard from "../../components/BigCard";
import styles from "./styles";

export default function Favourite({ navigation }) {
  const userData = useSelector(
    (state) => state.user.userData
  );
  const userDataFavourite = useSelector(
    (state) => state.user.userData.favourite
  );

  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userData.loggedIn ? (
          userDataFavourite.map((hotel, index) => (
            <BigCard key={index} navigation={navigation} hotel={hotel.hotel} />
          ))
        ) : (
          <Text style={styles.text_not_login}>You must login first!</Text>
        )}
      </ScrollView>
    </Layout>
  );
}
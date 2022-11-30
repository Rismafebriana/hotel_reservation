import React, { useEffect } from "react";
import { ActivityIndicator, View, ScrollView, Text } from "react-native";
import { useSelector } from "react-redux";
import SearchForm from "../../components/SearchForm";
import BigCard from "../../components/BigCard";
import Gap from "../../components/Gap";
import { color } from '../../utils'
import styles from "./styles";

export default function Search({ navigation }) {
  const searchResult = useSelector((state) => state.hotel.searchResult);
  const isFetchLoading = useSelector((state) => state.hotel.loading);

  return (
    <View style={styles.container}>
      <Gap height={40} />
      <SearchForm />
      <Gap height={10} />
      {isFetchLoading ? (
        <ActivityIndicator size="large" color={color.blue} />
      ) : (
        searchResult.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {searchResult?.map((searchResult, index) => (
              <BigCard key={index} navigation={navigation} hotel={searchResult} />
            ))}
          </ScrollView>
        ) : (
          <Text style={styles.text_notfound}>
            Hotel is not found! try other keyword
          </Text>
        )
      )}
    </View>
  );
}
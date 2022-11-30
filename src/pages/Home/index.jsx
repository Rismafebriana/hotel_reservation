import React, { Fragment } from "react";
import { Text, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import Layout from "../../components/Layout";
import SearchForm from "../../components/SearchForm";
import MediumCard from "../../components/MediumCard";
import Gap from "../../components/Gap";
import styles from "./styles";

export default function Home({ navigation }) {
  const getDataHotel = useSelector((state) => state.hotel?.data);

  return (
    <Layout flex={1}>
      <Gap height={40} />
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>
          Find Your Favourite Place And Visit With Us
        </Text>
      <SearchForm navigation={navigation} />
      <Gap height={20} />
        <Text style={styles.subheading}>Top Destination</Text>
        <ScrollView horizontal={true}>
          {getDataHotel?.slice(1, 5).map((hotel) => (
            <Fragment key={hotel.hotelId}>
              <MediumCard navigation={navigation} hotel={hotel} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
        <Text style={styles.subheading}>Popular Destination</Text>
        <ScrollView horizontal={true}>
          {getDataHotel?.slice(5, 10).map((hotel) => (
            <Fragment key={hotel.hotelId}>
              <MediumCard navigation={navigation} hotel={hotel} />
              <Gap width={10} />
            </Fragment>
          ))}
        </ScrollView>
      </ScrollView>
    </Layout>
  );
}
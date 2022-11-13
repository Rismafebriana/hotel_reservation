import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const App = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginTop: 60,
          borderWidth: 1,
          borderColor: "#bdbd",
          paddingVertical: 5,
          paddingHorizontal: 5,
          borderRadius: 9,
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: activeMenu == "Home" ? "#2796A3" : "#fff",
            elevation: activeMenu == "Home" ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu("Home")}
        >
          <Text style={{ color: activeMenu == "Home" ? "#FFF" : "#BDBD" }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: activeMenu == "Foto" ? "#2796A3" : "#fff",
            elevation: activeMenu == "Foto" ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu("Foto")}
        >
          <Text style={{ color: activeMenu == "Foto" ? "#FFF" : "#BDBD" }}>
            Foto
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: activeMenu == "Profile" ? "#2796A3" : "#fff",
            elevation: activeMenu == "Profile" ? 2 : 0,
            paddingVertical: 12,
            borderRadius: 9,
          }}
          onPress={() => setActiveMenu("Profile")}
        >
          <Text style={{ color: activeMenu == "Profile" ? "#FFF" : "#BDBD" }}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Relatorios from "../pages/Relatorios";
import Lembretes from "../pages/Lembretes";
import Historico from "../pages/Historico";

import StackRoutes from "../routes/stackRoutes";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        //headerShown:false,
        tabBarActiveTintColor: "#FC9F8F",
        tabBarInactiveTintColor: "#fff",

        tabBarStyle: {
          //   position: 'absolute',
          backgroundColor: "#284893",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="home-outline"
                color={color}
                size={size}
              />
            );
          },
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="Historico"
        component={Historico}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="history"
                color={color}
                size={size}
              />
            );
          },
          tabBarLabel: "",
        }}
      />
      <Tab.Screen
        name="Relatorios"
        component={Relatorios}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="chart-areaspline"
                color={color}
                size={size}
              />
            );
          },
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="Lembretes"
        component={Lembretes}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="bookmark"
                color={color}
                size={size}
              />
            );
          },
          tabBarLabel: "",
        }}
      />

      <Tab.Screen
        name="StackRoutes"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={styles.tabBarButton}>
              <MaterialCommunityIcons name="plus" color="#284893" size={50} />
            </View>
          ),
          tabBarLabel: "",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FA644C",
    marginTop: -40,
    marginBottom: 10,
    marginRight: 20,
    borderColor: "#fff",
    borderWidth: 5,
    width: 68,
    borderRadius: 50,
  },
});

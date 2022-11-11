import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MonthDaysList } from "../MonthDaysList/MonthDaysList";

export function DateController() {
  return (
    <View style={styles.dateController}>
      <MonthDaysList />
    </View>
  );
}

const styles = StyleSheet.create({
  dateController: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  monthName: {
    marginRight: 10,
    fontWeight: "bold",
  },
});

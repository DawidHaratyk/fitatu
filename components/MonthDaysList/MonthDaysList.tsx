import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getAllDaysInMonth } from "../../utils/getAllDaysInMonth";
import { divideToChunks } from "../../utils/divideToChunks";
import { windowHeight, windowWidth } from "../../constants";
import { PagingWeekTab } from "../PagingWeekTab/PagingWeekTab";

export const MonthDaysList = ({}) => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();

  const daysList = getAllDaysInMonth(month, year);

  const arrayOfWeeks = divideToChunks(daysList, 7);

  const weekPagingItems = arrayOfWeeks.map((weekArr, key) => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      contentContainerStyle={styles.pagingWeekContainer}
      key={key}
    >
      <PagingWeekTab weekArr={weekArr} />
    </ScrollView>
  ));

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      style={styles.daysContainer}
    >
      {weekPagingItems}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: "row",
  },
  day: {
    width: windowWidth / 7,
  },
  activeDay: {
    height: windowHeight * 0.06,
    width: windowHeight * 0.06,
    borderRadius: Math.round((windowHeight + windowWidth) / 2),
    backgroundColor: "rgba(242, 241, 237, 0.6)",
  },
  monthDayName: {
    fontWeight: "900",
  },
  pagingWeekContainer: {
    width: windowWidth,
    justifyContent: "space-around",
  },
  dateNumber: {
    fontWeight: "400",
  },
});

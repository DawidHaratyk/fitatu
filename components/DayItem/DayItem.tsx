import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { windowHeight, windowWidth } from "../../constants";

interface DayItemProps {
  day: Date;
}

const DayItem = ({ day }: DayItemProps) => {
  const [isDayPressed, setIsDayPressed] = useState(false);

  const date = new Date();
  const isToday = date.getDate() === day.getDate();

  const handleDatePress = () => setIsDayPressed(true);

  return (
    <Pressable
      style={[
        styles.day,
        isToday && styles.activeDay,
        isDayPressed && styles.pressedDay,
      ]}
      onPress={handleDatePress}
    >
      <Text style={[styles.monthDayName, isDayPressed && styles.activeDayText]}>
        {day.toLocaleString("default", { weekday: "narrow" })}
      </Text>
      <Text style={[styles.dateNumber, isDayPressed && styles.activeDayText]}>
        {day.getDate()}
      </Text>
    </Pressable>
  );
};

export default DayItem;

const styles = StyleSheet.create({
  day: {
    height: windowHeight * 0.06,
    width: windowHeight * 0.06,
    borderRadius: Math.round((windowHeight + windowWidth) / 2),
    paddingHorizontal: 10,
    alignItems: "center",
  },
  activeDay: {
    backgroundColor: "rgba(242, 241, 237, 0.6)",
  },
  activeDayText: {
    color: "white",
  },
  pressedDay: {
    height: windowHeight * 0.06,
    width: windowHeight * 0.06,
    borderRadius: Math.round((windowHeight + windowWidth) / 2),
    backgroundColor: "rgba(0, 0, 0, 0.9)",
  },
  monthDayName: {
    fontWeight: "900",
  },
  dateNumber: {
    fontWeight: "400",
  },
});

import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { windowHeight, windowWidth } from "../../constants";
import DayItem from "../DayItem/DayItem";

interface WeekArrayProps {
  weekArr: Date[];
}

export const PagingWeekTab = ({ weekArr }: WeekArrayProps) => {
  const weekTab = weekArr.map((day, key) => {
    return <DayItem day={day} key={key} />;
  });

  return <>{weekTab}</>;
};

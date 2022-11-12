import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CaloriesItemProps } from '../../types'

export const CaloriesItemBox = ({
  color,
  category,
  value,
}: CaloriesItemProps) => {
  const additionalStyles = { backgroundColor: color }

  return (
    <View>
      <View style={[styles.caloriesRange, additionalStyles]}></View>
      <Text>
        {category} <Text>{value}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  caloriesRange: {
    height: 6,
    borderRadius: 10,
    marginBottom: 5,
  },
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProductProps } from '../../types'

export const SelectedProduct = ({
  name,
  amount,
  calories,
  protein,
  fat,
  carbohydrates,
}: ProductProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{calories}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

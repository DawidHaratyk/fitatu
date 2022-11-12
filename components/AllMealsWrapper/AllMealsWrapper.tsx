import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MealWrapper } from '../MealWrapper/MealWrapper'
import { windowHeight } from '../../constants'

const mealsData = [
  {
    title: 'Śniadanie',
    calories: 0,
    products: [
      {
        name: 'Pomidor',
        amount: 2,
        calories: 120,
        protein: 1.3,
        fat: 14,
        carbohydrates: 120,
      },
      {
        name: 'Pomidor',
        amount: 2,
        calories: 120,
        protein: 1.3,
        fat: 14,
        carbohydrates: 120,
      },
    ],
  },
  {
    title: 'Obiad',
    calories: 0,
  },
  {
    title: 'Kolacja',
    calories: 0,
  },
]

export const AllMealsWrapper = () => {
  const mealsWrappersList = mealsData.map((meal) => <MealWrapper {...meal} />)

  return <View style={styles.allMealsWrapper}>{mealsWrappersList}</View>
}

const styles = StyleSheet.create({
  allMealsWrapper: {
    marginVertical: 25,
    marginHorizontal: 15,
  },
})

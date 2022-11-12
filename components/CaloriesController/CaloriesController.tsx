import { StyleSheet, View } from 'react-native'
import React from 'react'
import { windowWidth } from '../../constants'
import { CaloriesItemBox } from '../CaloriesItemBox/CaloriesItemBox'

const caloriesItemsList = [
  {
    color: '#d4aee8',
    category: 'Kcal',
    value: 221,
  },
  {
    color: '#59a2f0',
    category: 'Białka',
    value: 221,
  },
  {
    color: '#edd879',
    category: 'Tł.',
    value: 221,
  },
  {
    color: '#cfbaf0',
    category: 'Węgl.',
    value: 221,
  },
]

export const CaloriesController = () => {
  const caloriesItems = caloriesItemsList.map((caloriesItem) => (
    <CaloriesItemBox {...caloriesItem} />
  ))

  return <View style={styles.caloriesController}>{caloriesItems}</View>
}

const styles = StyleSheet.create({
  caloriesController: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: windowWidth,
    height: 50,
    minHeight: 60,
    padding: 10,
    backgroundColor: '#e8e8e8',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
})

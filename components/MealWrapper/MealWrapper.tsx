import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { windowWidth } from '../../constants'
import { Ionicons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { ProductProps } from '../../types'
import { SelectedProduct } from '../SelectedProduct/SelectedProduct'

interface MealProps {
  title: string
  calories: number
  products?: ProductProps[]
}

export const MealWrapper = ({ title, calories, products }: MealProps) => {
  const [areProductsVisible, setAreProductsVisible] = useState(false)

  const currentArrowIcon = areProductsVisible ? (
    <AntDesign name="up" size={24} color="black" />
  ) : (
    <AntDesign name="down" size={24} color="black" />
  )

  const handleToggleProductsVisibility = () =>
    setAreProductsVisible((prevState) => !prevState)

  return (
    <>
      <View style={styles.mealWrapper}>
        <View style={styles.leftSideContainer}>
          <View style={styles.mealNameContainer}>
            <Text style={styles.mealTitle}>{title}</Text>
            <Text style={styles.mealCalories}>{calories} kcal</Text>
          </View>

          <Pressable onPress={handleToggleProductsVisibility}>
            {currentArrowIcon}
          </Pressable>
        </View>
        <View style={styles.addProductButton}>
          <Ionicons name="add" size={32} color="white" />
        </View>
      </View>
      <View style={{ display: areProductsVisible ? 'flex' : 'none' }}>
        {products?.map((product) => (
          <SelectedProduct {...product} />
        ))}
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  mealWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: windowWidth - 30,
    marginBottom: 25,
  },
  addProductButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#bae0af',
  },
  addProductIcon: {
    color: 'white',
    fontSize: 40,
  },
  mealTitle: {
    fontWeight: '700',
    fontSize: 20,
  },
  mealCalories: {
    color: 'gray',
  },
  leftSideContainer: {
    flexDirection: 'row',
  },
  mealNameContainer: {
    marginRight: 10,
  },
})

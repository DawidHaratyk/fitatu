import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MonthDaysList } from '../MonthDaysList/MonthDaysList'

const getAllDaysInMonth = (month: number, year: number) =>
  Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, i) => new Date(year, month - 1, i + 1)
  )

export function DateController() {
  const date = new Date()

  const month = date.toLocaleString('default', { month: 'long' })

  const days = getAllDaysInMonth(date.getMonth(), date.getFullYear())

  //   console.log(
  //     'dzień tygodnia: ',
  //     days[1].toLocaleString('default', { weekday: 'narrow' })
  //   )
  //   console.log('dzień miesiąca jako liczba: ', days[1].getDate())

  return (
    <View style={styles.dateController}>
      <Text style={styles.monthName}>{month}</Text>
      <MonthDaysList />
    </View>
  )
}

const styles = StyleSheet.create({
  dateController: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  monthName: {
    marginRight: 10,
    fontWeight: 'bold',
  },
})

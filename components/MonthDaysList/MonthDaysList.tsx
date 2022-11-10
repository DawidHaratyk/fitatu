import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAllDaysInMonth } from '../../utils/getAllDaysInMonth'
import { divideToChunks } from '../../utils/divideToChunks'

export const MonthDaysList = ({}) => {
  const date = new Date()
  const month = date.getMonth()
  const year = date.getFullYear()

  const daysList = getAllDaysInMonth(month, year)

  const arrayOfWeeks = divideToChunks(daysList, 7)

  const weekPagingItems = arrayOfWeeks.map((weekArr) => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      style={styles.pagingWeekContainer}
    >
      {weekArr.map((day) => {
        const isToday = date.getDate() === day.getDate()
        return (
          <View style={[styles.day, isToday && styles.activeDay]}>
            <Text style={styles.monthDayName}>
              {day.toLocaleString('default', { weekday: 'narrow' })}
            </Text>
            <Text>{day.getDate()}</Text>
          </View>
        )
      })}
    </ScrollView>
  ))

  //   <ScrollView style={[styles.day, isToday && styles.activeDay]} key={key}>
  //     <Text style={styles.monthDayName}>
  //       {day.toLocaleString('default', { weekday: 'narrow' })}
  //     </Text>
  //     <Text>{day.getDate()}</Text>
  //   </ScrollView>

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      pagingEnabled
      style={styles.daysContainer}
    >
      {weekPagingItems}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  daysContainer: {
    flexDirection: 'row',
  },
  day: {
    width: 40,
    paddingHorizontal: 10,
  },
  activeDay: {
    backgroundColor: 'black',
  },
  monthDayName: {
    fontWeight: 'bold',
  },
  pagingWeekContainer: {
    flexDirection: 'column',
    flex: 1,
  },
})

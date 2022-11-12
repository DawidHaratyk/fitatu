import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DateController } from '../DateController/DateController'

export function Header() {
  const date = new Date()
  const month = date.toLocaleString('default', { month: 'long' })

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>fitatu</Text>
      <View style={styles.dateControllerContainer}>
        <Text style={styles.monthText}>Miesiąc: {month}</Text>
        <DateController />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 35,
    paddingBottom: 6,
    backgroundColor: '#bae0af',
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    marginBottom: 6,
  },
  monthText: {
    fontWeight: '600',
    marginBottom: 5,
    fontSize: 12,
  },
  dateControllerContainer: {
    alignItems: 'center',
  },
})

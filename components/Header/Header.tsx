import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DateController } from '../DateController/DateController'

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>fitatu</Text>
      <DateController />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    width: '100%',
    paddingTop: 40,
    paddingLeft: 25,
    paddingRight: 15,
    paddingBottom: 15,
    backgroundColor: '#bae0af',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    marginBottom: 10,
  },
})

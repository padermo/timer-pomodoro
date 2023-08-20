import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const ButtonParent = ({isWork, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{isWork ? 'Stop':'Start'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: '#323437',
    paddingVertical: 14,
    elevation: 10
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 25,
    letterSpacing: 5,
    fontWeight: 'bold'
  }
})

export default ButtonParent
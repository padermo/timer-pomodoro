import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';

const Timer = ({time}) => {
  const formatTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'transparent']}
        style={[styles.edgeShadow, { top: 0, left: 0, right: 0, height: 10, borderRadius: 15 }]}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Sombra inferior */}
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'transparent']}
        style={[styles.edgeShadow, { bottom: 0, left: 0, right: 0, height: 10, borderRadius: 15 }]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0 }}
      />

      {/* Sombra izquierda */}
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'transparent']}
        style={[styles.edgeShadow, { top: 0, bottom: 0, left: 0, width: 10, borderRadius: 15 }]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />

      {/* Sombra derecha */}
      <LinearGradient
        colors={['rgba(0,0,0,0.1)', 'transparent']}
        style={[styles.edgeShadow, { top: 0, bottom: 0, right: 0, width: 10, borderRadius: 15 }]}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 1 }}
      />
        <Text style={styles.text}>{formatTime}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: '#e8e8e8',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  text: {
    fontSize: 80,
    color: '#323437',
    fontWeight: 'bold'
  },
  edgeShadow: {
    position: 'absolute',
    zIndex: 1,
  }
})

export default Timer
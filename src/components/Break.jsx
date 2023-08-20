import { View } from 'react-native'
import React, {useState, useEffect, useCallback} from 'react'
import SafeViewParent from '../parentComponents/SafeViewParent'
import Timer from './Timer'
import ButtonParent from '../parentComponents/ButtonParent'
import { Audio } from 'expo-av'
import { useFocusEffect } from '@react-navigation/native'

const Break = () => {
  const [isWork, setIsWork] = useState(false)
  const [time, setTime] = useState(5 * 60)

  const playSound = async () => {
    const {sound} = await Audio.Sound.createAsync(
      require('../../assets/sounds/button_press.mp3')
    )
    await sound.playAsync()
  }

  const alarmSound = async () => {
    const {sound} = await Audio.Sound.createAsync(
      require('../../assets/sounds/alarm_clock.mp3')
    )
    await sound.playAsync()
  }

  const handleStart = () => {
    playSound()
    setIsWork(!isWork)
  }

  useFocusEffect(
    useCallback(()=>{
      let interval;

      if(isWork){
        interval = setInterval(()=>{
          setTime(time - 1)
        }, 1000)
      }else{
        clearInterval(interval)
      }
  
      return () => {
        clearInterval(interval)
      }
    },[isWork, time])
  )

  useFocusEffect(
    useCallback(()=>{
      if(time === 0) {
        alarmSound()
        setIsWork(false)
        setTime(5 * 60)
      }
    }, [time])
  )

  return (
    <SafeViewParent screen='break'>
      <View style={{flex:1, padding: 14, gap: 10}}>
        <Timer time={time}/>
        <ButtonParent isWork={isWork} onPress={handleStart}/>
      </View>
    </SafeViewParent>
  )
}

export default Break
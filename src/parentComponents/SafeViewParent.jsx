import { SafeAreaView } from 'react-native'
import { colors } from '../utils/colors'

const SafeViewParent = (props) => {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: props.screen === 'break' ? colors.green : colors.pink}}>
      {props.children}
    </SafeAreaView>
  )
}

export default SafeViewParent
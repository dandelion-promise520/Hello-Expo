import { Image } from 'expo-image'
import { useState } from 'react'
import { Alert, Button, Dimensions, Switch, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const LookCommonComponents = () => {
  const [isEnabled, setIsEnabled] = useState(false)

  const onPressOne = () => {
    Alert.alert('提示信息', '你想干嘛', [{ text: '确定', onPress: () => console.log('确认了') }])
  }

  const onPressTwo = () => {
    Alert.alert('提示信息', '你有三选项', [
      { text: '取消', onPress: () => console.log('取消了') },
      {
        text: '确定',
        onPress: () => {
          console.log('确认了')
        }
      },
      {
        text: 'ok',
        onPress: () => {
          console.log('ok了')
        }
      }
    ])
  }

  const { width, height } = Dimensions.get('window')

  return (
    <SafeAreaView style={{ flex: 1, gap: 10, justifyContent: 'center', alignItems: 'center' }}>
      <Switch value={isEnabled} onValueChange={setIsEnabled} />
      <Button title="点我弹出警告框" onPress={onPressOne} />
      <Button title="点我弹出有选项的警告框" onPress={onPressTwo} />
      <Text>
        当前屏幕宽度为{width},高度为{height}
      </Text>
      <Image
        source={'https://lsky.ljflovezxm.cn/i/2025/09/03/68b7dbedc939a.jpg'}
        style={{ width: 200, height: 200 }}
      ></Image>
    </SafeAreaView>
  )
}

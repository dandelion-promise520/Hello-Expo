import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Course = () => {
  return (
    <SafeAreaView style={{ flex: 1, gap: 8, justifyContent: 'center', alignItems: 'center' }}>
      <Text>这里是设置页</Text>
    </SafeAreaView>
  )
}

export default Course

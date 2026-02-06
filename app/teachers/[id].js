import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Teacher = () => {
  return (
    <SafeAreaView style={{ flex: 1, gap: 8, justifyContent: 'center', alignItems: 'center' }}>
      <Text>这里是教师页</Text>
    </SafeAreaView>
  )
}

export default Teacher

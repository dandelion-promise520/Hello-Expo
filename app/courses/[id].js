import { useLocalSearchParams } from 'expo-router'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Course = () => {
  const { id } = useLocalSearchParams()

  return (
    <SafeAreaView style={{ flex: 1, gap: 8, justifyContent: 'center', alignItems: 'center' }}>
      <Text>这里是课程页</Text>
      <Text>课程id:{id}</Text>
    </SafeAreaView>
  )
}

export default Course

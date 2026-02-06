import { useRouter } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Index = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, gap: 8, justifyContent: 'center', alignItems: 'center' }}>
      <Text>蒲公英的约定</Text>

      <TouchableOpacity
        onPress={() => {
          router.navigate('/details')
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          点击跳转到详情页(navigate)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.replace('/details')
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          点击跳转到详情页(replace)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.navigate('/teachers/1')
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          点击跳转到教师页
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Index

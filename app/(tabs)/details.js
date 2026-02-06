import { useRouter } from 'expo-router'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const details = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={{ flex: 1, gap: 8, justifyContent: 'center', alignItems: 'center' }}>
      <Text>这里是详情页</Text>

      <TouchableOpacity
        onPress={() => {
          router.navigate('details')
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          再次跳转(navigate)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.push('details')
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          再次跳转(push)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.navigate({ pathname: 'courses/[id]', params: { id: 1, title: '课程1' } })
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          跳转到课程页1
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.navigate('courses/2')
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          跳转到课程页2
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          router.back()
        }}
      >
        <Text style={{ backgroundColor: '#1890ff', color: '#fff', borderRadius: 8, padding: 8 }}>
          返回
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default details

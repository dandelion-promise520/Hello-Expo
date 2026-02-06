import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import { TouchableOpacity, View } from 'react-native'

export default function Layout() {
  const CloseModal = () => {
    const router = useRouter()

    return (
      <View style={{ width: 30 }}>
        <TouchableOpacity
          onPress={() => {
            router.dismiss()
          }}
        >
          <MaterialCommunityIcons size={30} color="#1890ff" name="close" />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Stack
      screenOptions={{
        title: '',
        headerBackButtonDisplayMode: 'minimal',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        animation: 'slide_from_right'
      }}
    >
      {/* Tabs */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* Cards */}
      <Stack.Screen
        name="courses/[id]"
        options={({ route }) => {
          return { title: route.params?.title || '课程页' }
        }}
      />
      <Stack.Screen name="articles/index" options={{ title: '通知页' }} />
      <Stack.Screen name="search/index" options={{ title: '搜索页' }} />
      <Stack.Screen name="settings/index" options={{ title: '设置页' }} />

      {/* Modal */}
      <Stack.Screen
        name="teachers/[id]"
        options={{
          presentation: 'modal',
          title: '教师页',
          headerLeft: () => <CloseModal />,
          animation: 'slide_from_bottom'
        }}
      />
    </Stack>
  )
}

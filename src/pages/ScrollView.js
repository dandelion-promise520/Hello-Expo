import { useState } from 'react'
import { RefreshControl, ScrollView, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const CusScrollView = () => {
  const [refreshing, setRefreshing] = useState(false)

  const onReFresh = () => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={onReFresh} refreshing={refreshing}></RefreshControl>
        }
      >
        <Text style={{ fontSize: 60 }}>
          你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好 你好你好你好你好你好你好
          你好你好你好你好你好你好 你好你好你好你好你好你好
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'center'
  }
})

import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const NetWorkError = ({ title, onReload }) => {
  return (
    <View style={styles.container}>
      <SimpleLineIcons Icons name="drawer" size={160} color="#ddd" />
      <Text style={{ color: '#ddd' }}>{title ? title : '抱歉，您的网络出现错误!'}</Text>
      <TouchableOpacity onPress={onReload} style={styles.reloadButton}>
        <Text style={styles.reloadText}>重新加载</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  reloadButton: {
    backgroundColor: '#1890ff',
    padding: 8,
    borderRadius: 8
  },
  reloadText: {
    color: '#fff'
  }
})

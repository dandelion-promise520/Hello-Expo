import { ActivityIndicator, StyleSheet } from 'react-native'

export const Loading = () => {
  return <ActivityIndicator size={'small'} color="#1f99b0" style={styles.loading} />
}

const styles = StyleSheet.create({
  loading: {
    backgroundColor: '#fff',
    position: 'absolute',
    inset: 0,
    zIndex: 1
  }
})

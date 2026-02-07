import { createContext, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const theme = {
  light: {
    backgroundColor: '#fff',
    color: '#000'
  },
  dark: {
    backgroundColor: '#000',
    color: '#fff'
  }
}

const ThemeContext = createContext()

export const Context = () => {
  return (
    <ThemeContext.Provider value={theme.light}>
      <B />
    </ThemeContext.Provider>
  )
}

const B = () => {
  return <C />
}

const C = () => {
  const theme = useContext(ThemeContext)

  return (
    <View style={[styles.container, { backgroundColor: theme.backgroundColor }]}>
      <Text style={{ color: theme.color }}>蒲公英的约定</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

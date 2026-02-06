import { SimpleLineIcons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { Link, Tabs } from 'expo-router'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Logo from '../../assets/avater-nobg.png'

const TabLayout = () => {
  const LogoTitle = () => {
    return <Image style={{ height: 50, width: 50 }} contentFit="cover" source={Logo} />
  }

  const HeaderIcon = ({ href, iconName, ...rest }) => {
    return (
      <Link asChild href={href} {...rest}>
        <TouchableOpacity style={styles.px}>
          <SimpleLineIcons size={20} color="#1890ff" name={iconName}></SimpleLineIcons>
        </TouchableOpacity>
      </Link>
    )
  }

  return (
    <Tabs
      screenOptions={{
        headerTitleAlign: 'center',
        animation: 'shift',
        tabBarActiveTintColor: '#1890ff'
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '首页',
          tabBarIcon: ({ color }) => <SimpleLineIcons color={color} name="bell"></SimpleLineIcons>,
          headerTitle: () => <LogoTitle />,
          headerLeft: () => <HeaderIcon href="articles" iconName="bell" />,
          headerRight: () => (
            <View style={{ flexDirection: 'row' }}>
              <HeaderIcon href="search" iconName="magnifier" />
              <HeaderIcon href="settings" iconName="options" />
            </View>
          )
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="details"
        options={{
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons color={color} name="magnifier"></SimpleLineIcons>
          ),
          title: '详情页',
          headerShown: false
        }}
      ></Tabs.Screen>
    </Tabs>
  )
}

export default TabLayout

const styles = StyleSheet.create({
  px: {
    paddingHorizontal: 8
  }
})

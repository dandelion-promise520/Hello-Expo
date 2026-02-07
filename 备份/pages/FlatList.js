import { useState } from 'react'
import { FlatList, RefreshControl, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const CusFlatList = () => {
  const [data, setData] = useState([
    { id: 1, title: '测试数据1' },
    { id: 2, title: '测试数据2' },
    { id: 3, title: '测试数据3' },
    { id: 4, title: '测试数据4' },
    { id: 5, title: '测试数据5' },
    { id: 6, title: '测试数据6' },
    { id: 7, title: '测试数据7' },
    { id: 8, title: '测试数据8' },
    { id: 9, title: '测试数据9' },
    { id: 10, title: '测试数据10' },
    { id: 11, title: '测试数据11' },
    { id: 12, title: '测试数据12' },
    { id: 13, title: '测试数据13' },
    { id: 14, title: '测试数据14' },
    { id: 15, title: '测试数据15' },
    { id: 16, title: '测试数据16' },
    { id: 17, title: '测试数据17' },
    { id: 18, title: '测试数据18' },
    { id: 19, title: '测试数据19' },
    { id: 20, title: '测试数据20' },
    { id: 21, title: '测试数据21' },
    { id: 22, title: '测试数据22' },
    { id: 23, title: '测试数据23' },
    { id: 24, title: '测试数据24' },
    { id: 25, title: '测试数据25' },
    { id: 26, title: '测试数据26' },
    { id: 27, title: '测试数据27' },
    { id: 28, title: '测试数据28' },
    { id: 29, title: '测试数据29' },
    { id: 30, title: '测试数据30' },
    { id: 31, title: '测试数据31' },
    { id: 32, title: '测试数据32' },
    { id: 33, title: '测试数据33' },
    { id: 34, title: '测试数据34' },
    { id: 35, title: '测试数据35' },
    { id: 36, title: '测试数据36' }
  ])

  const renderItem = ({ item }) => {
    return <Text style={{ color: '#000', textAlign: 'center' }}>{item.title}</Text>
  }

  const [refreshing, setRefreshing] = useState(false)

  const onReFresh = () => {
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }

  const onEndReached = () => {
    setTimeout(() => {
      setData((prevData) => [
        ...prevData,
        { id: prevData.length + 1, title: `测试数据${prevData.length + 1}` }
      ])
    }, 2000)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={data}
        key={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={<Text style={{ fontSize: 24, textAlign: 'center' }}>测试头部</Text>}
        ListFooterComponent={<Text style={{ textAlign: 'center', color: 'gray' }}>测试底部</Text>}
        refreshControl={
          <RefreshControl onRefresh={onReFresh} refreshing={refreshing}></RefreshControl>
        }
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
      ></FlatList>
    </SafeAreaView>
  )
}

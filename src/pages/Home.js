import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'

import { getProduct } from '../api/product'
import { Loading } from '../components/shared/Loading'
import { NetWorkError } from '../components/shared/NetWorkError'

export const Home = () => {
  const [keywords, setKeywords] = useState('')

  const { data, error, isPending, refetch } = useQuery({
    queryKey: ['productData', keywords],
    queryFn: async () => {
      const data = await getProduct(keywords)
      return data.data
    }
  })

  useEffect(() => {
    if (keywords) {
      refetch()
    }
  }, [keywords, refetch])

  if (isPending) return <Loading />

  if (error) return <NetWorkError title={'断网了孩子'} onReload={refetch} />

  return (
    <View style={styles.container}>
      <View style={{ gap: 12 }}>
        <Text style={{ textAlign: 'center' }}>{keywords}</Text>
        <TextInput
          style={styles.input}
          placeholder="此处可搜索产品名称"
          onChangeText={(text) => setKeywords(text)}
          value={keywords}
        />
      </View>

      <View>
        {data && data.length > 0 ? (
          data.map((item) => <Text key={item.id}>{item.product_name}</Text>)
        ) : (
          <Text>暂无结果</Text>
        )}
      </View>

      <StatusBar style="auto" />
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
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8
  }
})

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Context } from './pages/Context'
import { CusFlatList } from './pages/FlatList'
import { Home } from './pages/Home'
import { LookCommonComponents } from './pages/LookCommonComponents'
import { CusScrollView } from './pages/ScrollView'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000
    }
  }
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Home /> */}
      {/* <Context /> */}
      {/* <CusScrollView></CusScrollView> */}
      {/* <CusFlatList></CusFlatList> */}
      <LookCommonComponents></LookCommonComponents>
    </QueryClientProvider>
  )
}

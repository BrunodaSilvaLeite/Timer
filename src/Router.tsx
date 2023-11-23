import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/index'
import { History } from './pages/History'
import { Index } from './layouts/DefaultLayout/Index'

export function Router() {
  return (
    <Routes>
      <Route path="/Timer" element={<Index />}>
        <Route path="/Timer" element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
  )
}

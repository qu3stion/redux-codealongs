import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import PostsPage from './pages/PostsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        //Pages
        <Route path="/" element={DashboardPage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

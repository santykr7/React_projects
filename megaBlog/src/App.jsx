import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import "./App.css"
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./Component"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  // condition loading on screen

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-500'>
      <div className='w-full block'>
        <Header />
        <main>TODO{/* outlet handle */}</main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App

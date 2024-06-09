import { useState } from 'react'
// import './App.css'
import Homepage from './pages/Homepage/Homepage'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Profile from './pages/Profile/Profile'
import NavBar from './components/ui/NavBar/NavBar'
import Footer from './components/ui/Footer/Footer'
import { Route, Routes, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import ProtectedRoute from './route/ProtectedRoute'

function App() {
  const [session, setSession] = useState(undefined);
  onAuthStateChanged(auth, async (user) => {
    user ? setSession(true) : setSession(false)
  })

  return session === undefined ? (<div>
    <h2>Still loading...</h2>
  </div>) : (
    <>
      <NavBar />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route element={<ProtectedRoute accessState={session} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={session ? <Navigate to="/profile" replace /> : <Navigate to="/homepage" replace />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      <Footer />
    </>
  )
}

export default App

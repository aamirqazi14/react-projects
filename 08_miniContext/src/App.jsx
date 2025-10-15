import React, { useContext } from 'react'
import Profile from './components/profile'
import Login from './components/login'
import UserContextProvider from './context/userContextProvider'
import UserContext from './context/userContext'

function AppContent() {
  const { user } = useContext(UserContext)

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-600 mt-6 mb-4">
        useContext React
      </h1>

      {/* Show only one at a time */}
      {user ? <Profile /> : <Login />}
    </>
  )
}

function App() {
  return (
    <UserContextProvider>
      <AppContent />
    </UserContextProvider>
  )
}

export default App

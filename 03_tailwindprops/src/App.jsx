
import './App.css'
import Card from './components/Card.jsx'

function App() {

    // let myobj = {
    //   username : "hitesh",
    //   age : 21
    // }
    // let MyArr = [1,2,2,5]


      return (
    <>
      {/* <h1 className='text-4xl font-bold text-blue-600 mt-6'>chai or code</h1> */}
      
    <Card language = " Python" btntext = "Learn Python"/>
    <Card language = " Java" btntext = "Learn Java"/>
    <Card language = " .NET" btntext = "Learn .NET"/>
    </>  
  )
}

export default App

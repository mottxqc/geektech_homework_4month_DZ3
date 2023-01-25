import './App.css'
import Navigation from './components/nav/nav'
import ProductsList from './components/mousesList/mousesList'

function App() {
  const searchHandler = (text) => {
    alert(`Поиск по запросу: ${text}`)
  }

  return (
    <div className="App">
      <nav handler={searchHandler} />
      <mousesList />
    </div>
  )
}

export default App
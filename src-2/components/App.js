import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import logo from '../assets/logo.png'

function App() {
  return (
    <div>
      <Banner>
          <img src={logo} alt='La maison jungle' />
          <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <ShoppingList />
    </div>
  )
}

export default App;

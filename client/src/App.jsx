import './App.scss'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import MainLayout from './Layout/MainLayout'
import AddPage from './Pages/AddPage'
import DetailsPage from './Pages/DetailsPage'
import WishlistPage from './Pages/WishlistPage'
import HomePage from './Pages/Home'
import BasketPage from './Pages/BasketPage'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/addpage' element={<AddPage/>}/>
        <Route path='/details/:id' element={<DetailsPage/>}/>
        <Route path='/wishlist' element={<WishlistPage/>} />
        <Route path='/basket' element={<BasketPage/>} />

        <Route/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App

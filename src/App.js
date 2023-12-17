import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import BuyTicketPage from "./components/buyticket/BuyTicketPage "

function App() {
  return (
    <>
    <BrowserRouter>
      <Router>
        <Header />
        
          <Route exact path='/' component={HomePage} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
          <Route path='/buy-ticket' component={BuyTicketPage}/>
       
        <Footer />
      </Router>
      </BrowserRouter>
    </>
  )
}

export default App

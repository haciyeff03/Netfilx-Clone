import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import BuyTicketPage from "./components/buyticket/BuyTicketPage "

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
          <Route path='/buy-ticket' component={BuyTicketPage}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

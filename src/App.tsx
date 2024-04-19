// import Categories from "./componets/Category"
// import Header from "./componets/Header";

import Card from "./componets/Card/Card"
import Categories from "./componets/Category/Category"
import Header from "./componets/Header"
import Home from "./pages/Home/Home"



function App() {
  return (
    <div className="main wrapper">

      <Header />
     <Home />

      <div className="container cards">
        {/* {
        pizza.map((el: any, i: number) => <Card />)
      } */}
      </div>
    </div>
  )

}

export default App

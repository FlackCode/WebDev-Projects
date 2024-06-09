import Nav from "../Nav"
import Header from "./Header"
import Menu from "../Menu"

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Nav/>
      <Menu/>
      <Header/>
    </div>
  )
}

export default Landing
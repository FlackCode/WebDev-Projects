import Nav from "../Nav"
import Menu from "../Menu"
import ShopContent from "./ShopContent"

const Shop = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <Menu />
      <ShopContent />
    </div>
  )
}

export default Shop
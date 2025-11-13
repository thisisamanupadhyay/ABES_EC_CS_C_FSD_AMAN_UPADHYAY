import Search from "./Search"
import Product from "./Product"
import { useEffect, useState } from "react"
const Body = () => {
    const [productsData, setProductsData] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => setProductsData(data))
            .catch((error) => console.log("Unable to load data", error))
    }, [])
    return (
        <div className="body">
            <Search />
            <div className="products" style={{ display: "flex", flexWrap: "wrap", gap: "35px" }}>
                {productsData.map((product) => <Product product={product} />)}
            </div>
        </div>
    )
}

export default Body
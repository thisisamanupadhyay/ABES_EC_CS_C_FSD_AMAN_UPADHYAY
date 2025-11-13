const Product = ({ product }) => {
    return (
        <div className="product">
            <img src={product.img} alt="prod-here" />
            <h2>{product.title}</h2>
            <h3>{product.price}</h3>
        </div>
    )
}

export default Product
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartAdd } from "../../Actions/CartAction";

export const ProductDetailPage = () => {

    const { productID } = useParams();

    // console.log(productID);
    const dispatchCart = useDispatch();
    const [productDetail, setProductDetail] = useState();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productID}`)
          .then(res => res.json())
          .then(data => {
            data.priceNew = (1 - data.discountPercentage/100) * data.price;
            data.priceNew = +data.priceNew.toFixed(2);
            setProductDetail(data);
          })
      }, [])

    const handleQuantityDown = ()=>{
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }
    const handleQuantityUp = ()=>{
        setQuantity(quantity + 1)
    }
    
    const handleAddToCart = ()=>{
        dispatchCart(cartAdd(quantity, productDetail));
        alert("them san pham thanh cong")
        
    }




    return (
        <>
            {productDetail && (
                <>
                    <div className="ff">
                        <h1>{productDetail.title}</h1>
                        <img src={productDetail.thumbnail} alt={productDetail.title} />
                        <h3>Giá cũ: <del>{productDetail.price}$</del></h3>
                        <h3>Giảm: {productDetail.discountPercentage}%</h3>
                        <h3>Giá mới: {productDetail.priceNew}$</h3>
                        <div>
                            <button onClick={handleQuantityDown}>-</button>
                            <span style={{ margin: "0 10px" }}>
                                {quantity}
                            </span>
                            <button onClick={handleQuantityUp}>+</button>
                        </div>
                        <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                    </div>
                </>
            )}
        </>
    )
}
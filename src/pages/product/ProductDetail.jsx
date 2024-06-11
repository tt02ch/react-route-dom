import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetailPage = ()=>{

    const {productID} = useParams();

    // console.log(productID);

    const [productDetail,setProductDetail] = useState();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${productID}`)
            .then(res => res.json())
            .then(data => {
                setProductDetail(data);

                console.log(data)
            })
    }, [])
    return (
        <>
            {productDetail &&(
                <div className="product-detail">
                    <img src={productDetail.thumbnail} alt={productDetail.title}/>
                    <div>
                        {productDetail.description}
                    </div>
                </div>
            )}
        </>
    )
}
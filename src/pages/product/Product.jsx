import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export const ProductPage = () => {

    const [listProduct, setListProduct] = useState();
    const [searchParams,setSearchParams] = useSearchParams();
    const [totalPagination,setTotalPaginaiton] = useState(0);
    const newQueryParams = new URLSearchParams(searchParams);
    const page = searchParams.get("page") || 1;
    let limit = searchParams.get("limit") || 8;
    limit = parseInt(limit);
    // console.log(page)
    const skip = (parseInt(page) -1) * limit;
    

    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then(res => res.json())
            .then(data => {
                setListProduct(data.products);
                setTotalPaginaiton(Math.ceil(data.total / limit))
            })
    }, [skip,limit])

    const handlePagination = (pageNumber)=>{
        console.log(pageNumber)
        newQueryParams.set("page",pageNumber);
        setSearchParams(newQueryParams);
    }
    const handleLimit = (even) =>{
        const limitItem = even.target.value;
        newQueryParams.set("limit",limitItem);
        setSearchParams(newQueryParams);
    }
    return (
        <>
            <select onChange={handleLimit} defaultValue={limit}>
                <option value={8}>8</option>
                <option value={16}>16</option>
                <option value={24}>24</option>
            </select>

            {listProduct && (
                <div className="products">
                    {listProduct.map((item, index) => (
                        <Link to={`/product/${item.id}`} key={index}>
                            <div className="products__item" >
                                <div className="products__img">
                                    <img src={item.thumbnail} alt="" />
                                </div>
                                <div className="products__title">
                                    {item.title}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            )
            }

            <div className="pagination">
                {Array(totalPagination).fill().map((item,index) =>(
                    <button onClick={() => handlePagination(index+1)} className={parseInt(page)===index+1? "active" : ""}  key={index}>{index+1}</button>
                ))}
            </div>
        </>
    )
}
import { useDispatch, useSelector } from "react-redux";
import { cartDelete, cartUpdateQuantity } from "../../Actions/CartAction";


export const CartPage = () => {
  const cart = useSelector(state => state.cartReducer.cart);
  const dispatchCart = useDispatch();

  let totalPrice = 0;

  cart.forEach(item => {
    item.totalPrice = item.productDetail.priceNew * item.quantity;
    item.totalPrice = +item.totalPrice.toFixed(2);
    totalPrice += item.totalPrice;
  });

  totalPrice = +totalPrice.toFixed(2);

  const handleUpdateQuantity = (event, productId) => {
    const quantity = +event.target.value;
    dispatchCart(cartUpdateQuantity(quantity, productId));
  }

  const handleDelete = (productId) => {
    dispatchCart(cartDelete(productId));
  }



    return (
        <>
            <h1>Trang giỏ hàng</h1>

            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Hình ảnh</th>
                        <th>Tiêu đề</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Tạm tính</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.length > 0 ? (<>
                        {cart.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={item.productDetail.thumbnail}
                                        alt={item.productDetail.title}
                                        style={{ width: "80px" }}
                                    />
                                </td>
                                <td>
                                    {item.productDetail.title}
                                </td>
                                <td>
                                    <div>Giá cũ: <del>{item.productDetail.price}$</del></div>
                                    <div>Giảm: {item.productDetail.discountPercentage}%</div>
                                    <div>Giá mới: <b>{item.productDetail.priceNew}$</b></div>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        defaultValue={item.quantity}
                                        min={1}
                                        style={{ width: "60px" }}
                                        onChange={(event) => handleUpdateQuantity(event, item.productDetail.id)}
                                    />
                                </td>
                                <td>
                                    <b>{item.totalPrice}$</b>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.productDetail.id)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </>) : (<>
                        <tr>
                            <td colSpan={7} style={{ textAlign: "center" }}>Giỏ hàng rỗng!</td>
                        </tr>
                    </>)}
                </tbody>
            </table>

            <h3>Tổng tiền: {totalPrice}$</h3>
        </>
    )
}
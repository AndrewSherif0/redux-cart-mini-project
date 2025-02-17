
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { clear, removeFromCart } from './rtk/slices/cart-slice';
import Container from 'react-bootstrap/esm/Container';
function Cart() {
    const cartDetails = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const totalPrice = cartDetails.reduce((acc, product) =>
        acc + product.price * product.quantity, 0);
    return (
        <Container>
                <h1>Welcome your Cart</h1>
                <Button variant="primary"  className="mb-3" style={{alignContent:"start"}} onClick={() => dispatch(clear())}>Clear cart </Button>
            <Table striped="columns">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cartDetails.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.title}</td>
                            <td><img src={product.image} style={{ maxHeight: "20px", maxWidth: "20px" }} alt="hel" /> </td>
                            <td> {product.price}</td>
                            <td> {product.quantity}</td>
                            <td><Button variant="danger" onClick={() => dispatch(removeFromCart(product))}>Delete </Button></td>

                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total</td>
                        <td style={{backgroundColor:"green",color:"pink",borderRadius:"50px"}}>{totalPrice.toFixed(2) } $ </td>
                    </tr>
                </tfoot>
            </Table>
        </Container>
    );
}




export default Cart;
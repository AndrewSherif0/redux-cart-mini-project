import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './rtk/slices/products-slice';
import { useEffect } from 'react';
import { addToCart } from './rtk/slices/cart-slice';

function Products() {
    const products = useSelector(state => state.products);
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct());
    }, [dispatch]);
    return (
        <Container className='py-5'>
            <Row className='py-5'>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card style={{ width: '18rem', height: '30rem', overflow: 'hidden', marginBottom: '30px', borderRadius: '50px' }}>
                            <Card.Img style={{ height: '250px' }}
                                variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title
                                    style={{
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {product.title}
                                </Card.Title>

                                <Card.Text
                                    style={{
                                        display: '-webkit-box',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        height: '4.5em', // Adjust based on your font size and line height
                                    }}
                                >
                                    {product.description}
                                </Card.Text>
                                <Card.Text>
                                    ${product.price.toFixed(2)}
                                </Card.Text>
                                <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
export default Products;                              
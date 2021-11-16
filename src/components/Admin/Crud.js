import { useState } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap";
import mydb from "../../data/firebaseConfig";

export const Crud = () => {

  const addOrEditProduct = async (prodObj) =>{
    const res = await mydb.collection('laptops').doc().set(prodObj);
  }

  const initialValues = {
    id: "",
    title: "",
    description: "",
    price: 0,
    pictureUrl: "",
    stock: 0,
  };

  /*https://www.youtube.com/watch?v=Y9-UkL6ent4*/

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target
    console.log(name, value);
    setValues({...values, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col className="mt-4">
            <Card>
              <Card.Body>
                <Card.Title>Agregar productos</Card.Title>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <FloatingLabel
                        controlId="floatingSelectGrid"
                        label="Collection"
                      >
                        <Form.Select
                          aria-label="Floating label select example"
                          onChange={handleInputChange}
                          name="category"
                        >
                          <option value="accesories">Accesories</option>
                          <option value="computers">Computers</option>
                          <option value="laptops">Laptops</option>
                          <option value="monitors">Monitors</option>
                        </Form.Select>
                      </FloatingLabel>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Product ID</Form.Label>
                        <Form.Control
                          name="id"
                          type="text"
                          placeholder="Enter Product ID"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Product Title</Form.Label>
                        <Form.Control
                          name="title"
                          type="text"
                          placeholder="Product Title"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          name="description"
                          type="text"
                          placeholder="Description"
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          name="price"
                          type="number"
                          placeholder="Price"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Picture URL</Form.Label>
                        <Form.Control
                          name="pictureUrl"
                          type="text"
                          placeholder="Picture URL"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                          name="stock"
                          type="number"
                          placeholder="Stock"
                          onChange={handleInputChange}
                        />
                      </Form.Group>

                      {/*
                   <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}
                      <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                          Agregar Producto
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

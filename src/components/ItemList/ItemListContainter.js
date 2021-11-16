import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Container, Row, Col } from "react-bootstrap";
import { collection, getDocs } from "@firebase/firestore";
import mydb from "../../data/firebaseConfig";

function ItemListContainter({ data }) {
  const [categoryLink, categoryTitle] = data;
  const [productList, setProductList] = useState([]);
  // const [jsonData, setJsonData] = useState(0);

  useEffect(() => {
    const getItemList = async () => {
      const result = await getDocs(collection(mydb, categoryLink));
      const queryResults = result.docs.map((doc) => doc.data());
      console.log(queryResults);

      queryResults && setProductList(queryResults);
      // return queryResults;
      // let queryResults = new Array;
      // dbItems.forEach( elem => {
      //   queryResults.push(elem.data());
      // })
      // setProductList(queryResults);
    };
    getItemList();
  
  }, [categoryLink]);

  return (
    <Container>
      <Row className="item-list-container">
        <Col md={3}>
          <h1>{categoryTitle}</h1>
          <hr />
        </Col>
        <Col md={9} className="d-flex justify-content-center">
          <Row>
            <ItemList items={productList} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default ItemListContainter;

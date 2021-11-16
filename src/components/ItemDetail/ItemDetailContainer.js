import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useRouteMatch } from "react-router";
import { Container, Spinner } from "react-bootstrap";

import laptopData from "../../data/mock/latops.json";
import computerData from "../../data/mock/computers.json";
import monitorData from "../../data/mock/monitors.json";
import accesoriesData from "../../data/mock/accesories.json";

const ItemDetailContainer = () => {
  const [itemInfo, setItemInfo] = useState(0);
  let { url, path } = useRouteMatch();

  useEffect(() => {
    const myarr = url.split("/");

    const ackData = new Promise((resolve, reject) => {
      setTimeout(function () {
        switch (myarr[1]) {
          case "computers":
            resolve(computerData);
            break;

          case "laptops":
            resolve(laptopData);
            break;

          case "monitors":
            resolve(monitorData);
            break;
          case "accesories":
            resolve(accesoriesData);
            break;
          default:
            break;
        }
      }, 500);
    });

    ackData.then((response) => {
      const itemFiltered = response.filter((item) => item.id === myarr[2]);
      setItemInfo(itemFiltered);
    });
  }, [url]);

  return (
    <>
      {itemInfo.length ? (
        <>
          <Container className="mt-4">
            <ItemDetail itemInfo={itemInfo[0]} />
          </Container>
        </>
      ) : (
        <Spinner animation="border" variant="primary" />
      )}
    </>
  );
};

export default ItemDetailContainer;

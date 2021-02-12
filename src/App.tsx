import React, { FormEvent, useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";

import data from "./assets/products.json";
import { ProductInterface, DataSizes } from "./types";
import { handleErrorImage } from "./utils";

const Nav = styled.nav`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  background: white;
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 90px;

  div {
    display: flex;
  }

  .div-right {
    align-items: center;
    justify-content: center;
    align-self: center;
    align-content: center;
    justify-self: center;
    justify-items: center;
  }

  input {
    border: 0;
    border-bottom: 0.1rem solid #000;
    border-radius: 0;
    line-height: 1.1;
    outline: none;
    transition: all 0.3s;
    font-family: Gotham, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 5px;

    &:focus {
      border: none;
      outline: none;
    }
  }
`;
const Container = styled.div`
  padding: 0 30px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  background: whitesmoke;
  margin: 0 auto;

  .bold {
    font-weight: bold;
  }
  .gray {
    color: gray;
  }

  .item {
    margin: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-width: 263px;

    picture {
      border-bottom: 1px solid #d3d3d3;
      img {
        width: 100%;
        height: 100%;
        max-width: 263px;
        min-height: 335px;
      }

      .discount_percentage {
        display: flex;
        background: black;
        padding: 10px;
        position: absolute;
        flex-direction: column;
        text-align: center;
        align-self: center;
        margin-top: -62px;

        span {
          flex: 1;
          color: white;
        }
      }
    }

    .container-price {
      width: 100%;
      text-align: center;
      padding: 10px;
    }

    .price {
      display: flex;
      justify-content: center;

      span {
        font-size: 0.7em;
        margin: 5px;
      }

      span:nth-child(1) {
      }
      span:nth-child(2) {
      }
    }
  }
`;

const ContainerScreen = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  z-index: 5;
  top: 0;
  left: 0;

  .screen {
    z-index: 10;
    position: fixed;
    background: white;
    width: 90%;
    height: 90%;
    top: 5%;
    left: 5%;
    display: flex;
    flex-direction: row;
    max-width: 1300px;
    max-height: 600px;

    picture {
      border-bottom: 1px solid #d3d3d3;
      display: flex;
      flex: 1;
      margin: 30px;
      justify-content: flex-end;
      img {
        width: 100%;
        height: 100%;
        max-width: 380px;
        min-height: 480px;
      }
    }

    .details-about-price {
      flex: 1;
      display: flex;
      border: 1px solid black;
      padding: 20px;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      button {
        background: black;
        color: white;
        display: flex;
        width: 100%;
        border: none;
        padding: 13px;
        font-size: 1.2em;
        text-align: center;
        justify-content: center;
        align-items: center;
      }

      .size {
        display: flex;
        flex-direction: row;
        justify-content: center;

        div {
          display: flex;
          width: 44px;
          height: 44px;
          border-radius: 22px;
          border-color: gray;
          justify-content: center;
          align-items: center;
          margin: 5px;
          border: 1px solid black;
          cursor: pointer;
        }

        .set {
          background: white;
        }

        .not-set {
          background: whitesmoke;
          cursor: not-allowed;
        }

        .chosen {
          background: black !important;
          color: white;
        }
      }
    }
  }
`;

const Aside = styled.aside`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 100%;
  z-index: 5;
  top: 0;
  left: 0;

  .bold {
    font-weight: bold;
  }

  section {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 5;

    .inside-aside {
      display: flex;
      flex-direction: column;
      background-color: whitesmoke;
      bottom: 0;
      box-shadow: -0.2rem 0 0.2rem rgba(0, 0, 0, 0.1);
      position: fixed;
      /* right: -100%; */
      right: 0;
      top: 0;
      transform: translateZ(0);
      z-index: 1500;
      width: 340px;
      transition: 0.3s;

      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }

  header {
    align-items: center;
    border-bottom: 0.1rem solid #ccc;
    display: flex;
    height: 5rem;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1rem;
  }

  .container {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: stretch;
    text-align: center;
    align-items: stretch;
    height: 100%;

    .item-cart {
      border-bottom: 1px solid #d3d3d3;
      align-items: center;
      justify-content: space-around;

      span {
        margin: 5px;
        font-size: 0.7em;
      }

      button {
        background: red;
        color: black;
      }
    }

    .not-items {
      display: flex;
      flex: 1;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }
    div {
      margin: 5px;
    }
    span {
      font-weight: 300;
      font-weight: bold;
    }
    p {
      font-weight: 200;
      font-size: 0.8em;
    }
  }
  img {
    width: 40px;
  }
`;

function App() {
  const [products, setProducts] = useState<ProductInterface[]>();
  const [searchInput, setSearchInput] = useState<ProductInterface[]>();
  const [loadingSearchInput, setLoadingSearchInput] = useState(false);
  const [itemComponent, setItemComponent] = useState<ProductInterface[]>();
  const [loadingComponent, setLoadingComponent] = useState(false);
  const [clickedSize, setClickedSize] = useState<any>("");
  const [cart, setCart] = useState<ProductInterface[]>();
  const [modal, setModal] = useState(false);
  const [valueHeight, setValueHeight] = useState("");

  useEffect(() => {
    async function init() {
      const getData = data as any;

      getData.forEach((element: ProductInterface, index: number) => {
        element.id = index;
      });

      setProducts(getData);

      // if (!heigth) {
      //   setValueHeight(heigth);
      // }
    }
    init();
  }, []);

  const calculatePrice = () => {
    const arr: any = [];

    cart &&
      cart.forEach((element: any) => {
        const removeCipher = element[0].actual_price.replace("R$", "").trim();
        const value = parseFloat(removeCipher.replace(",", "."));
        arr.push(value);
      });

    if (arr.length) {
      return eval(arr.join("+")).toFixed(2);
    } else {
      console.log(cart);

      return null;
    }
  };
  const handleCloserScreen = (event: any) => {
    if (event.target.id === "screen") {
      setLoadingComponent(!loadingComponent);
    }
  };

  const removeItemCart = (index: number) => {
    const newItem: any = [];

    cart &&
      cart.forEach((el, indexItem) => {
        console.log(index);
        if (indexItem !== index) {
          newItem.push(el);
        }
      });

    setCart(newItem);
    console.log(newItem);
  };

  const handleSizeChosen = (size: DataSizes) => {
    if (size.available !== false) {
      setClickedSize(size.size);
    }
  };

  const handleSubmit = () => {
    if (!clickedSize) {
      alert("escolha o tamanho");
      return;
    }
    const itemSaved: any = [];

    itemComponent &&
      itemComponent.forEach((element) => {
        itemSaved.push(element);
      });

    itemSaved.sizeChozen = clickedSize;

    if (cart?.length === undefined) {
      setCart(Array(itemSaved));
    } else {
      var finalItem = cart.concat(Array(itemSaved));

      setCart(finalItem);
    }
    alert("item adicionado");
    //setItemComponent([]);
    setClickedSize("");
  };

  const ComponentShowDetail = () => {
    return (
      <ContainerScreen
        onClick={handleCloserScreen}
        id="screen"
        style={{ height: valueHeight }}
      >
        <div className="screen">
          <picture>
            <img
              alt="produto"
              src={itemComponent && itemComponent[0]?.image}
              onError={handleErrorImage}
            />
          </picture>
          <div className="details-about-price">
            <h2>{itemComponent && itemComponent[0]?.name}</h2>
            <div className="price">
              <span className="bold">
                {itemComponent && itemComponent[0]?.actual_price}
              </span>
              <span className="gray">
                {itemComponent && itemComponent[0]?.installments}
              </span>
            </div>
            <h4>
              cor:
              <span className="bold">
                {itemComponent && itemComponent[0]?.color}
              </span>
            </h4>
            <h5>Tamanho:</h5>
            <div className="size">
              {itemComponent?.length !== 0
                ? itemComponent &&
                  itemComponent[0]?.sizes.map((size, key) => {
                    return (
                      <div
                        key={key}
                        onClick={() => handleSizeChosen(size)}
                        className={`${
                          size.available !== false ? "set" : "not-set"
                        } ${size.size === clickedSize ? "chosen" : ""}`}
                      >
                        <span>{size.size}</span>
                      </div>
                    );
                  })
                : null}
            </div>
            <button onClick={handleSubmit}>Comprar</button>
          </div>
        </div>
      </ContainerScreen>
    );
  };

  const handleShowComponent = (item: any) => {
    const heigth =
      document.querySelector("body")?.clientHeight.toString() + "px";

    setValueHeight(heigth);

    setItemComponent(Array(item));
    setClickedSize("");
    setLoadingComponent(!loadingComponent);
  };

  const ComponentAside = () => {
    return (
      <Aside className="cart-invisible" style={{ height: valueHeight }}>
        <section
          id="aside"
          onClick={(event: any) =>
            event.target.id === "aside" ? setModal(!modal) : null
          }
        >
          <div className="inside-aside">
            <header>
              <button
                className="closer-cart"
                title="close-cart"
                onClick={() => setModal(!modal)}
              >
                <i className="far fa-times-circle"></i>
              </button>
              <h4 className="count-item">
                <span>
                  Sacola ({cart?.length !== undefined ? cart.length : "0"})
                </span>
              </h4>
              <button title="Ajuda" type="button">
                <i className="i-question-circle-o"></i>
              </button>
            </header>
            <div className="container">
              {cart?.length === undefined ? (
                <div className="not-items">
                  <div>
                    <span className="bold">Sua sacola está vazia</span>
                  </div>
                  <main>
                    <div>
                      <p>
                        Navegue pelos nossos produtos e adicione no carrinho.
                      </p>
                    </div>
                  </main>
                </div>
              ) : (
                <>
                  {cart.length !== 0 ? (
                    <span>Valor: R$:{calculatePrice()}</span>
                  ) : null}
                  {cart &&
                    cart.map((product: any, index) => {
                      return (
                        <div className="item-cart">
                          <span>
                            {product[0].name} ({product.sizeChozen})
                          </span>
                          <span>{product[0].actual_price}</span>
                          <img
                            alt="item do carrinho"
                            src={product[0].image}
                            onError={handleErrorImage}
                          />
                          <button onClick={() => removeItemCart(index)}>
                            X
                          </button>
                        </div>
                      );
                    })}
                </>
              )}
            </div>
          </div>
        </section>
      </Aside>
    );
  };

  const handleInput = (e: FormEvent) => {
    const arr: any = [];

    const target = e.target as HTMLInputElement;
    const text = target.value.toLowerCase();

    if (target.value.length > 2) {
      products &&
        products.forEach((element) => {
          const name = element.name.toLowerCase();
          if (name.includes(text)) {
            arr.push(element);
          }
        });
    }

    console.log(arr);
    if (arr.length > 0) {
      setLoadingSearchInput(true);
      setSearchInput(arr);
    }
  };
  return (
    <>
      <Nav>
        <div>
          <a href="/">inicio</a>
        </div>
        <div className="div-right">
          <label>
            Pesquisar: <input type="text" onChange={handleInput} />
          </label>
          <button title="open-cart">
            <i className="fas fa-search"></i>
          </button>
          <button
            className="btn-shopping"
            title="cart"
            onClick={() => setModal(!modal)}
          >
            <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
        {modal !== false ? <ComponentAside /> : null}
      </Nav>

      <Container>
        {loadingSearchInput === false
          ? products &&
            products.map((product, index) => {
              return (
                <div
                  key={index}
                  className="item"
                  onClick={() => handleShowComponent(product)}
                >
                  <picture>
                    <img
                      alt="produto"
                      src={product.image}
                      onError={handleErrorImage}
                    />
                    {product.discount_percentage ? (
                      <div className="discount_percentage">
                        <span>{product.discount_percentage}</span>
                        <span>off</span>
                      </div>
                    ) : null}
                  </picture>
                  <div className="container-price">
                    <span>{product.name}</span>
                    <div className="price">
                      <span className="bold">{product.actual_price}</span>
                      <span className="gray">{product.installments}</span>
                    </div>
                  </div>
                </div>
              );
            })
          : searchInput &&
            searchInput.map((product, index) => {
              return (
                <div
                  key={index}
                  className="item"
                  onClick={() => handleShowComponent(product)}
                >
                  <picture>
                    <img
                      alt="produto"
                      src={product.image}
                      onError={handleErrorImage}
                    />
                    {product.discount_percentage ? (
                      <div className="discount_percentage">
                        <span>{product.discount_percentage}</span>
                        <span>off</span>
                      </div>
                    ) : null}
                  </picture>
                  <div className="container-price">
                    <span>{product.name}</span>
                    <div className="price">
                      <span className="bold">{product.actual_price}</span>
                      <span className="gray">{product.installments}</span>
                    </div>
                  </div>
                </div>
              );
            })}
      </Container>
      {loadingComponent === true ? <ComponentShowDetail /> : null}
    </>
  );
}

export default App;

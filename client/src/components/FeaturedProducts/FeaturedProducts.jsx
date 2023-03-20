import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";
// import axios from "axios";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Featured items are products that are highlighted or promoted by a
          business to showcase their best or most popular products. They are
          typically displayed prominently on a website or in a store to attract
          customers and drive sales. Featuring items can be an effective way to
          showcase the quality and value of a business's products and to create
          a sense of urgency for customers to make a purchase.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

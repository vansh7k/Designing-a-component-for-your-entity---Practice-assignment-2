// import React from 'react'; // Importing React for JSX
// import PropTypes from 'prop-types';
// import button from './button';

// const ProductCard = ({ image, title, description, price }) => {
//     return (
//         <div className="product-card">
//             <img src={image} alt={title} className="product-image" />
//             <h2 className="product-title">{title}</h2>
//             <p className="product-description">{description}</p>
//             <p className="product-price">${price}</p>
//         </div>
//     );
// };

// ProductCard.propTypes = {
//     image: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
// };

//  export default ProductCard;

import React from "react";
import ViewProductButton from "./button"; // Importing the button component

const Productcard = () => {
  // Static product details
  const productImage = "https://via.placeholder.com/150";
  const productName = "Sample Product";
  const price = "$99.99";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg p-5 border border-gray-200">
      <img src={productImage} alt="Product" className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-3">{productName}</h2>
      <p className="text-gray-500 text-lg">{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;

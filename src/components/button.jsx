// import React from 'react'; // Importing React for JSX
// import PropTypes from 'prop-types';

// const Button = ({ text, onClick, style }) => {
//     return (
//         <>
//             <button onClick={onClick} style={style} className="custom-button">
//                 {text}
//             </button>
//         </>
//     );
// };

// Button.propTypes = {
//     text: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//     style: PropTypes.object,
// };

// export default Button;

import React from "react";

const ViewProductButton = () => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-3 hover:bg-blue-600">
      View Product
    </button>
  );
};

export default ViewProductButton;

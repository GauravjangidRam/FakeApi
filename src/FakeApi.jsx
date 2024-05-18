// // import React, { useEffect,useState } from 'react'
// // import './App.css'
// // import './FakeApi.css'

// // const FakeApi = () => {

// //     const [Product, setProduct] = useState("")
// //     const [titleName, setTitleName] = useState("")
// //     const [category, setcategory] = useState("")
// //     const [Price, setPrice] = useState("")

// //     const response = async ()=>{
// //         const res = await fetch("https://fakestoreapi.com/products");
// //         const data = await res.json();
// //         console.log(data);
// //         const {title , }
// //         setPrice(price)
// //         setTitleName(title)

// //     }
// //     useEffect(()=>{
// //         response();
// //     })

// //   return (
// //     <>
// //     <h1>Fake Store API use </h1>

// //     <div className="container">
// //         <div className="box">
// //             <h4>{Product.title}</h4>
// //             <p>description</p>
// //            <h3>Image</h3>
// //         </div>
// //         {/* <div className="box">
// //             <h4>title</h4>
// //             <p>description</p>
// //            <h3>Image</h3>
// //         </div>
// //         <div className="box">
// //             <h4>title</h4>
// //             <p>description</p>
// //            <h3>Image</h3>
// //         </div> */}
// //     </div>

// //     </>
// //   )
// // }

// // export default FakeApi

import React, { useEffect, useState } from "react";
import "./App.css";
import "./FakeApi.css";

const FakeApi = () => {
  const [product, setProduct] = useState([]);
  // const [titleName, setTitleName] = useState("");
  // const [category, setCategory] = useState("");
  // const [price, setPrice] = useState("");

  const response = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(await data);
    setProduct(data);
    // setTitleName(data);
    // Assuming you want to get the first product from the data
    if (data.length > 0) {
      const { title, price, category } = data;
      // setPrice(price);
      // setTitleName(title);
      // setCategory(category);
      console.log(data.length);
    }
    return data;
  };
  // console.log(product)

  useEffect(() => {
    response();
  }, []);

  return (
    <>
      <h1>Fake Store API use</h1>
      <div className="container">
        {product.map((value) => {
            
          <div key={value.id}>
            <h4>{value.title}</h4>
            <p>{value.category}</p>
            <p>{value.price}</p>
            {console.log(value)}
          </div>;
        })}
      </div>
    </>
  );
};

export default FakeApi;

// import React, { useEffect, useState } from 'react';
// import './App.css';
// import './FakeApi.css';

// const FakeApi = () => {
//     const [products, setProducts] = useState([]);

//     const response = async () => {
//         try {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const data = await res.json();
//             setProducts(data);
//         } catch (error) {
//             console.error("Error fetching data:", error);
//         }
//     };

//     useEffect(() => {
//         response();
//     }, []);

//     return (
//         <>
//             <h1>Fake Store API use</h1>
//             <div className="container">
//                 {&&products.map((product) => (
//                     <div className="box" key={product.id}>
//                         <h4>{product.title}</h4>
//                         <p>{product.category}</p>
//                         <p>${product.price}</p>
//                         <img src={product.image} alt={product.title} />
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default FakeApi;

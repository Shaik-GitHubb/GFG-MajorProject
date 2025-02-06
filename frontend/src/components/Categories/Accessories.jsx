import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Accessories = () => {
  const [minPrice,setMinPrice]=useState("");
  const [maxPrice,setMaxPrice]=useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');  
  const [filteredProducts, setFilteredProducts] = useState([]);
  

  const handleMinPriceChange = (e) => {
    if(e.target.value>maxPrice){
      alert("Min Price should be less than Max Price")
      return;
    }
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

 


  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  
  useEffect(() => {
    let updatedProducts = products;

    if (minPrice || maxPrice || selectedCategory !== 'All') {
      updatedProducts = products.filter((product) => {
        const isCategoryMatch =
          selectedCategory === 'All' || product.Category.toLowerCase() === selectedCategory.toLowerCase();
        const isMinPriceMatch = minPrice ? product.price >= minPrice : true;
        const isMaxPriceMatch = maxPrice ? product.price <= maxPrice : true;

        return isCategoryMatch && isMinPriceMatch && isMaxPriceMatch;
      });
    }
    setFilteredProducts(updatedProducts);
  }, [minPrice, maxPrice, selectedCategory]);


  const products = [
    // Men's Accessories
    {
      name: "Smart Watch",
      Category: "Men's Accessories",
      price: 4999,
      Description: "Feature-packed smartwatch with heart rate monitoring and notifications.",
      image: "https://images-na.ssl-images-amazon.com/images/I/71QTFPBlWcL._AC_UL1500_.jpg"
    },
    {
      name: "Leather Wallet",
      Category: "Men's Accessories",
      price: 999,
      Description: "Premium leather wallet with multiple compartments for cash and cards.",
      image: "https://guysworld.in/wp-content/uploads/2019/03/918JAeC4sIL._SL1500_.jpg"
    },
    {
      name: "Sunglasses",
      Category: "Men's Accessories",
      price: 1499,
      Description: "Stylish UV-protected sunglasses for outdoor wear.",
      image: "https://sp.yimg.com/ib/th?id=OPAC.kcO7318wo%2bM%2f%2bQ474C474&o=5&pid=21.1&w=160&h=105"
    },
    
    // Women's Accessories
    {
      name: "Wireless Earbuds",
      Category: "Women's Accessories",
      price: 2999,
      Description: "Noise-canceling wireless earbuds with long battery life.",
      image: "https://www.bemwireless.com/wp-content/uploads/2020/10/71DL2xEn3KL._AC_SL1500_-2-1024x949.jpg"
    },
    {
      name: "Backpack",
      Category: "Women's Accessories",
      price: 2499,
      Description: "Spacious and durable backpack for travel and daily use.",
      image: "https://i5.walmartimages.com/asr/46a0722c-c367-463b-9a8b-7183416a2799.65c3b9e4f052012038dc3b9b9b572b43.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
    },
    {
      name: "Laptop Sleeve",
      Category: "Women's Accessories",
      price: 1999,
      Description: "Sleek and protective laptop sleeve with extra storage pockets.",
      image: "https://i.etsystatic.com/5172514/r/il/6490eb/1334911437/il_1080xN.1334911437_3jzx.jpg"
    },
    
    // Kids' Accessories
    {
      name: "Cap",
      Category: "Kids' Accessories",
      price: 799,
      Description: "Comfortable and stylish cap for casual outings.",
      image: "https://tse1.mm.bing.net/th?id=OIP.Lc6x8iHYFyhra2l2GnnmdgHaHa&pid=Api&P=0&h=180"
    }
  ];

  return (
    <div className='bg-gray-100 flex flex-row w-full h-full '>
      <div className='bg-white inline-block my-10 py-10 flex gap-10 px-8 ml-4'>
        <div><h1 className='text-2xl font-medium p'>Filters</h1></div>
        <div className='mt-5 '>Price
          <br />
        <input text="number" value={minPrice} onChange={handleMinPriceChange}  placeholder='Min Price' className='my-2'/>
        <br />
        <input text="number" value={maxPrice} onChange={handleMaxPriceChange} placeholder='Max Price' className='my-2'/>
        </div>
        <div className='mt-4 mb-3'>Category</div>
        <select name="category" id="" onChange={handleCategoryChange} >
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
        </select>
      </div>

      <div>
        {
          filteredProducts.map((product)=>{
            return (
              <div className="mt-10 flex inline-block gap-10 px-8">
                <Link to="/product" state={{ product }}>
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 w-60 text-center">
                    <img
                      src={product.image}
                      alt="Product"
                      className="w-40 h-40 object-cover mx-auto rounded-lg"
                    />
                    <div className="mt-3">
                      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                      <p className="text-sm text-gray-500">{product.Category}</p>
                      <p className="mt-2 text-lg font-bold text-green-600">₹{product.price}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        }
        
      </div>

    </div>
  )
}

export default Accessories


import React from 'react';
import "./Shose.css";

const shoesData = [
  {
    id: 1,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdTGBDHjIDyJyCZOqMBr8pbIrrHDJud6xJg&s',
    price: '$49.99',
    product: "Shose"
  },
  {
    id: 2,
    image: 'https://atlas-content-cdn.pixelsquid.com/assets/678483374666421440/previews/G02-200x200.jpg',
    price: '$59.99',
    product: "Shose"
  },
  {
    id: 3,
    image: 'https://freepngimg.com/thumb/shoes/26170-4-vector-shoes-image-thumb.png',
    price: '$39.99',
    product: "Shose"
  },
  {
    id: 4,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoiA0jFJJAdh_UJwA0LGavSys8joR3yJvXw&usqp=CAU',
    price: '$69.99',
    product: "Shose"
  },
  {
    id: 5,
    image: 'https://www.pngall.com/wp-content/uploads/2016/07/Dress-PNG-Image.png',
    price: '$169.99',
    product: "Dress"
  },
  {
    id: 6,
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ae8a96c0-cb6f-4ad8-a7a0-5acd4a48713a/d5avvnu-26820b24-30f3-4634-9eec-a8710fba4e13.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2FlOGE5NmMwLWNiNmYtNGFkOC1hN2EwLTVhY2Q0YTQ4NzEzYVwvZDVhdnZudS0yNjgyMGIyNC0zMGYzLTQ2MzQtOWVlYy1hODcxMGZiYTRlMTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3uCXfys38rLn5TPItBgATDcKSwQq9hyKxl0GlIKWyi4',
    price: '$229.99',
    product: "Dress"
  },
  {
    id: 7,
    image: 'https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-bridal-dress-illustration-in-minimal-style-png-image_10249320.png',
    price: '$150.99',
    product: "Dress"
  },
  {
    id: 8,
    image: 'https://i.pinimg.com/originals/4a/bc/b7/4abcb7a620546e9fd26d3cbed76bbeaa.png',
    price: '$109.99',
    product: "Dress"
  },
  {
    id: 9,
    image: 'https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/image-2489.png?size=*:900',
    price: '$2000.99',
    product: "Mobile"
  },
  {
    id: 10,
    image: 'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/11/FiERK3lVEAEGyCO-photoutils.com_.jpeg?ssl=1&quality=80&w=f',
    price: '$2000.99',
    product: "Mobile"
  },
  {
    id: 11,
    image: 'https://martiniincentives.com/cdn/shop/products/Hc4dd884b58f54fdf95d256e736af41ddF_1024x1024@2x.webp?v=1699761994',
    price: '$2000.99',
    product: "Mobile"
  },
  {
    id: 12,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVizwHEU53QiSLSmTgfFIm5HNWYOmzaW2TA&s',
    price: '$2000.99',
    product: "Mobile"
  }
];

const Shose = () => {
  const shoes = shoesData.filter(item => item.product === "Shose");
  const dresses = shoesData.filter(item => item.product === "Dress");
  const Mobiles = shoesData.filter(item => item.product === "Mobile");

  return (
    <>
      <h1 style={{
        display: "flex",
        justifyContent: "center",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"
      }}>🤷‍♀️Shop Here 🤞</h1>

      <div className="container">
        {shoes.map(shoe => (
          <div key={shoe.id} className="card">
            <img src={shoe.image} alt="shoe" />
            <div className="info">
              <p className="price">{shoe.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="container">
        {dresses.map(dress => (
          <div key={dress.id} className="card">
            <img src={dress.image} alt="dress" />
            <div className="info">
              <p className="price">{dress.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        {Mobiles.map(mobile => (
          <div key={mobile.id} className="card">
            <img src={mobile.image} alt="mobile" />
            <div className="info">
              <p className="price">{mobile.price}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shose;

"use client"; // This is a client component 👈🏽

import { useEffect, useState } from "react";
import Product from "../components/Product";


export default function Home() {
  const [productsInfo, setproductsInfo] = useState<any[]>([]);
  console.log("fetching");

  useEffect(() => {
    fetch("/api/products").then(response => response.json()).then(json => setproductsInfo(json))
  }, []);
  console.log({ productsInfo });

  const catagoryNames = [...new Set(productsInfo.map(p => p.category))];



  return (
    <div className="p-5">
      <div>
        {catagoryNames.map(catagoryName => (
          <div key={catagoryName}>
            <h2 className="text-2xl capitalize">{catagoryName}</h2>
            {productsInfo.filter(p => p.category === catagoryName).map(productInfo => (
              <Product {...productInfo} />
            ))}
          </div>
        ))}

        <div className="py-4">

        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

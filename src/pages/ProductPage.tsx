

import ProductRow from "../components/productRow";
import ProductTableHeader from "../components/productTableHeader";
import ProductFilter from "../components/productFilter";
import { useEffect, useState } from "react";
import type { Product } from "my-types";
import { getAllProducts } from "../api/productapi";



interface Props {}

const SortIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m8 15 4 4 4-4m0-6-4-4-4 4"
    />
  </svg>
);


const ProductPage: React.FC<Props> = () => {

  // States
  const [products, setProducts] = useState<Product[]>([]);
  
  // Behaviour
  useEffect( () => {
    getAllProducts().then((_products: Product[]) => {
      setProducts(_products)
    })
  }, []) 

  // Behaviour test 
  /*
  useEffect( () => {
    getAllProducts().then(setProducts)
  }, [products]) //*/

  // Render
  return (
    <div className="p-6">
      <nav className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="border-b p-4">
          <p className="text-lg font-semibold">All Products</p>
        </div>

        {/* Filter */}
        <ProductFilter />

        {/* Results */}
        <div className="p-4">
          <h2 className="text-md font-semibold mb-2">Results</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <ProductTableHeader />
              </thead>

              <tbody>
                <ProductRow id={1} title="Yu-gi-oh card" description="very fun" price={1000} disc={0} rating={10} stock={7} />
                <ProductRow id={2} title="Magic card" description="not that fun tbh" price={0} disc={100} rating={3} stock={200} />
                <ProductRow id={3} title="Pokemon card" description="ok" price={200} disc={50} rating={8} stock={153} />
                <ProductRow id={4} title="Single tarot card" description="why would u buy just one" price={4} disc={0} rating={6} stock={78} />
                
              </tbody>

              <tfoot className="bg-gray-100">
                <ProductTableHeader />
              </tfoot>
            </table>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProductPage;
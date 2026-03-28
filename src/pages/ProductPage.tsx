

import {
  PhotoIcon,
  TrashIcon,
  PencilIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import ProductRow from "../components/productRow";
import ProductTableHeader from "../components/productTableHeader";
import ProductFilter from "../components/productFilter";
import { useEffect, useState, useMemo } from "react";
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
  
  const [titleQuery, setTitleQuery] = useState("");
  const [descriptionQuery, setDescriptionQuery] = useState("");

  const filteredProducts = useMemo(() => {
      const _title = titleQuery.trim().toLowerCase();
      const _description = descriptionQuery.trim().toLowerCase();

      return products.filter((p) => {
        const matchesTitle =
          _title.length === 0 ||
          p.title.toLowerCase().includes(_title);

        const matchesDescription =
          _description.length === 0 ||
          p.description.toLowerCase().includes(_description);

        return matchesTitle && matchesDescription;
      });
    }, [descriptionQuery, titleQuery, products]);

  
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
        <div className="px-4 py-4 space-y-3">
          <h2 className="text-sm font-semibold text-gray-900">Filter</h2>

          <div className="flex flex-wrap gap-3 items-end">

            <div>
              <label className="block text-xs font-medium text-gray-600">
                Title
              </label>
              <input
                className="mt-1 w-40 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                type="text"
                placeholder="Title"
                value={titleQuery}
                onChange={(e) => setTitleQuery(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">
                Description
              </label>
              <input
                className="mt-1 w-40 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                type="text"
                placeholder="Description"
                value={descriptionQuery}
                onChange={(e) => setDescriptionQuery(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600">
                Category
              </label>
              <select className="mt-1 w-40 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>

            <div>
            </div>

          </div>
        </div>



        {/* Results */}
        <div className="p-4">
          <h2 className="text-md font-semibold mb-2">Results</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <ProductTableHeader />
              </thead>
                <tbody className="divide-y divide-gray-200">
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td
                      className="px-3 py-6 text-center text-sm text-gray-500"
                      colSpan={10}
                    >
                      No products found.
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product, index) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 font-medium text-gray-900">
                        {index + 1}
                      </td>

                      <td className="px-3 py-3 text-center text-gray-700">
                        <PhotoIcon
                          className="mx-auto h-4 w-4 text-gray-400"
                        />
                      </td>

                      <td className="px-3 py-3">
                        <button className="text-blue-600 hover:underline text-sm font-medium">
                          {product.title}
                        </button>
                      </td>

                      <td className="px-3 py-3 text-sm text-gray-600">
                        {product.description}
                      </td>

                      <td className="px-3 py-3 text-gray-700">
                        {product.price.toFixed(2)}
                      </td>
                      <td className="px-3 py-3 text-gray-700">
                        {product.discountPercentage.toFixed(1)}
                        %
                      </td>
                      <td className="px-3 py-3 text-gray-700">
                        {product.rating}
                      </td>
                      <td className="px-3 py-3 text-gray-700">
                        {product.stock}
                      </td>

                      {/* Edit */}
                      <td className="px-3 py-3 text-center">
                        <button
                          onClick={() =>
                            window.confirm(
                              `Save the changes for "${product.title}"?`,
                            )
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </button>
                      </td>

                      {/* Delete */}
                      <td className="px-3 py-3 text-center">
                        <button
                          onClick={() =>
                            window.confirm(
                              `Delete the product "${product.title}"?`,
                            )
                          }
                          className="text-red-600 hover:text-red-800"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
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
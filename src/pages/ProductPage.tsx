

import {
  PhotoIcon,
  TrashIcon,
  PencilIcon
} from "@heroicons/react/24/outline";

import ProductTableHeader from "../components/productTableHeader";
import { useEffect, useState, useMemo } from "react";
import type { Category, Product } from "my-types";
import { getAllProducts } from "../api/productapi";
import { getAllCategories } from "../api/categoryapi";



interface Props {}


const ProductPage: React.FC<Props> = () => {

  // Extra vars
  const neutralCategory = "[ select category ]";

  // States
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  
  const [titleQuery, setTitleQuery] = useState("");
  const [descriptionQuery, setDescriptionQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");

  const filteredProducts = useMemo(() => {
      const _title = titleQuery.trim().toLowerCase();
      const _description = descriptionQuery.trim().toLowerCase();
      const _category = categoryQuery.trim().toLowerCase();

      return products.filter((p) => {
        const matchesTitle =
          _title.length === 0 ||
          p.title.toLowerCase().includes(_title);

        const matchesDescription =
          _description.length === 0 ||
          p.description.toLowerCase().includes(_description);

        const matchesCategory = 
          _category.length === 0 ||
          _category === neutralCategory ||
          p.category.title.toLowerCase() == _category;
        
        //console.log(`MATCH [${matchesCategory ? 'TRUE' : 'FALSE'}], Product ${p.title}, Category: ${p.category.title.toLowerCase()}, Looking for ${_category}`);
        return matchesTitle && matchesDescription && matchesCategory;
      });
    }, [descriptionQuery, titleQuery, categoryQuery, products, categories]);

  
  // Behaviour
  useEffect( () => {
    getAllProducts().then((_products: Product[]) => {
      setProducts(_products)
    });

    getAllCategories().then(
      (_categories: Category[]) => {
        setCategories(_categories)
    });

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
              <select className="mt-1 w-40 rounded-md border border-gray-300 bg-white px-2 py-1.5 text-sm 
              text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20
              "
              defaultValue={neutralCategory}
              onChange={e => {setCategoryQuery(e.target.value)}}
              >
                <option className="text-gray-500">{neutralCategory}</option>
                {categories.length === 0 ? 
                ( <option>None</option> )
                : ( 
                  categories.map(category => (
                    <option>{category.title}</option>
                  ))
                )}
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
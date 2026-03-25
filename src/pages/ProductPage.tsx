
import {
  PhotoIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

interface Props {}

const ProductPage: React.FC<Props> = () => {

  return (
    <div className="p-6">
      <nav className="bg-white shadow rounded-lg">
        {/* Header */}
        <div className="border-b p-4">
          <p className="text-lg font-semibold">All Products</p>
        </div>

        {/* Filter */}
        <div className="p-4">
          <h2 className="text-md font-semibold mb-2">Filter</h2>

          <div className="flex flex-wrap gap-4 items-end">
            <div>
              <label className="block text-sm font-medium">Title</label>
              <input
                className="mt-1 border rounded px-3 py-2 w-48"
                type="text"
                placeholder="Text input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Description</label>
              <input
                className="mt-1 border rounded px-3 py-2 w-48"
                type="text"
                placeholder="Text input"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Category</label>
              <select className="mt-1 border rounded px-3 py-2 w-48">
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>

            <div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Filtrar
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="p-4">
          <h2 className="text-md font-semibold mb-2">Results</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Disc.%</th>
                  <th className="p-2 border">Rating</th>
                  <th className="p-2 border">Stock</th>
                  <th className="p-2 border">Modify</th>
                  <th className="p-2 border">Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-2 border">1</td>
                  <td className="p-2 border text-center">
                    <PhotoIcon className="h-5 w-5 mx-auto text-gray-500" />
                  </td>
                  <td className="p-2 border">
                    <button className="text-blue-600 hover:underline">
                      Title
                    </button>
                  </td>
                  <td className="p-2 border">Some description</td>
                  <td className="p-2 border">12.34</td>
                  <td className="p-2 border">3.4</td>
                  <td className="p-2 border">5</td>
                  <td className="p-2 border">36</td>

                  {/* Edit */}
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => window.confirm("Save the changes?")}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                  </td>

                  {/* Delete */}
                  <td className="p-2 border text-center">
                    <button
                      onClick={() => window.confirm("Delete the product?")}
                      className="text-red-500 hover:text-red-700"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              </tbody>

              <tfoot className="bg-gray-100">
                <tr>
                  <th className="p-2 border">#</th>
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Description</th>
                  <th className="p-2 border">Price</th>
                  <th className="p-2 border">Disc.%</th>
                  <th className="p-2 border">Rating</th>
                  <th className="p-2 border">Stock</th>
                  <th className="p-2 border">Modify</th>
                  <th className="p-2 border">Delete</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default ProductPage;


const ProductFilter: React.FC = () => {
    return (     
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
    )
}

export default ProductFilter


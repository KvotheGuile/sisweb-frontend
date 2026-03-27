

const ProductTableHeader: React.FC = () => {

    return (
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
    )
}

export default ProductTableHeader;
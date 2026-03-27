
import {
  PhotoIcon,
  TrashIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

export interface ProductProp{
    id: number,
    title: string,
    description: string,
    price: number,
    disc: number,
    rating: number,
    stock: number
}

const ProductRow: React.FC<ProductProp> = ({id, title, description, price, disc, rating, stock}) => {

    return (
        <tr className="hover:bg-gray-50">
                <td className="p-2 border text-center">{id}</td>
                <td className="p-2 border text-center">
                <PhotoIcon className="h-5 w-5 mx-auto text-gray-500" />
                </td>
                <td className="p-2 border text-center">
                <button className="text-blue-600 hover:underline">
                    {title}
                </button>
                </td>
                <td className="p-2 border">{description}</td>
                <td className="p-2 border text-right">{price}</td>
                <td className="p-2 border text-center">{disc}</td>
                <td className="p-2 border text-center">{rating}</td>
                <td className="p-2 border text-center">{stock}</td>

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
    );
}

export default ProductRow;


import ProductRow from "../components/productRow";
import ProductTableHeader from "../components/productTableHeader";
import ProductFilter from "../components/productFilter";

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
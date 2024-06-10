export default function ProductCard({ product }: { product: any }) {
  return (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-950"
    >
      <img
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg md:text-xl">{product.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="font-semibold text-base md:text-lg">
            ${product.price}
          </span>
          <span className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 px-2 py-1 rounded-md text-xs md:text-sm">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
}

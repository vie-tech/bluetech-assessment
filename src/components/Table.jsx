import React, { useContext } from "react";
import { ProductContext } from "../ProductProvider";
import Loader from "../utility/Loader";

const Table = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <>
      {loading ? (
        <div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <Loader />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto bg-white w-full p-5 mx-auto mt-14 rounded-lg">
            <caption className="text-2xl font-bold">Product List</caption>
            <thead className="mb-4 p-2 bg-blue-100">
              <tr>
                <th className="text-left px-4 py-2">
                  <input type="checkbox" />
                  S/N
                </th>
                <th className="text-left px-4 py-2 text-xs">Image</th>
                <th className="text-left px-4 py-2 text-xs">SKU</th>
                <th className="text-left px-4 py-2 text-xs">Name</th>
                <th className="text-left px-4 py-2 text-xs">Title</th>
                <th className="text-left px-4 py-2 text-xs">Description</th>
                <th className="text-left px-4 py-2 text-xs">Brand</th>
                <th className="text-left px-4 py-2 text-xs">Cost Price</th>
                <th className="text-left px-4 py-2 text-xs">Quantity</th>
                <th className="text-left px-4 py-2 text-xs">Size</th>
              </tr>
            </thead>
            <tbody className="mt-10">
              {products.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-100 font-primary"
                >
                  <td className="text-left py-4 text-xs grid grid-flow-col items-center">
                    <input type="checkbox" />
                    {index + 1}
                  </td>
                  <td className="text-left px-4 py-4 text-xs">
                    <img
                      src={item.Image_1}
                      alt={`icon_${index}`}
                      className="w-10 h-auto"
                    />
                  </td>
                  <td className="px-4 py-4 text-xs">{item.SKU}</td>
                  <td className="px-4 py-4 text-xs">{item.Name}</td>
                  <td className="px-4 py-4 text-xs">{item.Title}</td>
                  <td className="px-4 py-4 text-xs">{item.Description}</td>
                  <td className="px-4 py-4 text-xs">{item.Brand}</td>
                  <td className="px-4 py-4 text-xs">{item["Cost Price"]}</td>
                  <td className="px-4 py-4 text-xs">{item.Quantity}</td>
                  <td className="px-4 py-4 text-xs">{item.size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Table;

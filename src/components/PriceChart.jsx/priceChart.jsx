const PriceChart = () => {
  return (
    <div className="px-4 md:pl-20 md:pr-20 py-12 bg-gray-50">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-[#24447c] mb-2">Price Chart</h2>
       <p className="italic items-center flex m-auto justify-center mb-8  text-justify   text-base/loose">
        Explore our comprehensive Price Chart to gain insights into the cost structure and pricing details for our offerings.
      </p>

      {/* Table Wrapper for Responsiveness */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border text-center">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-600 text-white">
              <th className="px-4 py-3 border">Dimension</th>
              <th className="px-4 py-3 border">Rate per Sqft</th>
              <th className="px-4 py-3 border">Total Amount</th>
              <th className="px-4 py-3 border">Down Payment<br />30%</th>
              <th className="px-4 py-3 border">First Installment<br />30%</th>
              <th className="px-4 py-3 border">Second Installment<br />20%</th>
              <th className="px-4 py-3 border">Third Installment<br />20%</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-900 font-medium">
            <tr>
              <td className="border px-4 py-3">30x40</td>
              <td className="border px-4 py-3">1099/-</td>
              <td className="border px-4 py-3">13,18,800/-</td>
              <td className="border px-4 py-3">3,95,640/-</td>
              <td className="border px-4 py-3">3,95,640/-</td>
              <td className="border px-4 py-3">2,63,760/-</td>
              <td className="border px-4 py-3">2,63,760/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">30x50</td>
              <td className="border px-4 py-3">1099/-</td>
              <td className="border px-4 py-3">16,48,500/-</td>
              <td className="border px-4 py-3">4,94,550/-</td>
              <td className="border px-4 py-3">4,94,550/-</td>
              <td className="border px-4 py-3">3,29,700/-</td>
              <td className="border px-4 py-3">3,29,700/-</td>
            </tr>
            <tr>
              <td className="border px-4 py-3">40x60</td>
              <td className="border px-4 py-3">1099/-</td>
              <td className="border px-4 py-3">26,37,600/-</td>
              <td className="border px-4 py-3">7,91,280/-</td>
              <td className="border px-4 py-3">7,91,280/-</td>
              <td className="border px-4 py-3">5,27,520/-</td>
              <td className="border px-4 py-3">5,27,520/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceChart;

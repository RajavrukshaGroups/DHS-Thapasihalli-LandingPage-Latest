const PriceChart = () => {
  return (
    // <div className="px-4 md:pl-20 md:pr-20 py-12 bg-gray-50">
    //   {/* Title Section */}
    //   <h2 className="text-3xl font-bold text-center text-[#24447c] mb-2">
    //     Price Chart
    //   </h2>
    //   <p className="italic items-center flex m-auto justify-center mb-8  text-justify   text-base/loose">
    //     Explore our comprehensive Price Chart to gain insights into the cost
    //     structure and pricing details for our offerings.
    //   </p>

    //   {/* Table Wrapper for Responsiveness */}
    //   <div className="overflow-x-auto">
    //     <table className="w-full border-collapse border text-center">
    //       {/* Table Head */}
    //       <thead>
    //         <tr className="bg-gray-600 text-white">
    //           <th className="px-4 py-3 border">Dimension</th>
    //           <th className="px-4 py-3 border">Rate per Sqft</th>
    //           <th className="px-4 py-3 border">Total Amount</th>
    //           <th className="px-4 py-3 border">
    //             Down Payment
    //             <br />
    //             30%
    //           </th>
    //           <th className="px-4 py-3 border">
    //             First Installment
    //             <br />
    //             30%
    //           </th>
    //           <th className="px-4 py-3 border">
    //             Second Installment
    //             <br />
    //             20%
    //           </th>
    //           <th className="px-4 py-3 border">
    //             Third Installment
    //             <br />
    //             20%
    //           </th>
    //         </tr>
    //       </thead>

    //       {/* Table Body */}
    //       <tbody className="text-gray-900 font-medium">
    //         <tr>
    //           <td className="border px-4 py-3">30x40</td>
    //           <td className="border px-4 py-3">1399/-</td>
    //           <td className="border px-4 py-3">16,78,800/-</td>
    //           <td className="border px-4 py-3">5,03,640/-</td>
    //           <td className="border px-4 py-3">5,03,640/-</td>
    //           <td className="border px-4 py-3">3,35,760/-</td>
    //           <td className="border px-4 py-3">3,35,760/-</td>
    //         </tr>
    //         <tr>
    //           <td className="border px-4 py-3">30x50</td>
    //           <td className="border px-4 py-3">1399/-</td>
    //           <td className="border px-4 py-3">20,98,500/-</td>
    //           <td className="border px-4 py-3">6,29,550/-</td>
    //           <td className="border px-4 py-3">6,29,550/-</td>
    //           <td className="border px-4 py-3">4,19,700/-</td>
    //           <td className="border px-4 py-3">4,19,700/-</td>
    //         </tr>
    //         <tr>
    //           <td className="border px-4 py-3">40x60</td>
    //           <td className="border px-4 py-3">1399/-</td>
    //           <td className="border px-4 py-3">33,37,600/-</td>
    //           <td className="border px-4 py-3">10,07,280/-</td>
    //           <td className="border px-4 py-3">10,07,280/-</td>
    //           <td className="border px-4 py-3">6,71,520/-</td>
    //           <td className="border px-4 py-3">6,71,520/-</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //   </div>
    // </div>
    <div className="px-4 md:pl-20 md:pr-20 py-12 bg-gray-50">
  {/* Title Section */}
  <h2 className="text-3xl font-bold text-center text-[#24447c] mb-2">
    Price Chart
  </h2>
  <p className="italic items-center flex m-auto justify-center mb-8 text-justify text-base/loose">
    Explore our comprehensive Price Chart to gain insights into the cost
    structure and pricing details for our offerings.
  </p>

  {/* Table Wrapper */}
  <div className="overflow-x-auto">
    <table className="w-full border-collapse border text-center">
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

      <tbody className="text-gray-900 font-medium">
        <tr>
          <td className="border px-4 py-3">30x40</td>
          <td className="border px-4 py-3">1699/-</td>
          <td className="border px-4 py-3">20,38,800/-</td>
          <td className="border px-4 py-3">6,11,640/-</td>
          <td className="border px-4 py-3">6,11,640/-</td>
          <td className="border px-4 py-3">4,07,760/-</td>
          <td className="border px-4 py-3">4,07,760/-</td>
        </tr>
        <tr>
          <td className="border px-4 py-3">30x50</td>
          <td className="border px-4 py-3">1699/-</td>
          <td className="border px-4 py-3">25,48,500/-</td>
          <td className="border px-4 py-3">7,64,550/-</td>
          <td className="border px-4 py-3">7,64,550/-</td>
          <td className="border px-4 py-3">5,09,700/-</td>
          <td className="border px-4 py-3">5,09,700/-</td>
        </tr>
        <tr>
          <td className="border px-4 py-3">40x60</td>
          <td className="border px-4 py-3">1699/-</td>
          <td className="border px-4 py-3">40,77,600/-</td>
          <td className="border px-4 py-3">12,23,280/-</td>
          <td className="border px-4 py-3">12,23,280/-</td>
          <td className="border px-4 py-3">8,15,520/-</td>
          <td className="border px-4 py-3">8,15,520/-</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  );
};

export default PriceChart;

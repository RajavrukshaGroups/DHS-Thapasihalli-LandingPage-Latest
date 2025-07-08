import React from 'react'
import Landscape from "../../assets/prairie_14263799.gif"
import School from "../../assets/school_17518049.gif";
import CcTv from "../../assets/camera.gif";
import Electricity from "../../assets/electric-tower.gif";
import WaterConnection from "../../assets/sink.gif";
import OverHeadTank from "../../assets/water-tower.gif"
import SeavageLine from "../../assets/waste.gif";
import SwimmingPool from "../../assets/swimmer (1).gif";
import ChildrenPlayArea from "../../assets/seesaw_13936783.gif"

function Amenities() {
  return (
    <>
      {/* <h1 className='justify-center text-3xl font-semibold items-center flex p-7'>MODERN AMENITIES</h1> */}
      <h1 className='text-3xl font-bold text-center text-[#24447c] mb-2 p-7'>Modern Amenities</h1>
    
      <div className="pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 sm:px-24 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full p- rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 mb-">
            <img 
              src={Landscape} 
              alt="Landscaped Gardens" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Landscaped Gardens and Green Spaces</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 h-40  flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={School}
              alt="Clubhouse" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Clubhouse with recreational facilities</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={SwimmingPool} 
              alt="Swimming Pool" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Swimming pool</h3>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={ChildrenPlayArea} 
              alt="Play Area" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Children's play area and community parks</h3>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={CcTv} 
              alt="CCTV" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">24/7 CCTV Surveillance</h3>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={Electricity}
              alt="Electrical Supply" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Electrical Supply Lines</h3>
        </div>

        {/* Card 7 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={WaterConnection} 
              alt="Water Connection" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Individual Water connection</h3>
        </div>

        {/* Card 8 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={OverHeadTank} 
              alt="Overhead Tank" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Overhead Tank</h3>
        </div>

        {/* Card 9 */}
        <div className="bg-gray-50 h-40 flex flex-col items-center w-full  rounded-3xl shadow-[2px_2px_8px_rgba(0,0,0,0.15),-3px_-3px_10px_rgba(0,0,0,0.1)] transition-transform duration-400 hover:scale-[0.98] hover:shadow-[1px_1px_5px_1px_rgba(0,0,0,0.15),-3px_-3px_10px_3px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="w-24 h-24 ">
            <img 
              src={SeavageLine} 
              alt="Sewage Lines" 
              loading="lazy"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-center hover:text-[#3c5c96]">Sewage lines</h3>
        </div>
      </div>
    </>
  )
}

export default Amenities
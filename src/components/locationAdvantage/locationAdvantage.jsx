import { 
  FaRoad, 
  FaPlane, 
  FaIndustry, 
  FaBuilding, 
  FaCity, 
  FaHospitalAlt 
} from "react-icons/fa";

const CardComponent = () => {
  return (
    <div className="w-full px-4 py-[10px] font-['Ubuntu'] flex flex-wrap justify-center gap-4 lg:px-32 xl:px-64">
      {/* Card 1 */}
      <div className="p-5 rounded-[15px] bg-white w-full md:w-[48%] lg:w-[45%] min-h-[130px] text-gray-500 my-[15px] shadow-[3px_4px_8px_2px_rgba(0,0,0,0.5)] flex items-center gap-[30px] hover:[&>svg]:bg-[#00a3cc] hover:[&>svg]:text-white hover:[&>strong]:text-[#00a3cc]">
        <FaRoad className="border border-current bg-white text-[#00a3cc] rounded-full flex items-center justify-center h-[70px] w-[70px] text-[38px] transition-colors duration-300 p-3" />
        <div className="flex flex-col gap-[18px] basis-[70%]">
          <strong className="text-[#333] font-bold text-[18px]">Close to 4-lane State Highway (SH-09)</strong>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-5 rounded-[15px] bg-white w-full md:w-[48%] lg:w-[45%] min-h-[130px] text-gray-500 my-[15px] shadow-[3px_4px_8px_2px_rgba(0,0,0,0.5)] flex items-center gap-[30px] hover:[&>svg]:bg-[#00a3cc] hover:[&>svg]:text-white hover:[&>strong]:text-[#00a3cc]">
        <FaPlane className="border border-current bg-white text-[#00a3cc] rounded-full flex items-center justify-center h-[70px] w-[70px] text-[38px] transition-colors duration-300 p-3" />
        <div className="flex flex-col gap-[18px] basis-[70%]">
          <strong className="text-[#333] font-bold text-[18px]">Bangalore Airport is just @ 20-minute drive away</strong>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-5 rounded-[15px] bg-white w-full md:w-[48%] lg:w-[45%] min-h-[130px] text-gray-500 my-[15px] shadow-[3px_4px_8px_2px_rgba(0,0,0,0.5)] flex items-center gap-[30px] hover:[&>svg]:bg-[#00a3cc] hover:[&>svg]:text-white hover:[&>strong]:text-[#00a3cc]">
        <FaIndustry className="border border-current bg-white text-[#00a3cc] rounded-full flex items-center justify-center h-[70px] w-[70px] text-[38px] transition-colors duration-300 p-3" />
        <div className="flex flex-col gap-[18px] basis-[70%]">
          <strong className="text-[#333] font-bold text-[18px]">Close to Doddaballapura KIADB Industrial area.</strong>
        </div>
      </div>

      {/* Card 4 */}
      <div className="p-5 rounded-[15px] bg-white w-full md:w-[48%] lg:w-[45%] min-h-[130px] text-gray-500 my-[15px] shadow-[3px_4px_8px_2px_rgba(0,0,0,0.5)] flex items-center gap-[30px] hover:[&>svg]:bg-[#00a3cc] hover:[&>svg]:text-white hover:[&>strong]:text-[#00a3cc]">
        <FaBuilding className="border border-current bg-white text-[#00a3cc] rounded-full flex items-center justify-center h-[70px] w-[70px] text-[38px] transition-colors duration-300 p-3" />
        <div className="flex flex-col gap-[18px] basis-[70%]">
          <strong className="text-[#333] font-bold text-[18px]">Near 10,000 acres of ITIR/SEZ and 1,000 acres of Aerospace Hardware Park</strong>
        </div>
      </div>

      {/* Card 5 */}
      <div className="p-5 rounded-[15px] bg-white w-full md:w-[48%] lg:w-[45%] min-h-[130px] text-gray-500 my-[15px] shadow-[3px_4px_8px_2px_rgba(0,0,0,0.5)] flex items-center gap-[30px] hover:[&>svg]:bg-[#00a3cc] hover:[&>svg]:text-white hover:[&>strong]:text-[#00a3cc]">
        <FaCity className="border border-current bg-white text-[#00a3cc] rounded-full flex items-center justify-center h-[70px] w-[70px] text-[38px] transition-colors duration-300 p-3" />
        <div className="flex flex-col gap-[18px] basis-[70%]">
          <strong className="text-[#333] font-bold text-[18px]">Close to Upcoming KHIR City Project</strong>
        </div>
      </div>

      {/* Card 6 */}
      <div className="p-5 rounded-[15px] bg-white w-full md:w-[48%] lg:w-[45%] min-h-[130px] text-gray-500 my-[15px] shadow-[3px_4px_8px_2px_rgba(0,0,0,0.5)] flex items-center gap-[30px] hover:[&>svg]:bg-[#00a3cc] hover:[&>svg]:text-white hover:[&>strong]:text-[#00a3cc]">
        <FaHospitalAlt className="border border-current bg-white text-[#00a3cc] rounded-full flex items-center justify-center h-[70px] w-[70px] text-[38px] transition-colors duration-300 p-3" />
        <div className="flex flex-col gap-[18px] basis-[70%]">
          <strong className="text-[#333] font-bold text-[18px]">Near to New Manipal Hospital & Seven Hills Hospital</strong>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
const ProjectOverview = () => {
  return (
    <div className="w-full pt-5">
      {/* Top Gray Header */}
      <div className=" bg-[rgba(0,0,0,0.6)] text-white text-center py-4 px-2">
        <h2 className="text-lg md:text-xl font-semibold">North-Bangalore</h2>
        <p className="text-sm md:text-base font-bold mt-1">
          An exceptional residential layout in North Bangalore, blending modern living with tranquil surroundings
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px]  mx-auto py-5 px-5 text-gray-800 space-y-3">
        {/* Welcome Paragraph */}
        <p className="italic text-justify text-base/loose">
          Welcome to Defence Habitat Tapasihalli, an exceptional residential layout project located in the rapidly developing area of North Bangalore. Designed to meet the needs of modern living, our project offers an ideal blend of tranquility and connectivity, making it the perfect choice for discerning homebuyers and investors alike.
        </p>

        {/* Prime Location */}
        <div>
          <h3 className="text-3xl font-semibold mb-3  flex justify-center items-center">Prime Location</h3>
          <p className="italic text-justify text-base/loose">
            Situated in North Bangalore, Defence Habitat Tapasihalli is strategically positioned in close proximity to the airport, upcoming 10,000 acres of ITIR/SEZ projects, and KIADB areas, ensuring a thriving economic environment. This location not only provides convenient access to workplaces but also promises a significant appreciation in property value, making it a lucrative investment for the future.
          </p>
        </div>

        {/* Unmatched Connectivity */}
        <div>
          <h3 className="text-3xl font-semibold mb-3 flex items-center justify-center">Unmatched Connectivity</h3>
          <p className="italic text-justify text-base/loose">
            Our project boasts excellent connectivity to key areas of Bangalore. With well-developed roads and upcoming infrastructure projects, residents can enjoy seamless travel to the city center, airports, educational institutions, healthcare facilities, and shopping destinations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;

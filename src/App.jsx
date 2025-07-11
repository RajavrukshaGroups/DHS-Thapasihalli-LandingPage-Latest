import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import Banner from "./assets/GJGD.jpg";
import ProjectOverview from "./components/projectOverview/projectOverview";
import LocationAdvantage from "./components/locationAdvantage/locationAdvantage";
import Amenities from "./components/amenities/amenities";
import PriceChart from "./components/PriceChart.jsx/priceChart";
import Footer from "./components/footer/footer";
import ContactForm from "./components/contactForm/contactForm";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import ContactFormPopup from './components/contactFormPopup';
function App() {
  // console.log()
  return (
    <>
      <Helmet>
        <title>
          Plots for Sale in Tapasihalli | Defence Habitat, North Bangalore
        </title>
        <meta
          name="description"
          content="Explore premium residential plots for sale in Tapasihalli. BMRDA/DPA-approved, ideal for defence personnel, investors & families. Close to Doddaballapur & KIA."
        />
        <meta
          name="keywords"
          content="Plots for sale in Tapasihalli, residential plots in North Bangalore, defence housing plots in Bangalore, Doddaballapur plots, investment plots near Bangalore airport, plots near Kempegowda airport, weekend home plots near Bangalore, organic farming plots in Bangalore, defence personnel plots, gated community plots, North Bangalore real estate"
        />

        <link
          rel="canonical"
          href="https://defencehabitat-tapasihalli.defencehousingsociety.com/"
        />
        <meta
          property="og:title"
          content="Plots for Sale in Tapasihalli | Defence Habitat"
        />
        <meta
          property="og:description"
          content="Own your dream plot in Tapasihalli, North Bangalore. Gated community, BMRDA/DPA approved, near Kempegowda Airport."
        />
        <meta
          property="og:image"
          content="https://defencehabitat-tapasihalli.defencehousingsociety.com/preview.jpg"
        />
        <meta
          property="og:url"
          content="https://defencehabitat-tapasihalli.defencehousingsociety.com"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Defence Housing Society",
              "url": "https://defencehabitat-tapasihalli.defencehousingsociety.com",
              "logo": "https://defencehabitat-tapasihalli.defencehousingsociety.com/preview.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Behind Swathi Gardenia Restaurant, Sahakarnagar",
                "addressLocality": "Bangalore",
                "postalCode": "560092",
                "addressCountry": "IN"
              },
              "description": "Residential plots for sale in Tapasihalli. BMRDA/DPA approved. Close to KIA and Doddaballapur.",
              "areaServed": {
                "@type": "Place",
                "name": "North Bangalore"
              }
            }
          `}
        </script>
      </Helmet>
      <Toaster position="top-right" reverseOrder={false} />
      <ContactFormPopup/>
      <Header />
      <div className="pt-28 md:pt-0 w-full relative">
        {/* Image */}
        <img src={Banner} alt="banner_logo" className="w-full h-auto" />
        {/* Overlay with light transparent background */}
        <div className="absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,0.6)] py-10 text-center">
          <p className="text-white text-xl md:text-4xl font-semibold drop-shadow-md">
            Defence Habitat - Tapasihalli
          </p>
        </div>
      </div>
      <ProjectOverview />
      <LocationAdvantage />

      <Amenities />
      <div className="max-w-[1200px] mx-auto py-5 px-5">
        <h2 className="text-3xl font-bold text-center text-[#24447c] mb-2">
          Community and Lifestyle
        </h2>
        <p className=" italic text-justify  text-1xl text-base/loose">
          We believe in fostering a sense of community and belonging. Defence
          Habitat offers a vibrant and inclusive environment where residents can
          enjoy a fulfilling lifestyle, engage in community events, and reside
          in a safe and secure neighborhood.
        </p>
      </div>
      <PriceChart />
      <div className="max-w-[1200px] mx-auto py-5 px-5">
        <h2 className="text-3xl font-bold text-center text-[#24447c] mb-2">
          Conclusion
        </h2>
        <p className="italic text-justify  text-1xl text-base/loose">
          Experience the perfect harmony of urban convenience and serene living
          at Defence Habitat. Whether you are looking to build your dream home
          or seeking a promising investment opportunity, our residential layout
          project in North Bangalore is your gateway to a prosperous future.
          Join us and be a part of this thriving community today.
        </p>
      </div>
      <h2 className="text-3xl font-bold text-center text-[#24447c] mb-2">
        Contact US
      </h2>
      <div className="max-w-[1400px]  m-auto items-center justify-center flex py-5 px-4">
        <iframe
          width="1200px"
          height="290px"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?q=Defence%20Habitat%20Housing%20Co-operative%20Society%2C%20behind%20Swathi%20Gardenia%20Restaurant%2C%20Sahakar%20Nagar%2C%20Byatarayanapura%2C%20Bengaluru%2C%20Karnataka%20560092&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        ></iframe>
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import ContactInformationCard from "./ContactInformationCard";

const OfficeBanner = () => {
    return (
        <section className="px-6 lg:px-20 py-24">
           <h3 className="font-bold text-[44px] text-center">Come stop by our office sometime</h3>
  
           <div className="mt-16 relative">
              <img src="https://picsum.photos/1000/1000" alt="Office image" className="w-full h-[500px] object-cover"/>
              <div className="absolute sm:bottom-12 sm:left-8 bottom-4 left-4">
                 <ContactInformationCard />
              </div>
           </div>
        </section>
     )
}

export default OfficeBanner;
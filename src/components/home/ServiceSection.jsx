import React from "react";
import PenToolIcon from "../../assets/icons/PenToolIcon";
import ResearchIcon from "../../assets/icons/ResearchIcon";
import BagIcon from "../../assets/icons/BagIcon";
import Codeicon from "../../assets/icons/CodeIcon";

function ServiceSection() {
    return (
        <section className="py-20 md:px-20 lg:px-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-y-8 md:space-y-0">
                <div className="flex flex-col items-center space-y-6">
                    <PenToolIcon />
                    <h2 className="font-bold text-lg text-center">EXCEPTIONAL DESIGN</h2>
                </div>
                <div className="flex flex-col items-center space-y-6">
                    <ResearchIcon />
                    <h2 className="font-bold text-lg text-center">IN-DEPTH RESEARCH</h2>
                </div>
                <div className="flex flex-col items-center space-y-6">
                    <BagIcon />
                    <h2 className="font-bold text-lg text-center">PRODUCT MANAGEMENT</h2>
                </div>
                <div className="flex flex-col items-center space-y-6">
                    <Codeicon />
                    <h2 className="font-bold text-lg text-center">NO-CODE DEVELOPMENT</h2>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
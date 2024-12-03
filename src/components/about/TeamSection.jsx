import React from "react";
import TeamCard from "./TeamCard";

const TeamSection = () => {
    return (
        <section className="py-36 px-6 md:px-16">
            <h2 className="font-bold text-4xl text-center mx-auto">Meet the heroes behind the magic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mt-16">
                <TeamCard />
                <TeamCard />
                <TeamCard />
            </div>
        </section>
    )
}
1
export default TeamSection;
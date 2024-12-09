import React from "react";
import TeamCard from "./TeamCard";
import { useFetchData } from "../../hooks/useFetchData";

const TeamSection = () => {

  const { data: teams, loading, error } = useFetchData(`/teams?usernames[0]=brooklynsimmons&usernames[1]=codyfisher&usernames[2]=esterhoward`);
  if (loading) return <p>Loading...</p>;
  if (loading)
    return <p>Error: {error}</p>;

  return (
    <section className="py-36 px-6 md:px-16">
      <h2 className="font-bold text-4xl text-center mx-auto">
        Meet the heroes behind the magic
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 mt-16">
        {teams.data.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </section>
  );
};
1;
export default TeamSection;

import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";

function TeamCard() {
  return (
    <div>
      <div className="bg-white shadow-md p-4">
        <img
          src="https://picsum.photos/200/200"
          alt="team member"
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        <div className="my-6 space-y-2">
          <h3 className="font-bold text-2xl">John Doe</h3>
          <p className="text-gray-500">CEO</p>
        </div>
        <div className="flex flex-row space-x-8">
          <a
            herf="#"
            rel="noopener noreferrer"
            className="text-gray-500 font-semibold cursor-pointer"
          >
            INSTAGRAM
            <ArrowUpRightIcon className="h-4 w-4 inline-block ml-2" />
          </a>
          <a
            herf="#"
            rel="noopener noreferrer"
            className="text-gray-500 font-semibold cursor-pointer"
          >
            LINKEDIN
            <ArrowUpRightIcon className="h-4 w-4 inline-block ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;

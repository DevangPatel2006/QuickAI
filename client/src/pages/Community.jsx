import React, { useEffect, useState } from "react";
import { dummyPublishedCreationData } from "../assets/assets";
import { useUser } from "@clerk/clerk-react";
import { Heart } from "lucide-react";

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-xl font-semibold">Creations</h1>

      <div className="bg-white w-full rounded-xl overflow-y-scroll flex flex-wrap">
        {creations.map((creation, index) => (
          <div
            key={index}
            className="p-3 w-full sm:w-1/2 lg:w-1/3 group"
          >
            {/* Image wrapper with overlay */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <img
                src={creation.content}
                alt="creation"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay appears on hover */}
              <div className="absolute inset-0 bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-3 rounded-lg">
                {/* Prompt */}
                <p className="text-sm">{creation.prompt}</p>

                {/* Likes */}
                <div className="flex justify-end items-center gap-1">
                  <p>{creation.likes.length}</p>
                  <Heart
                    className={`w-5 h-5 hover:scale-110 cursor-pointer ${
                      creation.likes.includes(user.id)
                        ? "fill-red-500 text-red-600"
                        : "text-white"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;

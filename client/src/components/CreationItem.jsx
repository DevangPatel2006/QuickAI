import React, { useState } from "react";
import Markdown from "react-markdown";
const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="font-medium text-slate-900">{item.prompt}</h2>
          <p className="text-gray-500">
            {item.type} - {new Date(item.created_at).toLocaleDateString()}
          </p>
        </div>
        <button
          className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full"
          onClick={(e) => {
            e.stopPropagation(); // prevents the div's onClick from triggering
            setExpanded(!expanded);
          }}
        >
          {item.type}
        </button>
      </div>

      {expanded && (
        <div className="mt-3">
          {item.type === "image" ? (
            <img
              src={item.content}
              alt="generated content"
              className="w-full max-w-md rounded"
            />
          ) : (
            <div className="h-full overflow-y-auto text-sm text-slate-700 whitespace-pre-wrap">
              <div className="reset-tw">
                {" "}
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;

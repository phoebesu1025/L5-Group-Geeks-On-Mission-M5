import React from "react";

const LinkListsFooter = ({ heading, lists }) => {
  return (
    <div
      className={`link-list-footer h-20 ${
        (heading === "Investments" || heading === "Meet Our Team") &&
        "mt-[-4rem]"
      }`}
    >
      <h1 className=" text-footerWhite font-bold">{heading}</h1>
      <ul className="text-paragraph leading-6 mb-10">
        {lists.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
    </div>
  );
};

export default LinkListsFooter;

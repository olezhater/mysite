import React from "react";

const WorkCard = ({ img, name, description, onClick, isHomepage, alt }) => {
  const truncatedDescription = description?.length > 160 ? `${description.slice(0, 160)}...` : description;

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={alt}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name ? name : "Project Name"}
      </h1>
      {isHomepage ? (
        <h2 className="text-xl opacity-50 line-clamp-2">
          {truncatedDescription ? truncatedDescription : "Description"}
        </h2>
      ) : (
        <h2 className="text-xl opacity-50">
          {description ? description : "Description"}
        </h2>
      )}
    </div>
  );
};

export default WorkCard;

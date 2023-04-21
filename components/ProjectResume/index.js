import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
return (
<div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
<div className="text-lg w-2/5">
<h2>{dates}</h2>
<h3 className="text-sm opacity-50">{type}</h3>
</div>
<div className="w-3/5">
<h2 className="text-lg font-bold">{position}</h2>
{bullets && (
<p className="text-sm my-1 opacity-70">
{bullets}
</p>
)}
</div>
</div>
);
};

export default ProjectResume;
import React from "react";

const BGshape = ({top}) => {
  return <div className={`h-32 w-full bg-repeat-x bg-[url(/bg-shape.svg)] bg-contain bg-bottom ${top? 'rotate-180 ':''}`} />;
};

export default BGshape;

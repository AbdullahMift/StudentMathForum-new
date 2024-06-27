import React from "react";

type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <div className="flex items-center px-8 pt-4">
      <h1 className=" font-semibold sm:text-2xl text-3xl">{title}</h1>
    </div>
  );
};

export default PageTitle;

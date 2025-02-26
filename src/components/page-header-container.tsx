import React from "react";

interface PageHeaderContainerProps {
  title: string;
  description: string;
  components?: React.ReactNode;
}

const PageHeaderContainer = ({
  title,
  description,
  components,
}: PageHeaderContainerProps) => {
  return (
    <div className="min-h-20 flex justify-between items-center pr-2 flex-wrap gap-2 sm:flex-nowrap sm:gap-0">
      <div>
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex justify-end w-full sm:w-auto">{components}</div>
    </div>
  );
};

export default PageHeaderContainer;

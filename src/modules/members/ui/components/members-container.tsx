import React from "react";
import MembersTable from "./members-table";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MembersContainer = ({ slug }: { slug?: string }) => {

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center">
        
      </div>
      <MembersTable />
    </div>
  );
};

export default MembersContainer;

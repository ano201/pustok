import React from "react";
import AddABook from "../../components/Dashboard/AddABook";
import Dashbar from "../../components/Dashboard/Dashbar";

const addABook = () => {
  return (
    <div className="pt-14">
      <Dashbar></Dashbar>
      <h1 className="text-center mt-4 text-xl">Add a Book</h1>
      <AddABook></AddABook>
    </div>
  );
};

export default addABook;

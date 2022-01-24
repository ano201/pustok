import Dashbar from "../../components/Dashboard/Dashbar";
import AddAWriter from '../../components/Dashboard/AddAWriter';

const addAWriter = () => {
  

  return (
    <div className="pt-14">
      <Dashbar></Dashbar>
      <h1 className="text-center mt-4 text-xl">Add a Writer</h1>
      <AddAWriter></AddAWriter>
    </div>
  );
};

export default addAWriter;

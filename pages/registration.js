import Registration from "../components/Sequre/Registration";

const registration = () => {
  return (
    <div className="pt-14 w-full h-screen flex justify-center items-center flex-col">
      <h1 className="my-4">Please fill this form to complete registration</h1>
      <Registration></Registration>
    </div>
  );
};

export default registration;

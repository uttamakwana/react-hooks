import { useId } from "react";

const EmailForm = () => {
  //does: this 'id' will be unique wherever you will use and will persist between re-renders
  //! it can be useable in the scenarios where you have multiple form input elements and used to send the data in the server
  const id = useId();

  return (
    <div className="| flex-col gap-4 w-100">
      <label htmlFor={id} className="block">
        Email:
      </label>
      <input
        type="email"
        id={id}
        className="| input bg-white-700 w-100"
        placeholder="abc@email.com"
      />
    </div>
  );
};

export default EmailForm;

import React, { useState, useEffect } from "react";
import "./Form.css";

function Form(props) {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [MiddleName, setMiddleName] = useState("");
  const [FirstNameIsValid, setFirstNameIsValid] = useState(null);
  const [LastNameIsValid, setLastNameIsValid] = useState(null);
  const [MiddleNameIsValid, setMiddleNameIsValid] = useState(null);
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(FirstNameIsValid && LastNameIsValid && MiddleNameIsValid);
  }, [FirstNameIsValid, LastNameIsValid, MiddleNameIsValid]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log({ FirstName, LastName, MiddleName });
      props.onAddMember({
        FirstName,
        LastName,
        MiddleName,
      });
      setFirstName("");
      setLastName("");
      setMiddleName("");
    } else {
      alert("Form tidak valid");
    }
  };

  const changeFirstNameHandler = (event) => {
    setFirstNameIsValid(event.target.value.trim().length > 0);
    setFirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setLastNameIsValid(event.target.value.trim().length > 0);
    setLastName(event.target.value);
  };

  const changeMiddleNameHandler = (event) => {
    setMiddleNameIsValid(event.target.value.trim().length > 0);
    setMiddleName(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="FirstName">First Name</label>
      <input className={FirstNameIsValid === false ? "invalid" : ""} autoComplete="off" type="text" id="FirstName" name="FirstName" value={FirstName} onChange={changeFirstNameHandler} onBlur={changeFirstNameHandler} />
      <label htmlFor="LastName">Last Name</label>
      <input className={LastNameIsValid === false ? "invalid" : ""} autoComplete="off" type="text" id="LastName" name="LastName" value={LastName} onChange={changeLastNameHandler} onBlur={changeLastNameHandler} />
      <label htmlFor="MiddleName">Middle Name</label>
      <input className={MiddleNameIsValid === false ? "invalid" : ""} autoComplete="off" type="text" id="MiddleName" name="MiddleName" value={MiddleName} onChange={changeMiddleNameHandler} onBlur={changeMiddleNameHandler} />
      <button type="submit">Add Member</button>
    </form>
  );
}

export default Form;

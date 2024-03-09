import React, { useState } from "react";
import Button from "./Button";

function Learner({ news }) {
  const [description, setDescription] = useState("");
  const [clickedIndex, setClickedIndex] = useState(null);
  const [alert, setAlert] = useState('');
  const newtext = () => {
    "Hi iam learning react and redux";
  };
  const oldText = () => {
    " i know html and css and javascript basics";
  };

  const topics = [
    {
      title: "Click to Learn",
      discription: "BBHFGUDDbgbasv hsyv b bn anv Learn",
      alert: "hello learner !!!!",
    },
    {
      title: "Click to test",
      discription: "BBHFGUDDbgbasv hsyv b bn anv test",
      alert: "hello tester !!!!",
    },
    {
      title: "Click to write",
      discription: "BBHFGUDDbgbasv hsyv b bn anv write",
      alert: "hello writer !!!!",
    },
    {
      title: "Click to code",
      discription: "BBHFGUDDbgbasv hsyv b bn anv code",
      alert: "hello coder !!!!",
    },
  ];

  const alertme = (index) => {
    setDescription(topics[index].discription);
    setClickedIndex(index);
    setAlert(topics[index].alert);
    console.log();
  };

  let learner = true;
  return (
    <>
      {learner ? newtext() : oldText()}
      <p>{news}</p>
      {topics.map((item, index) => (
        <ul key={index}>
          <Button alertme={() => alertme(index)}>{item.title}</Button>
          {clickedIndex === index && (<><p>{description}</p><h5>{alert}</h5></>)}
        </ul>
      ))}
    </>
  );
}

export default Learner;

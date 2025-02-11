import React, { useState } from "react";
import gif from '../assets/awh.gif'

const ButtonTest = () => {
  const [selectedNo, setSelectedNo] = useState(false);
  const [sizeRange, setSizeRange] = useState(80);
  const [selectYes,setSelectYes] = useState(false)
  const [question,setQuestion] = useState('Will you be my Valentaine?')
  return (
    <>
      <div className="main-div">
        <h1>{question}</h1>
        <button
          type="button"
          className="btn btn-primary"
          style={selectedNo ? { padding: sizeRange, fontSize: sizeRange } : {}}
          onClick={()=>{setSelectYes(true);setSizeRange(10);setQuestion('Awhhh! Stop youu♥♥♥')}}
        >
          Yes
        </button>
        <button
          type="button"
          className="btn btn-danger no-btn"
          style={sizeRange>300 || sizeRange==10 ? {visibility:'hidden'}:{}}
          onClick={() => {
            setSelectedNo(true);
            setSizeRange(sizeRange + 100);
            setQuestion('Wait! You want to be mine valentaine?')
          }}
        >
          No
        </button>
        {selectYes && <img src={gif} alt="awh-gif" style={{ width: 500, height: 500 }} />}
      </div>
    </>
  );
};

export default ButtonTest;

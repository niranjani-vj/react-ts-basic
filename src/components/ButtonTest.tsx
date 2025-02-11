import React, { useState } from "react";
import gif from '../assets/awh.gif'

const ButtonTest = () => {
  const [selectedNo, setSelectedNo] = useState(false);
  const [sizeRange, setSizeRange] = useState(80);
  const [selectYes,setSelectYes] = useState(false)
  return (
    <>
      <div className="main-div">
        <h1>Will you be my Valentaine?</h1>
        <button
          type="button"
          className="btn btn-primary"
          style={selectedNo ? { padding: sizeRange, fontSize: sizeRange } : {}}
          onClick={()=>{setSelectYes(true),setSizeRange(10)}}
        >
          Yes
        </button>
        <button
          type="button"
          className="btn btn-danger"
          style={sizeRange>300 || sizeRange==10 ? {visibility:'hidden'}:{}}
          onClick={() => {
            setSelectedNo(true);
            setSizeRange(sizeRange + 100);
          }}
        >
          No
        </button>
        <img src={gif} alt="awh-gif" style={selectYes?{visibility:'visible',width:500,height:500}:{visibility:'hidden'}}/>
      </div>
    </>
  );
};

export default ButtonTest;

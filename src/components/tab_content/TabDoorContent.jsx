import React from "react";
import TabOneImg from "./../../images/tab-1-pic.png";
import styled from "styled-components";

const TabDoorContent = () => {
  return (
    <div className="container">
      <div className="tab-content">
        <span>
          If you decide Netflix isn't for you - no problem. No commitment.
          Cancel online anytime.
        </span>
        <br />
        <button>try it now</button>
        <img src={TabOneImg} alt="" />
      </div>
    </div>
  );
};

export default TabDoorContent;

const TabContentContainer = styled.div`
background: var(--main-deep-dark);
img {
    width: 31.875rem;
}

.tab-content {
    display: grid,
    grid-template-columns: repeat(2, 1fr);
    grip-gap: 2rem;
    align-items: center;
    font-size: 2rem;
    padding: 2.5rem;
}
`;

import React, { useState } from "react";
import PropTypes from "prop-types";
import './styles.css'
import useHover from './helpers';

const defaults = {
  height: "150px",
  width: "150px",
  borderRadius: "6px",
  border: "1px solid #969696",
  margin: "2px",
  cursor: "pointer"
}

const Box = (props) => {
  const [hoverRef, isHovered] = useHover(); 
  const [isActive, setActive] = useState(null);
  const [status, setStatus] = useState(false);

  let handleClick = () => {
    const newStatus = !status;
    setStatus(newStatus);
    props.control(newStatus, props.grid);

    isActive === null ? setActive('ACTIVE') 
      : setActive(null)    
  }

  return (           
    <div 
      ref={hoverRef} 
      className={isActive}
      style={defaults}
      onClick={handleClick}
      grid={props.grid}
      id={props.grid}
    ></div>    
  );
};

Box.propTypes = {
  grid: PropTypes.number,
};

export default Box;
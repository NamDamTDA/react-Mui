import React from "react";
import PropTypes from "prop-types";

const HobbyList = (props) => {
  const { hobbyList } = props;
  return (
    <div>
      <ul>
        {hobbyList.map((hobby) => (
          <li key={hobby.id}>{hobby.title}</li>
        ))}
      </ul>
    </div>
  );
};

HobbyList.propTypes = {
  hobbyList: PropTypes.array,
};

export default HobbyList;

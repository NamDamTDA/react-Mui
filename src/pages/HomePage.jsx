import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList";
HomePage.propTypes = {};
const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};
function HomePage(props) {
  const hobbyList = useSelector((state) => state.hobby.list);
  const dispatch = useDispatch();
  const handleAddHobbyClick = () => {
    //random obj
    const newID = randomNumber();
    const newHobby = {
      //   id: casual.uuid,
      //   title: casual.title,
      id: newID,
      title: `Hobby ${newID}`,
    };
    //Dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAddHobbyClick}>Random Hobby</button>
      <HobbyList hobbyList={hobbyList}></HobbyList>
    </div>
  );
}
export default HomePage;

import React from "react";

const GroupsData = [
  {
    id: 1,
    age: 25,
    race: "Asian",
    height: "5'7\"",
    country: "Japan",
  },
  {
    id: 2,
    age: 30,
    race: "Black",
    height: "6'1\"",
    country: "USA",
  },
  {
    id: 3,
    age: 22,
    race: "White",
    height: "5'9\"",
    country: "Germany",
  },
  {
    id: 4,
    age: 28,
    race: "Latino",
    height: "5'10\"",
    country: "Brazil",
  },
  {
    id: 5,
    age: 26,
    race: "Middle Eastern",
    height: "6'0\"",
    country: "Egypt",
  },

  {
    id: 6,
    age: 33,
    race: "Yoruba",
    height: "6'0\"",
    country: "Nigeria",
  },
];

const Groups = () => {
  return (
    <div className="cliff">
      {GroupsData.map((model) => {
        return <Models key={model.id} {...model} />;
      })}
    </div>
  );
};

const Models = ({ age, race, height, country }) => {
  return (
    <div className="dress">
      <h1> {age} </h1>
      <h3> {race} </h3>
      <h2> {height} </h2>
      <h1> {country} </h1>
    </div>
  );
};

export default Groups;

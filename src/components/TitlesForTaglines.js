import React from "react";

const TitlesForTaglines = ({ fetching, data, error, textInput }) => {
  if (error) {
    return (
      <>
        <p>Error</p>
        <code>{JSON.stringify(error, null, 2)}</code>
      </>
    );
  }

  if (fetching) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <h3>{textInput ? textInput : "e.g. Stella"}</h3>
      <code>{data && data[0].tagline}</code>
    </>
  );
};

export default TitlesForTaglines;

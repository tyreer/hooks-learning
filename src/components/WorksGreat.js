import React from "react";
import { useQuery } from "./Query";
import TitlesForTaglines from "./TitlesForTaglines";

const WorksGreat = ({ textInput }) => {
  const { fetching, data, error } = useQuery({
    url: `https://api.punkapi.com/v2/beers/random`,
    init: {
      method: "GET",
    },
  });
  return (
    <section>
      <h2>Works Great</h2>
      <TitlesForTaglines
        fetching={fetching}
        data={data}
        error={error}
        textInput={textInput}
      />
    </section>
  );
};

export default WorksGreat;

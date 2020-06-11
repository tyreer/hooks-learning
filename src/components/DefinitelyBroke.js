import React from "react";
import BrokeQuery from "./BrokeQuery";
import TitlesForTaglines from "./TitlesForTaglines";

const DefinitelyBroke = ({ textInput }) => {
  return (
    <section>
      <h2>Definitely Broke</h2>
      <BrokeQuery
        query={{
          url: `https://api.punkapi.com/v2/beers/random`,
          init: {
            init: {
              method: "GET",
            },
          },
        }}
      >
        {({ fetching, data, error }) => (
          <TitlesForTaglines
            fetching={fetching}
            data={data}
            error={error}
            textInput={textInput}
          />
        )}
      </BrokeQuery>
    </section>
  );
};

export default DefinitelyBroke;

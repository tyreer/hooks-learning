import { useSetState, useDeepCompareEffect } from "../hooks/customHooks";

function useQuery(query) {
  const [state, setState] = useSetState({
    fetching: false,
    data: null,
    error: null,
  });

  useDeepCompareEffect(() => {
    setState({ fetching: true });
    fetch(query.url, query.init)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Not 2xx response");
        }
        return res.json();
      })
      .then((res) => {
        setState({
          data: res,
          error: null,
          fetching: false,
        });
      })
      .catch((error) =>
        setState({ error: error.message, data: null, fetching: false })
      );
  }, [query, setState]);

  return state;
}

const Query = ({ children, ...props }) => children(useQuery(props));

export default Query;
export { useQuery };

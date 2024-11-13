import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <h2>Something went wrong: {error.status}</h2>;
      <p>{error.data}</p>;
    </>
  );
};

export default Error;

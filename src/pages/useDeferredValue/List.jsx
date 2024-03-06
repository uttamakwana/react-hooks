import { useDeferredValue, useEffect } from "react";
import PropTypes from "prop-types";

const List = ({ input }) => {
  //   const LIST_SIZE = 20000;
  const deferredValue = useDeferredValue(input);
  useEffect(() => {
    console.log("Input:", input, "Deferred:", deferredValue);
  }, [input, deferredValue]);
  return <></>;
};

export default List;

List.propTypes = {
  input: PropTypes.string,
};

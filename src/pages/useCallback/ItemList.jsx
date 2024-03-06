import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ItemList = ({ changeItems }) => {
  const [items, setItems] = useState(() => []);

  useEffect(() => {
    console.log("useEffect calls")
    setItems(changeItems());
  }, [changeItems]);
  return (
    <ul className="item-list flex gap-1 text-center">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;

ItemList.propTypes = {
  changeItems: PropTypes.func,
};

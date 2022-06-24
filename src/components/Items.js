import React from "react";

const Items = ({ items, loading }) => {
  if (loading) {
    return <h2>Cargando...</h2>;
  }

  return (
    <ul className="List-group mb-4">
      {items.map(item => (
        <li key={item.id} className="list-group-item">
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Items;

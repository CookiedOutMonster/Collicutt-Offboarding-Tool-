export const ListName = ({ name, urgency, selectOffBoard, id, selected }) => {
  return (
    <li
      className={`${selected ? "selected_name" : ""} `}
      onClick={() => selectOffBoard(id)}
    >
      <h2>{name}</h2>
      <p>Urgency: {urgency}</p>
    </li>
  );
};

export default ListName;

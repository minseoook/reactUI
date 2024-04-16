const DropDown = ({ data, onClick }) => {
  return (
    <ul>
      {data.map((a, i) => (
        <li key={i} onClick={onClick}>
          {a}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;

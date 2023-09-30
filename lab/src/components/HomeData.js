import "./HomeStyles.css";

function HomeData(props) {
  return (
    <div className="p-card">
      <p>{props.user}</p>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default HomeData;

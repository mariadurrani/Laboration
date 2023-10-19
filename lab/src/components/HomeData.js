import "./HomeStyles.css";

function HomeData(props) {
  return (
    <div className="p-card">
      <p>{props.user}</p>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <p className="tags">{props.tags}</p>
    </div>
  );
}

export default HomeData;

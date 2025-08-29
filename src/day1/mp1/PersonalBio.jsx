import "./PersonalBio.css";

function PersonalBio(props) {
  return (
    <div className="bio-card">
      <h1 className="bio-name">{props.name}</h1>
      <p className="bio-age">Age: {props.age}</p>
      <p className="bio-text">{props.bio}</p>
    </div>
  );
}

export default PersonalBio;

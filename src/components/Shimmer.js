import "./Shimmer.css";

const Shimmer_Cards = 6;
const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate"></div>
      <div className="shimmer-details stroke animate"></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer-crouser-img  animate"></div>
      {Array.from({ length: Shimmer_Cards }).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};
export default Shimmer;

import "./styles.scss";

export default function Loading() {

  return (
    <div className="loading-result-page">
      <div className="loading-ticket-wrap">
        <div className="filter">
          <div className="title" />
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="actions">
              <div className="radio" />
              <div className="text" />
            </div>
          ))}
          <div className="title" />
          <div className="title" />
        </div>
        <div className="ticket">
          <div className="first"></div>
          <div className="second"></div>
        </div>
      </div>
    </div>
  );
}

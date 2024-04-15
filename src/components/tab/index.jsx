const Tab = ({ tabs, currentIndex, onChange }) => {
  console.log(tabs);
  return (
    <div className="wrapper">
      <div className="heading">
        {tabs.map((tabItem, index) => (
          <div
            className={`tab-item ${currentIndex === index ? "active" : ""}`}
            onClick={() => onChange(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;

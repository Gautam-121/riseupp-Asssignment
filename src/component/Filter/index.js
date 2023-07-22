import "./filter.css";

const filterList = ["Mountain", "Flower", "Beaches", "Cities"];

const Filter = ({ fetchData }) => {
  return (
    <div className="filter_container">
      <div className="filter_Wrapper">
        {filterList.map((filterName, index) => (
          <div className="filter_name cur-poi" key={index}
          onClick={()=>fetchData(filterName)}
          >
            {filterName}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;

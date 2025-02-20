import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState([]);

  const fetchUniversities = async () => {
    try {
      const { data } = await axios.get(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`
      );
      setUniversities(data);
    } catch {
      alert("Error fetching university data");
    }
  };

  return (
    <div>
      <h1>University Search</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button onClick={fetchUniversities}>Search</button>
      <div>
        <ul>
          {universities.map((university) => (
            <li key={university.name}>
              <p>{university.name}</p>
              <a href={university.web_pages[0]} target="_blank">
                {university.web_pages[0]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;

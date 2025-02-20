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
    <div className="w-full max-w-xs space-y-4">
      <span className="text-2xl">University Search</span>
      <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <div>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Country
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

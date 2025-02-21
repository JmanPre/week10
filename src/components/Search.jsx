import { useState } from "react";

const Search = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchUniversities = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await fetch(
        `http://universities.hipolabs.com/search?name=${name}&country=${country}`
      );
      const data = await response.json();
      setUniversities(data);
    } catch (err) {
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            University Search
          </h2>

          <div className="space-y-4">
            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg">
                {error}
              </div>
            )}
            <input
              type="text"
              placeholder="Enter university name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />

            <input
              type="text"
              placeholder="Enter country..."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />

            <button
              onClick={fetchUniversities}
              disabled={isLoading}
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? "Searching..." : "Search Universities"}
            </button>
          </div>
        </div>
      </div>

      {universities.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {universities.map((university) => (
            <div
              key={university.name}
              className="bg-white rounded-xl shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
            >
              <img
                className="rounded-t-lg h-48 w-full object-cover"
                src={`https://picsum.photos/seed/${university.name}/500/300`}
                alt={university.name}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 mb-2">
                  {university.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {university.country}
                  {university.domains?.[0] && ` | ${university.domains[0]}`}
                </p>
                <a
                  href={university.web_pages[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white border border-blue-600 text-blue-600 font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;

import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setLoading(true);

    // Example fake search results
    setTimeout(() => {
      setResults([
        { id: 1, name: "Product One", price: "$20" },
        { id: 2, name: "Product Two", price: "$35" },
        { id: 3, name: "Product Three", price: "$18" },
      ]);
      setLoading(false);
    }, 800);
  };

  return (
    <main className="mt-[18vh] w-full px-4">
      <section className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-3xl font-serif font-semibold text-teal-800">
            Search
          </h1>
          <hr className="w-[60px] border-red-800 border-4 border-dashed rounded-full mt-2" />
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex gap-2 max-w-xl mx-auto mb-10"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-teal-600"
          />

          <button
            type="submit"
            className="px-6 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Search
          </button>
        </form>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Searching...</p>
        )}

        {/* No Results */}
        {!loading && results.length === 0 && query && (
          <p className="text-center text-gray-500">
            No results found for "{query}"
          </p>
        )}

        {/* Results */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {results.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-teal-700">
                {item.name}
              </h2>

              <p className="text-gray-500">{item.price}</p>

              <button className="mt-3 border border-teal-600 px-4 py-2 rounded hover:bg-teal-600 hover:text-white transition">
                View
              </button>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
};

export default SearchBar;
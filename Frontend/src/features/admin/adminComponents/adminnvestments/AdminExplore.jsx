import React, { useState, useEffect, useRef } from "react";
import { investmentOpportunities } from "../dashboardjson/investmentOpportunities";

const AdminExplore = () => {
  const [filter, setFilter] = useState({
    search: "",
    minInvestment: "",
    location: "",
  });

  const [visibleCount, setVisibleCount] = useState(12); // Start with 12 cards
  const [showLoadMore, setShowLoadMore] = useState(false);
  const lastCardRef = useRef(null); // Ref for last visible card

  // Filter investments based on search, location, and min investment
  const filteredInvestments = investmentOpportunities.filter((item) => {
    const itemMinInvestment =
      typeof item.minInvestment === "string"
        ? parseInt(item.minInvestment.replace(/\D/g, ""))
        : item.minInvestment;

    const filterMinInvestment =
      filter.minInvestment !== ""
        ? parseInt(filter.minInvestment.replace(/\D/g, ""))
        : 0;

    return (
      item.title.toLowerCase().includes(filter.search.toLowerCase()) &&
      (filter.location ? item.location.includes(filter.location) : true) &&
      itemMinInvestment >= filterMinInvestment
    );
  });

  const visibleInvestments = filteredInvestments.slice(0, visibleCount);

  // Load more cards
  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  useEffect(() => {
    if (!lastCardRef.current) return;

    const currentLastCard = lastCardRef.current; // capture current ref

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLoadMore(
          entry.isIntersecting && visibleCount < filteredInvestments.length
        );
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(currentLastCard);

    return () => {
      if (currentLastCard) observer.unobserve(currentLastCard); // use captured variable
    };
  }, [visibleCount, filteredInvestments.length]);

  return (
    <div className="lg:pt-[10vh] pt-[8vh] pb-6 px-2 lg:px-1 relative">
      <h1 className="text-4xl font-bold text-teal-600 mb-6">
        Explore Investments
      </h1>

      <div className="mb-6 flex flex-wrap gap-2 md:gap-4">
        <input
          type="text"
          placeholder="Search by title"
          className="p-2 border rounded flex-1 min-w-[150px]"
          value={filter.search}
          onChange={(e) => setFilter({ ...filter, search: e.target.value })}
        />
        <input
          type="text"
          placeholder="Filter by location"
          className="p-2 border rounded flex-1 min-w-[150px]"
          value={filter.location}
          onChange={(e) => setFilter({ ...filter, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Min investment ($)"
          className="p-2 border rounded flex-1 min-w-[150px]"
          value={filter.minInvestment}
          onChange={(e) =>
            setFilter({ ...filter, minInvestment: e.target.value })
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-2">
        {visibleInvestments.length === 0 ? (
          <p>No investments found.</p>
        ) : (
          visibleInvestments.map((item, index) => {
            // Attach ref to last visible card
            const isLast = index === visibleInvestments.length - 1;
            return (
              <div
                key={item.id}
                ref={isLast ? lastCardRef : null}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-1">{item.location}</p>
                  <p className="text-gray-700">
                    Min Investment: <strong>{item.minInvestment}</strong>
                  </p>
                  <p className="text-gray-700">
                    Expected Returns: <strong>{item.returns}</strong>
                  </p>
                  <button className="mt-4 w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
                    Learn More
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {showLoadMore && (
        <button
          onClick={loadMore}
          className="fixed md:right-[30vw] right-4 bottom-6 px-5 py-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition z-20 text-sm md:text-base"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default AdminExplore;

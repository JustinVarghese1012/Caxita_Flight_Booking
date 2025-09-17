import React, { useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { flightData } from "../constants/constants";

export default function View() {
  const location = useLocation();
  const { from, to } = location.state || {};

  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Filter flights
  const filteredFlights = flightData.filter(
    (flight) => flight.from.includes(from) && flight.to.includes(to)
  );

  // Sorting
  const sortedFlights = useMemo(() => {
    let flights = [...filteredFlights];
    if (sortField) {
      flights.sort((a, b) => {
        let valA = a[sortField];
        let valB = b[sortField];

        if (sortField === "departure" || sortField === "arrival") {
          valA = valA.padStart(5, "0");
          valB = valB.padStart(5, "0");
        }
        if (sortField === "duration") {
          const toMinutes = (d) => {
            const [h, m] = d.split("h");
            return parseInt(h) * 60 + parseInt(m);
          };
          valA = toMinutes(valA);
          valB = toMinutes(valB);
        }

        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
      });
    }
    return flights;
  }, [filteredFlights, sortField, sortOrder]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Available Flights
      </h1>

      {/* Sorting controls */}
      <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
        {/* Sort By */}
        <label className="inline-flex items-center gap-2 w-full md:w-1/4 whitespace-nowrap">
          <span className="label-text">Sort By:</span>
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="select select-bordered flex-1"
          >
            <option value="">Select field</option>
            <option value="price">Price</option>
            <option value="departure">Departure Time</option>
            <option value="duration">Duration</option>
          </select>
        </label>

        {/* Order */}
        <label className="inline-flex items-center gap-2 w-full md:w-1/4 whitespace-nowrap">
          <span className="label-text">Order:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered flex-1"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>

        {/* Reset Button */}
        <div className="flex items-center">
          <button
            onClick={() => {
              setSortField("");
              setSortOrder("asc");
            }}
            className="btn btn-warning"
          >
            Reset
          </button>
        </div>
      </div>

      {sortedFlights.length > 0 ? (
        <div className="flex flex-col gap-4">
          {sortedFlights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row items-center justify-between"
            >
              {/* Left side: Airline logo + name */}
              <div className="flex items-center gap-4 w-full md:w-1/4 mb-4 md:mb-0">
                <img
                  src={flight.airlineLogo}
                  alt={flight.airlineName}
                  className="h-12"
                />
                <h2 className="font-semibold text-lg">{flight.airlineName}</h2>
              </div>

              {/* Middle details */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm w-full md:w-2/4 text-center">
                <p>
                  <span className="font-semibold">Departure:</span>{" "}
                  {flight.departure}
                </p>
                <p>
                  <span className="font-semibold">Arrival:</span>{" "}
                  {flight.arrival}
                </p>
                <p>
                  <span className="font-semibold">Duration:</span>{" "}
                  {flight.duration}
                </p>
                <p className="text-green-600 font-bold text-lg">
                  ₹{flight.price}
                </p>
              </div>

              {/* Right side: Button */}
              <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
                <button className="bg-green-600 text-white py-2 px-5 rounded-lg hover:bg-green-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-600 text-lg">
          No flights found for your selection.
        </p>
      )}
    </div>
  );
}

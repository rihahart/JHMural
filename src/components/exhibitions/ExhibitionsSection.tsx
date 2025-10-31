"use client";

import React, { useState, useEffect } from "react";
import ExhibitionBox from "./ExhibitionBox";

interface Exhibition {
  id: string | number;
  title: string;
  location: string;
  dayOfWeek: string;
  date: string;
  startTime: string;
  url: string;
}

export default function ExhibitionsSection() {
  const [exhibitions, setExhibitions] = useState<Exhibition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchExhibitions();
  }, []);

  const fetchExhibitions = async () => {
    try {
      setLoading(true);

      const response = await fetch("/api/whitney-exhibitions");

      if (!response.ok) {
        throw new Error("Failed to fetch exhibitions");
      }

      const responseData = await response.json();
      const data = responseData.data; // Extract the data array from the response

      // Map the API response to our Exhibition interface
      const formattedExhibitions = data.map((item: any) => {
        const startDate = new Date(item.attributes.start_time);

        console.log("Raw start_time:", item.attributes.start_time);
        console.log("Parsed startDate:", startDate);

        // Get day of week abbreviation
        const dayOfWeek = startDate
          .toLocaleDateString("en-US", {
            weekday: "short",
          })
          .toUpperCase();

        // Get date with month
        const month = startDate
          .toLocaleDateString("en-US", {
            month: "short",
          })
          .toUpperCase();
        const day = startDate.getDate();
        const date = `${month} ${day}`;

        // Check if it's midnight (meaning no specific time set)
        const hours = startDate.getHours();
        const minutes = startDate.getMinutes();
        const isAllDay = hours === 0 && minutes === 0;

        // Get time or show "Opens 10:00 AM" as default museum hours
        const startTime = isAllDay
          ? "Opens 10:00 AM"
          : startDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });

        console.log("Exhibition:", item.attributes.title);
        console.log("  dayOfWeek:", dayOfWeek);
        console.log("  date:", date);
        console.log("  startTime:", startTime);
        console.log("---");

        return {
          id: item.id,
          title: item.attributes.title,
          location: "Whitney Museum of American Art",
          dayOfWeek: dayOfWeek,
          date: date,
          startTime: startTime,
          url: `https://whitney.org${item.attributes.url}`,
        };
      });

      // Show only the first 5 exhibitions
      setExhibitions(formattedExhibitions.slice(0, 5));
      setError(null);
    } catch (err) {
      console.error("Error fetching exhibitions:", err);
      setError("Unable to load exhibitions at this time.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading exhibitions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            onClick={fetchExhibitions}
            className="mt-4 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (exhibitions.length === 0) {
    return (
      <div className="w-full flex justify-center items-center py-12">
        <p className="text-gray-600">No exhibitions available at this time.</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {exhibitions.map((exhibition) => (
        <ExhibitionBox key={exhibition.id} exhibition={exhibition} />
      ))}
    </div>
  );
}

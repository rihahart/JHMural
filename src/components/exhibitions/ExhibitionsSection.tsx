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

      // Map the API response to our Exhibition interface, including original start_time and end_time for sorting
      const formattedExhibitions = data.map(
        (item: {
          id: string;
          attributes: { 
            start_time: string; 
            end_time?: string;
            title: string; 
            url: string 
          };
        }) => {
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

          // Calculate date range
          let dateRange = "Ongoing";
          try {
            if (item.attributes.end_time) {
              const endDate = new Date(item.attributes.end_time);
              
              // Check if dates are valid
              if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                console.warn(`Invalid dates for exhibition: ${item.attributes.title}`, startDate, endDate);
                dateRange = "Ongoing";
              } else {
                // Format start date
                const startMonth = startDate.toLocaleDateString("en-US", { month: "short" });
                const startDay = startDate.getDate();
                const startFormatted = `${startMonth} ${startDay}`;
                
                // Check if it's a one-day event
                const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
                const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
                
                if (startDateOnly.getTime() === endDateOnly.getTime()) {
                  // One-day event, show only start date
                  dateRange = startFormatted;
                } else {
                  // Multi-day event, show date range
                  const endMonth = endDate.toLocaleDateString("en-US", { month: "short" });
                  const endDay = endDate.getDate();
                  const endFormatted = `${endMonth} ${endDay}`;
                  
                  dateRange = `${startFormatted} - ${endFormatted}`;
                }
              }
            } else {
              // If no end date, show just start date
              const startMonth = startDate.toLocaleDateString("en-US", { month: "short" });
              const startDay = startDate.getDate();
              dateRange = `${startMonth} ${startDay}`;
            }
          } catch (err) {
            console.error(`Error calculating date range for ${item.attributes.title}:`, err);
            dateRange = "Ongoing";
          }

          console.log("Exhibition:", item.attributes.title);
          console.log("  dayOfWeek:", dayOfWeek);
          console.log("  date:", date);
          console.log("  dateRange:", dateRange);
          console.log("---");

          return {
            id: item.id,
            title: item.attributes.title,
            location: "Whitney Museum of American Art",
            dayOfWeek: dayOfWeek,
            date: date,
            startTime: dateRange, // Using startTime field to store date range
            url: `https://whitney.org${item.attributes.url}`,
            // Keep original start_time and end_time for filtering and sorting
            originalStartTime: item.attributes.start_time,
            originalEndTime: item.attributes.end_time || null,
          };
        }
      );

      // Filter out past exhibitions - show upcoming exhibitions and ongoing exhibitions
      const now = new Date();
      const nowDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
      console.log("Current date for filtering:", nowDateOnly);
      console.log("Total exhibitions before filtering:", formattedExhibitions.length);
      
      const upcomingExhibitions = formattedExhibitions
        .filter((item: Exhibition & { originalStartTime: string; originalEndTime: string | null }) => {
          const startDate = new Date(item.originalStartTime);
          const startDateOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
          
          // If exhibition has an end date, check if it hasn't ended yet
          if (item.originalEndTime) {
            const endDate = new Date(item.originalEndTime);
            const endDateOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
            
            // Show if exhibition hasn't ended yet (end date is today or in the future)
            const isActive = endDateOnly >= nowDateOnly;
            console.log(`Exhibition: ${item.title}, Start: ${startDateOnly.toISOString()}, End: ${endDateOnly.toISOString()}, Now: ${nowDateOnly.toISOString()}, IsActive: ${isActive}`);
            return isActive;
          } else {
            // If no end date, check if start date is today or in the future
            const isUpcoming = startDateOnly >= nowDateOnly;
            console.log(`Exhibition: ${item.title}, Start: ${startDateOnly.toISOString()}, Now: ${nowDateOnly.toISOString()}, IsUpcoming: ${isUpcoming}`);
            return isUpcoming;
          }
        })
        .sort((a: Exhibition & { originalStartTime: string; originalEndTime: string | null }, b: Exhibition & { originalStartTime: string; originalEndTime: string | null }) => {
          // Sort by end date if available, otherwise by start date
          const endDateA = a.originalEndTime ? new Date(a.originalEndTime) : new Date(a.originalStartTime);
          const endDateB = b.originalEndTime ? new Date(b.originalEndTime) : new Date(b.originalStartTime);
          return endDateA.getTime() - endDateB.getTime(); // Sort by end date: upcoming exhibitions in chronological order
        });
      
      console.log("Filtered upcoming exhibitions count:", upcomingExhibitions.length);

      // If no upcoming exhibitions, show all exhibitions sorted by date (most recent first)
      const exhibitionsToShow = upcomingExhibitions.length > 0 
        ? upcomingExhibitions 
        : formattedExhibitions.sort((a: Exhibition & { originalStartTime: string; originalEndTime: string | null }, b: Exhibition & { originalStartTime: string; originalEndTime: string | null }) => {
            // Sort by end date if available, otherwise by start date
            const endDateA = a.originalEndTime ? new Date(a.originalEndTime) : new Date(a.originalStartTime);
            const endDateB = b.originalEndTime ? new Date(b.originalEndTime) : new Date(b.originalStartTime);
            return endDateB.getTime() - endDateA.getTime(); // Most recent end date first
          });

      // Show only the first 5 exhibitions, remove originalStartTime and originalEndTime from final objects
      const finalExhibitions = exhibitionsToShow.slice(0, 5).map((item: Exhibition & { originalStartTime: string; originalEndTime: string | null }) => {
        const { originalStartTime, originalEndTime, ...rest } = item;
        return rest;
      });
      setExhibitions(finalExhibitions);
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
    <div className="w-full flex flex-col gap-8 max-w-full">
      {exhibitions.map((exhibition) => (
        <ExhibitionBox key={exhibition.id} exhibition={exhibition} />
      ))}
    </div>
  );
}

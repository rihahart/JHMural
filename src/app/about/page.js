"use client";

import MeetOurFounders from "../../components/about/meetOurFounders";
import useWindowWidth from "../_utilities/useWindowWidth";
import MeetOurFoundersMobile from "../../components/about/meetOurFoundersMobile";
import CoFounderInfo from "../../components/about/coFounderInfo";

export default function About() {
  const windowWidth = useWindowWidth();

  if (windowWidth > 768) {
    return (
      <div className="flex w-full px-4 sm:px-6 lg:px-8 pt-[var(--spacing-xl)] pb-[var(--spacing-7xl)] flex-col items-center gap-[var(--spacing-7xl)]">
        <MeetOurFounders />
        <CoFounderInfo />
      </div>
    );
  } else {
    return (
      <div>
        <MeetOurFoundersMobile />
      </div>
    );
  }
}

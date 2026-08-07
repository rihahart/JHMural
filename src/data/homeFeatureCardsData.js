// Cards for the 3-up feature row on the homepage (Figma "Item 2").
// Inaugural Mural / Donate / Join our newsletter.
// TODO: swap placeholder images/copy for final assets when available.
export const homeFeatureCardsData = [
  {
    id: "inaugural-mural",
    title: "Inaugural Mural",
    description:
      "See where it all began — our first mural at 84th Street and Roosevelt Avenue, painted with and for the Jackson Heights community.",
    image: "/84thStreetMural/Hero Image.jpg",
    imageAlt: "Floral mural painted on brick at 84th Street and Roosevelt Avenue",
    href: "/projects/84th-street-mural",
    external: false,
  },
  {
    id: "donate",
    title: "Donate",
    description:
      "Every gift helps us pay local artists and bring more public art to neighborhoods that have historically been overlooked.",
    image: "/Footer/Donate.png",
    imageAlt: "Illustration inviting you to donate to JH Mural Project",
    href: "https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00",
    external: true,
  },
  {
    id: "newsletter",
    title: "Join our newsletter",
    description:
      "Stay in the loop on new murals, events, and volunteer opportunities happening around Jackson Heights.",
    image: "/newsletter/newsletter.jpeg",
    imageAlt: "Community members gathered in front of a mural",
    href: "/newsletter",
    external: false,
  },
];

export default homeFeatureCardsData;

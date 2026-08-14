// Cards for the 3-up feature row on the homepage (Figma "Item 2").
// Inaugural Mural / Donate / Join our newsletter.
// TODO: swap placeholder images/copy for final assets when available.
export const homeFeatureCardsData = [
  {
    id: "inaugural-mural",
    title: '"Jackson Heights in Bloom"',
    description:
      "Located on 84th Street and Roosevelt Avenue, this inaugural mural reflects the heart of Jackson Heights.",
    image: "/InugrationalMural.jpg",
    imageAlt:
      "Floral mural painted on brick at 84th Street and Roosevelt Avenue",
    href: "/projects/jackson-heights-in-bloom",
    external: false,
  },
  {
    id: "donate",
    title: "Donate",
    description:
      "Your donations helps us pay local artists and bring more public art to neighborhoods.",
    image: "/DonateCardImage.png",
    imageAlt: "Illustration inviting you to donate to JH Mural Project",
    href: "https://donate.stripe.com/eVqaEY2iV7kk8KI0273ks00",
    external: true,
  },
  {
    id: "newsletter",
    title: "Join our newsletter",
    description:
      "Stay in the loop on the latest news, new murals, events, and volunteer opportunities.",
    image: "/Homepage/KidsJoyfullyDrawing.png",
    imageAlt: "Community members gathered in front of a mural.",
    href: "/newsletter",
    external: false,
  },
];

export default homeFeatureCardsData;

export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Able Interiors & Windows",
    description:
      "Premium uPVC and aluminium windows, doors, and bespoke interior solutions in Chennai & Tamil Nadu.",
    url: "https://ablewindows.com",
    telephone: "+919789053195",
    email: "ablewindows22@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Flat No.: 1/106ab, G1, Plot No.B5, Sampath Nagar",
      addressLocality: "Nanmangalam, Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600129",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.0827",
      longitude: "80.2707",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Tamil Nadu",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Window, Door & Interior Solutions",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "uPVC Windows" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Aluminium Windows" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "uPVC Doors" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Aluminium Doors" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Modular Kitchen" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Home Interiors" },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

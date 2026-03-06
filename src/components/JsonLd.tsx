export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Able Windows",
    description:
      "Premium uPVC and aluminium windows, doors, and bespoke interior solutions in Chennai & Tamil Nadu.",
    url: "https://ablewindows.com",
    telephone: "+919876543210",
    email: "info@ablewindows.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123, Anna Salai",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600002",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "16:00",
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

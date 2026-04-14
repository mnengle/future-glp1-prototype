type Json = Record<string, unknown> | Record<string, unknown>[];

export function JsonLd({ data }: { data: Json }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Future Weight Loss",
  url: "https://future-glp1-prototype.vercel.app",
  logo: "https://future-glp1-prototype.vercel.app/og-image.jpg",
  description:
    "Medical weight loss program combining GLP-1 medications with expert coaching and resistance training.",
  medicalSpecialty: "Obesity Medicine",
  priceRange: "$179-$549",
  sameAs: ["https://future.co"],
};

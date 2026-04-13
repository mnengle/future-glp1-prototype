import { NextResponse } from "next/server";
import { searchPharmacies } from "@/lib/steadymd";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query") ?? "";
  const state = searchParams.get("state") ?? "";

  try {
    const results = await searchPharmacies(query, state);
    return NextResponse.json(results);
  } catch {
    // Fallback mock data for prototype
    return NextResponse.json({
      results: [
        {
          ncpdp_id: "1234567",
          name: "CVS Pharmacy #4521",
          address: "1234 Main St",
          city: "Los Angeles",
          state: "CA",
          zip: "90001",
          phone: "(213) 555-0100",
        },
        {
          ncpdp_id: "2345678",
          name: "Walgreens #9876",
          address: "5678 Broadway",
          city: "Los Angeles",
          state: "CA",
          zip: "90012",
          phone: "(213) 555-0200",
        },
      ],
    });
  }
}

import { Link } from "react-router";
import type { Route } from "./+types/countries";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RESTExplorer | Countries" }, { name: "description", content: "This the page where all the countries are being showed." }];
}

export async function clientLoader() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return data;
}

export default function Countries({ loaderData }: Route.ComponentProps) {
  const [search, setSearch] = useState<string>("");
  const filteredCountries = loaderData?.filter((country: any) => !search || country.name.common.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h2>Countries</h2>
      <div>
        <input type="text" placeholder="Search by country name..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <ul>
        {filteredCountries.map((country: any, index: number) => (
          <li key={index}>
            <Link to={`/countries/${country?.name?.common}`}>{country?.name?.common}</Link>
            <div className="text-sm font-bold mb-1.5">
              Region: {country?.region} | Population: {country?.population}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

import type { Route } from "./+types/countries";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RESTExplorer | Countries" }, { name: "description", content: "This the page where all the countries are being showed." }];
}

export default function Countries() {
  return <div>Countries</div>;
}

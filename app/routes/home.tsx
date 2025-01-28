import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [{ title: "RESTExplorer" }, { name: "description", content: "Welcome to RESTExplorer!" }];
}

export default function Home() {
  return <Welcome />;
}

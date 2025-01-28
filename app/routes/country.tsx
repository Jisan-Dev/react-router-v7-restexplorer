export default function Country({ params }: { params: { countryName: string } }) {
  return <div>Welcome to {params.countryName}</div>;
}

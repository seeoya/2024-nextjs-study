export default function page({ params: { id } }: { params: { id: string } }) {
    return <div>Movie {id}</div>;
}

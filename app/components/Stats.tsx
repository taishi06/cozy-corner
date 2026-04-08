export default function page({
    stat,
    statName
}: {
    stat: string
    statName: string
}) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold text-rose-500">{stat}</h3>
            <p className="text-sm text-gray-500 mt-1">{statName}</p>
        </div>
    )
}

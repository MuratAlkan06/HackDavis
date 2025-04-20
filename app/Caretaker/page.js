export default function CaretakerDashboard()
{
    return (
        <main className="font-sans text-gray-800 p-6">
            <div className="flex justify-between items-start mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full" />

                <div className="flex flex-col items-center flex-1 text-center">
                    <h1 className="text 2xl font-semibold mb-2">Caretaker Dashboard</h1>
                    <div className="flex items-center gap-2">
                    <a href="/EditProfile" className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                        Edit Profile
                    </a>
                    <p className="text-sm">Current Care Rating: ⭐⭐⭐⭐☆</p>
                    <button className="text-sm px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
                        Learn more about Rating
                    </button>
                    </div>
                </div>
                <button className="text-sm px-4 py-1 bg-gray-200 rounded hover:bg-gray-300">Log out</button>
            </div>

            <section>
                <h2 className="text-xl font-semibold mb-4">Care Requests</h2>
                <div className="flex gap-4 flex-wrap">
                     {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-gray-300 w-32 h-32 rounded-md" />
                    ))}
                </div>
            </section>

        </main>
    )
}
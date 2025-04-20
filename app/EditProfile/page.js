export default function EditProfile() {
    return (
      <main className="font-sans text-gray-800 p-8 flex flex-col gap-8 max-w-5xl mx-auto">
        <div className="flex justify-between items-start">
          <div className="flex flex-col items-center gap-2">
            <div className="w-40 h-40 bg-gray-300 rounded-full" />
            <span className="text-sm">Change Picture</span>
          </div>

          <div className="flex flex-col items-center flex-1">
            <p className="mb-2 font-medium">Years of Experience as a Caretaker</p>
            <div className="flex items-center gap-4">
              {[1, 2, 3, 4, '5+'].map((num, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div
                    className={`w-5 h-5 rounded-full ${
                      num === 2 ? 'bg-gray-700' : 'bg-gray-300'
                    }`}
                  />
                  <span className="text-sm mt-1">{num}</span>
                </div>
              ))}
            </div>
          </div>
  
          <button className="w-8 h-8 text-white bg-black rounded text-xl font-bold leading-none">
            ×
          </button>
        </div>
  
        <div className="bg-gray-200 p-6 rounded-lg max-w-md">
          <h2 className="text-center font-medium mb-4">Basic Information</h2>
          <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1">Age:</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded-full border"
              placeholder="Enter your age"
            />
          </div>
            <div>
              <label className="block text-sm mb-1">Pronouns:</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full border"
                placeholder="e.g., she/her"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">First Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full border"
                placeholder="First Name"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name:</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-full border"
                placeholder="Last Name"
              />
            </div>
          </form>
        </div>
      </main>
    );
  }
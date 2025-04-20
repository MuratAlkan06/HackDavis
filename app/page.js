
export default function HomePage() {
  return (
    <main className="font-sans bg-[#fffaa8]">
      <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-blue-600">About Us</a>
          <a href="#" className="hover:text-blue-600">Care</a>
          <a href="#" className="hover:text-blue-600">Jobs</a>
        </div>

        <div className="text-xl font-bold">BridgeCare</div>

        <div className="flex gap-3">
  <a href="#" className="text-sm px-4 py-1 border border-gray-300 rounded hover:bg-gray-100">
    Login
  </a>
  <a href="#" className="text-sm px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
    Sign Up
  </a>
</div>
      </nav>

      <section className="text-center py-16 px-6 bg-[#fffaa8]">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
        Bridging your Gap to <br className="hidden sm:block" /> Safe, Certified Childcare.
      </h2>
      <p className="text-lg text-gray-600 mb-6">No more</p>
      <a href="/Caretaker" className="inline-block bg-gradient-to-r from-pink-300 to-blue-400 text-black font-bold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition">
        Get Started!
      </a>
      </section>

      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">What is BridgeCare?</h3>
          <p>
            We are a caretaker-matching program where you can find affordable childcare options & see a
            caretaker directory program where you can find affordable childcare options.
          </p>
        </div>
        <div className="bg-gray-300 h-48 rounded-md" />
      </section>

      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        <div className="bg-gray-300 h-48 rounded-md" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Specialized care, in your area!</h3>
          <p>
            Finding someone to care for your child made easy with certified, safe, caretakers.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <h3 className="text-xl font-semibold mb-6">Hear from Satisfied Families!</h3>
        <div className="flex justify-center flex-wrap gap-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="bg-gray-300 w-24 h-24 rounded-md" />
          ))}
        </div>
        <div className="bg-gray-300 w-24 h-4 mt-6 mx-auto rounded" />
      </section>

      <section className="py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
        <div className="bg-gray-300 h-48 rounded-md" />
        <div>
          <h3 className="text-xl font-semibold mb-2">Be a Caretaker!</h3>
          <p>
            Finding someone to care for your child made easy with certified, safe, caretakers.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 text-center">
        <h3 className="text-xl font-semibold mb-6">Meet our Top Caretakers!</h3>
        <div className="flex justify-center flex-wrap gap-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="bg-gray-300 w-24 h-24 rounded-md" />
          ))}
        </div>
        <div className="bg-gray-300 w-24 h-4 mt-6 mx-auto rounded" />
      </section>

      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold mb-6">Frequently Asked Questions!</h3>
        <div className="flex flex-col gap-4">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="bg-gray-300 h-12 rounded-md" />
          ))}
        </div>
      </section>
    </main>
  );
}

export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Header */}
        <header className="bg-gray-900 text-white px-8 py-8">
          <h1 className="text-3xl font-bold">Billy Joe Uyam</h1>

          <div className="mt-2 text-gray-300 text-sm space-y-1">
            <p>billyuyam11@gmail.com</p>
            <p>(813) 607-7031</p>
            <a
              href="linkedin.com/in/billy-u-9a6399382"
              className="underline hover:text-white"
            >
              LinkedIn Profile
            </a>
          </div>
        </header>
      </div>
    </main>
  )
}
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

        <div>

          {/* Objective */}
          <section>
            <h2 className="text-xl font-bold uppercase tracking-wide border-b-2 border-gray-30 pb-2"
            >Objective
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              To secure an internship in data analytics to apply skills where I can apply
              data-driven insights to mitigate real-world problems.
            </p>
          </section>

          {/* Education*/}
          <section>
            <h2
            >Education
            </h2>

            <div>
              <div>
                <h3>University of South Florida</h3>
                <span>Tampa, FL</span>
              </div>

              <div>
                <p>B.S. Business Analytics and Information Systems</p>
                <p>Expected May 2028</p>
              </div>
            </div>

            <div>
              <div>
                <h3>State College of Florida</h3>
                <span>Venice, FL</span>
              </div>

              <div>
                <p>Associate of Arts</p>
                <p>Aug 2023 - May 2025</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
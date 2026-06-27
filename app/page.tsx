export default function Resume() {
  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Header */}
        <header className="bg-gray-900 text-white px-8 py-8">
          <h1 className="text-4xl font-bold">Billy Joe Uyam</h1>

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
            <h2 className="text-xl font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-2"
            >Objective
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              To secure an internship in data analytics to apply skills where I can apply
              data-driven insights to mitigate real-world problems.
            </p>
          </section>

          {/* Education */}
          <section className="mt-8">
            <h2 className="text-xl font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-2"
            >Education
            </h2>

            <div className="mt-4">
              <div className="flex justify-between font-semibold">
                <h3>University of South Florida</h3>
                <span>Tampa, FL</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <p>B.S. Business Analytics and Information Systems</p>
                <p>Expected May 2028</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between font-semibold">
                <h3>State College of Florida</h3>
                <span>Venice, FL</span>
              </div>

              <div className="flex justify-between text-gray-700">
                <p>Associate of Arts</p>
                <p>Aug 2023 - May 2025</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mt-8">
            <h2 className="text-xl font-bold uppercase tracking-wide border-b-2 border-gray-300 pb-2"
            >Work Experience
            </h2>

            <div className="mt-4">
              <div className="flex justify-between font-semibold">
                <h3>Jacaranda Trace</h3>
                <span>Venice, FL</span>
              </div>

              <div className="flex justify-between italic text-gray-700">
                <p>Server</p>
                <p>Aug 2024 - Aug 2025</p>
              </div>

              <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700">
                <li>
                  Served 60+ orders per shift in both dining area and room 
                  deliveries, demonstrating strong multitasking and customer service.
                </li>

                <li>
                  Trained four new employees in food running procedures,
                  reducing wait time and improving work flow.
                </li>
              </ul>
            </div>
          </section>

          
        </div>
      </div>
    </main>
  )
}
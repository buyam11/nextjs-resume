export default function Resume() {
  return (
    <main className="min-h-screen bg-white px-6 py-6 font-serif text-black">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <header className="text-center mb-4">
          <h1 className="text-3xl font-bold">Billy Uyam</h1>

          <div className="text-sm mt-1">
            <p>billyuyam11@gmail.com • (813) 607-7031 •
             <a
              href="linkedin.com/in/billy-u-9a6399382"
              className="underline ml-1"
            >
              linkedin.com/in/billy-u-9a6399382
            </a>
            </p>
          </div>
        </header>

        <div>

          {/* Objective */}
          <section className="ml-4 mr-4">
            <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 tracking-wide"
            >Objective
            </h2>

            <p className="text-sm leading-5 mt-2">
              To secure an internship in data analytics to apply skills where I can apply
              data-driven insights to mitigate real-world problems.
            </p>
          </section>

          {/* Education */}
          <section className="mt-4 ml-4 mr-4">
            <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 tracking-wide"
            >Education
            </h2>

            <div className="mt-4">
              <div className="flex justify-between text-sm font-semibold">
                <h3>University of South Florida</h3>
                <span>Tampa, FL</span>
              </div>

              <div className="flex justify-between italic text-sm">
                <p>B.S. Business Analytics and Information Systems</p>
                <p>Expected May 2028</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex justify-between text-sm font-semibold">
                <h3>State College of Florida</h3>
                <span>Venice, FL</span>
              </div>

              <div className="flex justify-between italic text-sm">
                <p>Associate of Arts</p>
                <p>Aug 2023 - May 2025</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mt-4 ml-4 mr-4">
            <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 tracking-wide"
            >Work Experience
            </h2>

            <div className="mt-4">
              <div className="flex justify-between text-sm font-semibold">
                <h3>Jacaranda Trace</h3>
                <span>Venice, FL</span>
              </div>

              <div className="flex justify-between italic text-sm">
                <p>Server</p>
                <p>Aug 2024 - Aug 2025</p>
              </div>

              <ul className="list-disc ml-5 mt-1 text-sm leading-5">
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

          {/* Skills */}
          <section className="mt-4 ml-4 mr-4">
            <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 tracking-wide">
              Skills & Awards
            </h2>

            <div className="mt-4 space-y-2 text-sm">
              <div>
                <p><strong>Coding Languages: </strong>JavaScript (beginner) | HTML (intermediate) | CSS (intermediate)</p>
              </div>

              <div>
                <p><strong>Data Visualization: </strong>Excel (intermediate) | Tableau (intermediate) | Visual Studio (intermediate)</p>
              </div>

              <div>
                <p><strong>Awards: </strong>2x USF MUMA Dean's List | Lynn Pippenger School of Accountancy Certificate of Achievement | USF Directors Award | Associate of Arts Summa Cum Laude | 4x President's List SCF</p>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="mt-4 ml-4 mr-4">
            <h2 className="text-sm font-bold uppercase border-b border-black pb-1 mb-2 tracking-wide"
              >Leadership & Community Involvement
            </h2>

            {/* SOREP */}
            <div className="mt-6">
              <div className="flex justify-between text-sm font-semibold">
                <h3>USF SOREP Real Estate Competition</h3>
                <span>Tampa, FL</span>
              </div>

              <div className="flex justify-between italic text-sm">
                <p>3rd Place Contestant</p>
                <p>Feb 2026 - May 2026</p>
              </div>

              <ul className="list-disc ml-5 mt-1 text-sm leading-5">
                <li>
                  Analyzed market, financial, and zoning data to determine 
                  the highest and best use of a downtown Tampa property. 
                </li>

                <li>
                  Created data visualizations and investment models to present 
                  development recommendations to industry professionals.
                </li>
              </ul>
            </div>

            {/* AIS */}
            <div className="mt-6">
              <div className="flex justify-between text-sm font-semibold">
                <h3>Association for Information Systems</h3>
                <span>Tampa, FL</span>
              </div>

              <div className="flex justify-between italic text-sm">
                <p>Member</p>
                <p>Sep 2025 - May 2026</p>
              </div>

              <ul className="list-disc ml-5 mt-1 text-sm leading-5">
                <li>
                  Participated in professional development workshops on Streamlit and Power BI, 
                  gaining hands-on experience with interactive dashboard development, data visualization, and business intelligence tools.
                </li>

                <li>
                  Applied data preparation and AI-assisted analytics techniques 
                  to strengthen skills in data analysis and dashboard creation.
                </li>
              </ul>
            </div>
            
            {/* AFS */}
            <div className="mt-6">
              <div className="flex justify-between text-sm font-semibold">
                <h3>Association of Filipino Students</h3>
                <span>Tampa, FL</span>
              </div>

              <div className="flex justify-between italic text-sm">
                <p>Sports Chair</p>
                <p>April 2026 - Present </p>
              </div>

              <ul className="list-disc ml-5 mt-1 text-sm leading-5">
                <li>
                  Coordinated AFS intramural sports teams by recruiting players, 
                  managing communication, and overseeing game logistics. 
                </li>

                <li>
                  Collaborated with board members and partner organizations to 
                  plan sports events and fundraisers to promote student engagement in sports.
                </li>
              </ul>
            </div>

            {/* VSA */}
            <div className="mt-6">
              <div className="flex justify-between text-sm font-semibold">
                <h3>Vietnamese Student Association</h3>
                <span>Tampa, FL</span>
              </div>

              <div className="flex justify-between italic text-sm">
                <p>Social Chair</p>
                <p>April 2026 - Present</p>
              </div>

              <ul className="list-disc ml-5 mt-1 text-sm leading-5">
                <li>
                  Planned and led social events, icebreakers, and cultural programs to increase 
                  member engagement and foster an inclusive community. 
                </li>

                <li>
                  Coordinated mentorship pairings and collaborated with student organizations 
                  to strengthen relationships and community involvement.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
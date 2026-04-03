export default function HomePage() {
  const associations = [
    "NCAA",
    "NAIA",
    "NJCAA",
    "U Sports",
    "NCCAA",
    "USCAA",
  ];

  const featuredColleges = [
    {
      name: "UCLA",
      association: "NCAA Division I",
      conference: "Big Ten",
      location: "Los Angeles, CA",
    },
    {
      name: "Wake Forest",
      association: "NCAA Division I",
      conference: "ACC",
      location: "Winston-Salem, NC",
    },
    {
      name: "Akron",
      association: "NCAA Division I",
      conference: "Big East",
      location: "Akron, OH",
    },
    {
      name: "Marshall",
      association: "NCAA Division I",
      conference: "Sun Belt",
      location: "Huntington, WV",
    },
    {
      name: "SMU",
      association: "NCAA Division I",
      conference: "ACC",
      location: "Dallas, TX",
    },
    {
      name: "Indiana",
      association: "NCAA Division I",
      conference: "Big Ten",
      location: "Bloomington, IN",
    },
  ];

  const conferences = [
    "ACC",
    "Big Ten",
    "Big East",
    "SEC",
    "Sun Belt",
    "WCC",
    "CAA",
    "Missouri Valley",
  ];

  const navItems = ["Colleges", "Map", "Conferences", "About"];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Header navItems={navItems} />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-4 inline-flex w-fit items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700">
              North America college soccer directory
            </div>
            <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Explore college soccer programs across North America
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Search colleges by division, conference, state, city, and
              association. Compare schools, discover stadiums, and browse men’s
              and women’s soccer programs in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#featured-colleges"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Browse Colleges
              </a>
              <a
                href="#map-preview"
                className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-50"
              >
                View Map
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-100 p-4 shadow-sm sm:p-6">
            <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-800">
                    Map Preview
                  </h2>
                  <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
                    Live Filters
                  </span>
                </div>
                <div className="relative h-72 overflow-hidden rounded-2xl bg-slate-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(37,99,235,0.12),transparent_22%),radial-gradient(circle_at_70%_30%,rgba(249,115,22,0.14),transparent_18%),radial-gradient(circle_at_55%_75%,rgba(37,99,235,0.12),transparent_20%)]" />
                  <div className="absolute left-[16%] top-[28%] h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow" />
                  <div className="absolute left-[52%] top-[22%] h-4 w-4 rounded-full border-4 border-white bg-orange-500 shadow" />
                  <div className="absolute left-[43%] top-[57%] h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow" />
                  <div className="absolute left-[73%] top-[47%] h-4 w-4 rounded-full border-4 border-white bg-orange-500 shadow" />
                  <div className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3 py-2 text-xs font-medium text-slate-600 backdrop-blur">
                    Filter by conference, division, nation, state, or city
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {['NCAA', 'Division I', 'California'].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                  <MiniCollegeCard
                    name="UCLA"
                    association="NCAA Division I"
                    conference="Big Ten"
                    location="Los Angeles, CA"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <MiniCollegeCard
                    name="Wake Forest"
                    association="NCAA Division I"
                    conference="ACC"
                    location="Winston-Salem, NC"
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <MiniCollegeCard
                    name="Indiana"
                    association="NCAA Division I"
                    conference="Big Ten"
                    location="Bloomington, IN"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SearchPanel />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Associations"
          title="Browse by governing body"
          description="Jump into the major college soccer structures across North America."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {associations.map((association) => (
            <a
              key={association}
              href="#"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-slate-900">
                {association}
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Browse conferences and schools
              </p>
            </a>
          ))}
        </div>
      </section>

      <section
        id="featured-colleges"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <SectionHeading
          eyebrow="Directory"
          title="Featured Colleges"
          description="A sample of school cards in the directory layout."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredColleges.map((college) => (
            <CollegeCard key={`${college.name}-${college.location}`} {...college} />
          ))}
        </div>
      </section>

      <section
        id="map-preview"
        className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
              Map Discovery
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Browse programs by location
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-slate-600">
              See colleges on a map and narrow results by conference,
              division, nation, state, or city.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Open Full Map
              </a>
            </div>
          </div>
          <div className="relative h-[340px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.3),rgba(148,163,184,0.1))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.16),transparent_14%),radial-gradient(circle_at_32%_48%,rgba(249,115,22,0.18),transparent_12%),radial-gradient(circle_at_60%_27%,rgba(37,99,235,0.14),transparent_13%),radial-gradient(circle_at_76%_62%,rgba(249,115,22,0.16),transparent_12%),radial-gradient(circle_at_51%_76%,rgba(37,99,235,0.14),transparent_15%)]" />
            <div className="absolute left-[18%] top-[22%] h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow" />
            <div className="absolute left-[34%] top-[49%] h-5 w-5 rounded-full border-4 border-white bg-orange-500 shadow" />
            <div className="absolute left-[62%] top-[28%] h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow" />
            <div className="absolute left-[77%] top-[60%] h-5 w-5 rounded-full border-4 border-white bg-orange-500 shadow" />
            <div className="absolute bottom-4 right-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                Active filters
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {['NCAA', 'Big Ten', 'CA'].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title="Built for directory search and program discovery"
          description="Clear entry points for users exploring colleges, pages, and conferences."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <FeatureCard
            title="Search Schools"
            description="Filter colleges by division, conference, state, city, and association."
          />
          <FeatureCard
            title="Explore Program Pages"
            description="View school details, stadiums, coaches, and men’s and women’s soccer sections."
          />
          <FeatureCard
            title="Compare Conferences"
            description="Browse leagues across NCAA, NAIA, NJCAA, U Sports, and more."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programs"
          title="Men’s and women’s program detail"
          description="Preview the structure of the data shown on each college page."
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <ProgramPreviewCard
            title="Men’s Programs"
            accent="blue"
            items={[
              'Head coach',
              'Recent fixtures',
              'Honours',
              'Table position',
              'MLS drafted players',
            ]}
          />
          <ProgramPreviewCard
            title="Women’s Programs"
            accent="orange"
            items={[
              'Head coach',
              'Recent fixtures',
              'Honours',
              'Table position',
              'Program overview',
            ]}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Conferences"
          title="Browse by Conference"
          description="Conference and league pages connect schools under the same competition structure."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {conferences.map((conference) => (
            <a
              key={conference}
              href="#"
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md"
            >
              <div className="text-base font-semibold text-slate-900">
                {conference}
              </div>
              <p className="mt-2 text-sm text-slate-600">View member schools</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="School Page Preview"
          title="Structured overview pages for every college"
          description="A dedicated page combines school details, stadium data, and program-specific sections."
        />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-500">
              <div className="flex h-full min-h-[260px] items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
                Stadium or campus image placeholder
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-sm font-semibold text-slate-400">
                  Logo
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-950">UCLA Bruins</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Wallis Annenberg Stadium
                  </p>
                  <p className="text-sm text-slate-500">Capacity: 2,147</p>
                </div>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <InfoItem label="Official site" value="Go to site" />
                <InfoItem label="Wikipedia" value="View page" />
                <InfoItem label="Athletics director" value="Martin Jarmond" />
                <InfoItem label="Director email" value="athletics@school.edu" />
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                {['Overview', 'Men\'s', 'Women\'s', 'Stadium', 'Conference'].map(
                  (tab) => (
                    <button
                      key={tab}
                      className={`rounded-xl px-4 py-2 text-sm font-medium ${
                        tab === 'Overview'
                          ? 'bg-blue-600 text-white'
                          : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {tab}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-100 bg-blue-50 px-6 py-10 text-center lg:px-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Start exploring college soccer programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Browse colleges, compare conferences, and build out a complete
            directory-driven experience from a structured data model.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#featured-colleges"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Browse Colleges
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
            >
              Explore Conferences
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Header({ navItems }: { navItems: string[] }) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-3">
          <img
            src="https://imagedelivery.net/bg025PqypkYj-ZKM0mCOdA/0b73d1a4-e6e7-448c-32d1-e9ffb088b900/public"
            alt="College Soccer logo"
            className="h-11 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-slate-700 transition hover:text-blue-700"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:inline-flex"
          >
            Search
          </a>
          <a
            href="#"
            className="inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}

function SearchPanel() {
  const fields = ['School name', 'Division', 'Conference', 'Nation', 'State', 'City'];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:p-6">
      <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(5,minmax(0,1fr))_auto]">
        {fields.map((field) => (
          <label key={field} className="block">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              {field}
            </span>
            <input
              type="text"
              placeholder={field}
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-300 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
          </label>
        ))}
        <div className="flex items-end">
          <button className="w-full rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 lg:w-auto">
            Search Colleges
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function MiniCollegeCard({
  name,
  association,
  conference,
  location,
}: {
  name: string;
  association: string;
  conference: string;
  location: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-400">
        Logo
      </div>
      <div>
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="mt-1 text-sm text-slate-600">{association}</div>
        <div className="text-sm text-slate-500">{conference}</div>
        <div className="mt-1 text-sm text-slate-500">{location}</div>
      </div>
    </div>
  );
}

function CollegeCard({
  name,
  association,
  conference,
  location,
}: {
  name: string;
  association: string;
  conference: string;
  location: string;
}) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-center border-b border-slate-200 bg-slate-50 p-8">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-white text-sm font-semibold text-slate-400">
          Logo
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-950">{name}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
            {association}
          </span>
          <span className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700">
            {conference}
          </span>
        </div>
        <p className="mt-4 text-sm text-slate-600">{location}</p>
        <a
          href="#"
          className="mt-6 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-800"
        >
          View Overview →
        </a>
      </div>
    </article>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 h-10 w-10 rounded-2xl bg-blue-50" />
      <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function ProgramPreviewCard({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: 'blue' | 'orange';
}) {
  const accentClasses =
    accent === 'blue'
      ? 'bg-blue-50 text-blue-700 border-blue-100'
      : 'bg-orange-50 text-orange-700 border-orange-100';

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className={`inline-flex rounded-full border px-3 py-1 text-sm font-semibold ${accentClasses}`}>
        {title}
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
          >
            <span>{item}</span>
            <span className="text-slate-400">•</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-medium text-slate-800">{value}</dd>
    </div>
  );
}

function Footer() {
  const columns = {
    Colleges: ['Browse Colleges', 'Featured Schools', 'Map Search'],
    Map: ['Open Map', 'Regions', 'State Filters'],
    Conferences: ['Browse Conferences', 'Associations', 'Rankings'],
    About: ['About the Project', 'Contact', 'Data Policy'],
  };

  return (
    <footer className="mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img
              src="https://imagedelivery.net/bg025PqypkYj-ZKM0mCOdA/0b73d1a4-e6e7-448c-32d1-e9ffb088b900/public"
              alt="College Soccer logo"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              A North American college soccer directory designed around
              structured school, stadium, conference, and program data.
            </p>
          </div>

          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-600 transition hover:text-blue-700"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 College Soccer. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-700">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-700">
              Terms
            </a>
            <a href="#" className="hover:text-blue-700">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

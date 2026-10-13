
import './App.css'

const hazeCauses = [
  {
    icon: '🔥',
    title: 'Forest Fires',
    description:
      'Forest and peatland fires release smoke and fine particles into the atmosphere.',
    tag: 'Natural & human-caused',
  },
  {
    icon: '🏭',
    title: 'Industrial Emissions',
    description:
      'Industrial activities can release pollutants that contribute to poor air quality.',
    tag: 'Industrial pollution',
  },
  {
    icon: '🚗',
    title: 'Vehicle Exhaust',
    description:
      'Motor vehicles emit pollutants that contribute to haze and urban air pollution.',
    tag: 'Daily activities',
  },
]

const safetyTips = [
  {
    icon: '🏠',
    title: 'Stay Indoors',
    description:
      'Reduce outdoor activities when air quality is unhealthy. Keep windows closed when appropriate.',
  },
  {
    icon: '😷',
    title: 'Wear a Suitable Mask',
    description:
      'A well-fitted N95 respirator can help filter fine particles when you need to go outside.',
  },
  {
    icon: '📱',
    title: 'Check Air Quality',
    description:
      'Check the official Air Pollutant Index (API) before exercising or spending time outdoors.',
  },
  {
    icon: '💚',
    title: 'Protect Your Health',
    description:
      'Avoid strenuous outdoor activity during unhealthy conditions and seek medical help for serious symptoms.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      {/* NAVIGATION */}
      <header className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/95 px-4 md:px-10">
        <div className="flex-1">
          <a href="#home" className="text-xl font-extrabold tracking-tight text-orange-600 md:text-2xl">
            <span className="mr-2">☁</span>HAZE AWARE
          </a>
        </div>

        <nav className="hidden md:flex">
          <ul className="menu menu-horizontal gap-1 px-1 font-medium">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Haze</a></li>
            <li><a href="#causes">Causes</a></li>
            <li><a href="#safety">Safety Tips</a></li>
          </ul>
        </nav>

        <div className="dropdown dropdown-end md:hidden">
          <button tabIndex={0} className="btn btn-ghost btn-circle text-xl" aria-label="Open navigation">
            ☰
          </button>
          <ul tabIndex={0} className="menu dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-xl">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Haze</a></li>
            <li><a href="#causes">Causes</a></li>
            <li><a href="#safety">Safety Tips</a></li>
          </ul>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="haze-hero">
          <div className="hero min-h-[570px] px-5 py-16 md:min-h-[650px]">
            <div className="hero-content w-full max-w-6xl justify-start text-left text-white">
              <div className="max-w-2xl">
                <div className="badge badge-warning badge-outline mb-5 px-4 py-4 font-semibold tracking-widest">
                  BREATHE SMART. STAY SAFE.
                </div>

                <h1 className="text-5xl font-black leading-tight md:text-7xl">
                  When the Air
                  <span className="block text-orange-400">Turns Grey.</span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-8 text-gray-200 md:text-lg">
                  Haze is more than just a cloudy sky. Understand what
                  causes it, discover its impact on our health, and learn
                  how we can protect ourselves and our environment.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#about" className="btn border-none bg-orange-500 text-white hover:bg-orange-600">
                    Discover Haze <span>→</span>
                  </a>
                  <a href="#safety" className="btn btn-outline border-white text-white hover:border-white hover:bg-white hover:text-gray-900">
                    Stay Protected
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <div className="badge badge-lg border-white/30 bg-white/10 py-4 text-white">
                    🌍 Environmental Awareness
                  </div>
                  <div className="badge badge-lg border-white/30 bg-white/10 py-4 text-white">
                    💚 Health First
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="about" className="px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <div className="badge badge-warning badge-outline mb-4">
                UNDERSTAND THE PROBLEM
              </div>

              <h2 className="text-3xl font-extrabold md:text-5xl">
                What Is Haze?
              </h2>

              <p className="mt-5 leading-8 text-base-content/70">
                Haze occurs when tiny particles and pollutants accumulate
                in the atmosphere, reducing visibility and potentially
                affecting human health and the environment.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <article className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="rounded-2xl bg-orange-100 p-4 text-4xl">🌫️</div>
                  <h3 className="card-title mt-3">Reduced Visibility</h3>
                  <p className="text-base-content/70">
                    Airborne particles scatter light, making distant objects
                    appear less clear and the sky look hazy.
                  </p>
                </div>
              </article>

              <article className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="rounded-2xl bg-orange-100 p-4 text-4xl">🫁</div>
                  <h3 className="card-title mt-3">Health Risks</h3>
                  <p className="text-base-content/70">
                    Fine particles can irritate the respiratory system
                    and worsen existing heart or lung conditions.
                  </p>
                </div>
              </article>

              <article className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="rounded-2xl bg-orange-100 p-4 text-4xl">🌱</div>
                  <h3 className="card-title mt-3">Environmental Impact</h3>
                  <p className="text-base-content/70">
                    Air pollution can affect plants, wildlife, ecosystems,
                    and the quality of our surroundings.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CAUSES */}
        <section id="causes" className="bg-base-200 px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="badge badge-warning badge-outline mb-4">
                WHY DOES IT HAPPEN?
              </div>
              <h2 className="text-3xl font-extrabold md:text-5xl">
                Common Causes of Haze
              </h2>
              <p className="mx-auto mt-5 max-w-2xl leading-8 text-base-content/70">
                Human activities, fires, and weather conditions can all
                influence the severity and duration of haze.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {hazeCauses.map((cause) => (
                <article key={cause.title} className="card bg-base-100 shadow-md">
                  <div className="card-body">
                    <div className="mb-2 text-5xl">{cause.icon}</div>
                    <h3 className="card-title">{cause.title}</h3>
                    <p className="leading-7 text-base-content/70">
                      {cause.description}
                    </p>
                    <div className="card-actions mt-3">
                      <div className="badge badge-outline">{cause.tag}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="alert mt-8 border border-orange-200 bg-orange-50 text-gray-800">
              <span className="text-2xl">💡</span>
              <div>
                <h3 className="font-bold">Did you know?</h3>
                <p className="text-sm">
                  Wind and weather conditions can transport smoke over long
                  distances, causing haze far from its original source.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY TIPS */}
        <section id="safety" className="px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <div className="badge badge-warning badge-outline mb-4">
                YOUR HEALTH MATTERS
              </div>
              <h2 className="text-3xl font-extrabold md:text-5xl">
                Stay Safe During Haze
              </h2>
              <p className="mt-5 leading-8 text-base-content/70">
                A few precautions can help reduce exposure to polluted air.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {safetyTips.map((tip, index) => (
                <article key={tip.title} className="card border border-base-300 bg-base-100">
                  <div className="card-body">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{tip.icon}</span>
                      <span className="badge badge-ghost">0{index + 1}</span>
                    </div>
                    <h3 className="card-title mt-3 text-lg">{tip.title}</h3>
                    <p className="text-sm leading-7 text-base-content/70">
                      {tip.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="alert alert-warning mt-10">
              <span className="text-2xl">⚠️</span>
              <div>
                <h3 className="font-bold">Stay informed</h3>
                <p className="text-sm">
                  Follow official air quality advisories, particularly if
                  you have asthma or another heart or lung condition.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="https://apims.doe.gov.my/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-none bg-orange-500 text-white hover:bg-orange-600"
              >
                Check Malaysia's Air Quality ↗
              </a>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="bg-neutral px-5 py-20 text-center text-neutral-content md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 text-5xl">🌏</div>
            <h2 className="text-3xl font-extrabold md:text-5xl">
              Clean Air Starts With Us
            </h2>
            <p className="mt-6 leading-8 text-neutral-content/70">
              Avoid open burning, reduce unnecessary vehicle use, and spread
              awareness about air pollution. Every responsible action helps
              build a healthier environment.
            </p>
            <a href="#causes" className="btn mt-7 border-none bg-orange-500 text-white hover:bg-orange-600">
              Learn How You Can Help
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer footer-center bg-base-300 p-8 text-base-content">
        <aside>
          <a href="#home" className="text-xl font-extrabold text-orange-600">
            ☁ HAZE AWARE
          </a>
          <p>Learn. Protect. Breathe.</p>
          <p className="text-sm opacity-60">
            © 2026 Haze Aware. Educational awareness project.
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default App

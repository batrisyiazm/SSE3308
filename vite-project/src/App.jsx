import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('Home')

  const challenges = [
    {
      title: 'Drink 6 glasses of water',
      progress: 4,
      total: 6,
      icon: '💧',
      reward: '+50 XP',
    },
    {
      title: 'Complete a healthy meal quiz',
      progress: 1,
      total: 1,
      icon: '🥗',
      reward: '+100 XP',
    },
    {
      title: 'Walk for 20 minutes',
      progress: 10,
      total: 20,
      icon: '🚶',
      reward: '+75 XP',
    },
  ]

  const modules = [
    {
      title: 'Healthy Eating',
      description: 'Learn how to build a balanced plate.',
      icon: '🥗',
      color: 'bg-green-100',
    },
    {
      title: 'Stay Hydrated',
      description: 'Discover why water matters.',
      icon: '💧',
      color: 'bg-blue-100',
    },
    {
      title: 'Move Your Body',
      description: 'Fun activities to keep you active.',
      icon: '🏃',
      color: 'bg-orange-100',
    },
  ]

  return (
    <div className="min-h-screen bg-base-200 text-base-content">

      {/* NAVBAR */}
      <div className="navbar bg-base-100 shadow-sm px-6 lg:px-12 sticky top-0 z-50">
        
        <div className="flex-1">
          <a className="text-2xl font-bold text-primary">
            GrowWise 🌱
          </a>
        </div>

        <div className="hidden md:flex gap-2">
          {['Home', 'Learn', 'Challenges', 'Achievements'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveTab(item)}
              className={`btn btn-ghost ${
                activeTab === item ? 'text-primary' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex-none gap-3">

          {/* XP */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">1,250 XP</span>
          </div>

          {/* Notification */}
          <button className="btn btn-circle btn-ghost">
            🔔
          </button>

          {/* Avatar */}
          <div className="avatar placeholder">
            <div className="bg-primary text-primary-content rounded-full w-10">
              <span>B</span>
            </div>
          </div>

        </div>
      </div>


      {/* MAIN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        {/* WELCOME */}
        <section className="mb-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div>
              <p className="text-base-content/60">
                Good morning 👋
              </p>

              <h1 className="text-4xl font-bold mt-1">
                Hi, Batrisyia!
              </h1>

              <p className="text-base-content/60 mt-2">
                Ready to become healthier today?
              </p>
            </div>

            {/* LEVEL CARD */}
            <div className="card bg-primary text-primary-content shadow-lg w-full md:w-80">
              <div className="card-body">

                <div className="flex justify-between">
                  <div>
                    <p className="text-sm opacity-80">
                      CURRENT LEVEL
                    </p>

                    <h2 className="text-2xl font-bold">
                      Health Explorer 🌟
                    </h2>
                  </div>

                  <div className="text-4xl">
                    🌱
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span>1,250 XP</span>
                    <span>2,000 XP</span>
                  </div>

                  <progress
                    className="progress progress-warning w-full"
                    value="1250"
                    max="2000"
                  />
                </div>

              </div>
            </div>

          </div>

        </section>


        {/* STATS */}
        <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          <div className="stat bg-base-100 rounded-2xl shadow-sm">
            <div className="stat-figure text-3xl">🔥</div>
            <div className="stat-title">Daily Streak</div>
            <div className="stat-value text-orange-500">7</div>
            <div className="stat-desc">days in a row</div>
          </div>

          <div className="stat bg-base-100 rounded-2xl shadow-sm">
            <div className="stat-figure text-3xl">💧</div>
            <div className="stat-title">Hydration</div>
            <div className="stat-value text-blue-500">67%</div>
            <div className="stat-desc">4 / 6 glasses</div>
          </div>

          <div className="stat bg-base-100 rounded-2xl shadow-sm">
            <div className="stat-figure text-3xl">🏆</div>
            <div className="stat-title">Achievements</div>
            <div className="stat-value text-yellow-500">12</div>
            <div className="stat-desc">badges unlocked</div>
          </div>

          <div className="stat bg-base-100 rounded-2xl shadow-sm">
            <div className="stat-figure text-3xl">❤️</div>
            <div className="stat-title">Health Score</div>
            <div className="stat-value text-red-500">82</div>
            <div className="stat-desc">Great progress!</div>
          </div>

        </section>


        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">

            {/* DAILY CHALLENGES */}
            <section className="card bg-base-100 shadow-sm">

              <div className="card-body">

                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="card-title text-2xl">
                      🎯 Daily Challenges
                    </h2>

                    <p className="text-base-content/60">
                      Complete activities and earn XP!
                    </p>
                  </div>

                  <button className="btn btn-sm btn-primary">
                    View All
                  </button>
                </div>

                <div className="space-y-4 mt-4">

                  {challenges.map((challenge, index) => {

                    const percentage =
                      (challenge.progress / challenge.total) * 100

                    return (
                      <div
                        key={index}
                        className="border border-base-300 rounded-xl p-4"
                      >

                        <div className="flex items-center gap-4">

                          <div className="text-3xl">
                            {challenge.icon}
                          </div>

                          <div className="flex-1">

                            <div className="flex justify-between gap-2">

                              <h3 className="font-semibold">
                                {challenge.title}
                              </h3>

                              <span className="badge badge-warning">
                                {challenge.reward}
                              </span>

                            </div>

                            <div className="flex items-center gap-3 mt-2">

                              <progress
                                className="progress progress-primary flex-1"
                                value={percentage}
                                max="100"
                              />

                              <span className="text-sm whitespace-nowrap">
                                {challenge.progress}/{challenge.total}
                              </span>

                            </div>

                          </div>

                        </div>

                      </div>
                    )
                  })}

                </div>

              </div>

            </section>


            {/* LEARNING MODULES */}
            <section>

              <div className="flex justify-between items-center mb-4">

                <div>
                  <h2 className="text-2xl font-bold">
                    📚 Learn & Explore
                  </h2>

                  <p className="text-base-content/60">
                    Choose a topic and start learning
                  </p>
                </div>

                <button className="btn btn-ghost">
                  See all →
                </button>

              </div>


              <div className="grid md:grid-cols-3 gap-4">

                {modules.map((module, index) => (

                  <div
                    key={index}
                    className="card bg-base-100 shadow-sm hover:shadow-lg transition cursor-pointer"
                  >

                    <div className="card-body">

                      <div
                        className={`w-16 h-16 ${module.color} rounded-2xl flex items-center justify-center text-4xl`}
                      >
                        {module.icon}
                      </div>

                      <h3 className="card-title mt-2">
                        {module.title}
                      </h3>

                      <p className="text-sm text-base-content/60">
                        {module.description}
                      </p>

                      <div className="card-actions justify-end mt-2">
                        <button className="btn btn-primary btn-sm">
                          Start →
                        </button>
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </section>

          </div>


          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            {/* HYDRATION */}
            <section className="card bg-base-100 shadow-sm">

              <div className="card-body">

                <h2 className="card-title">
                  💧 Hydration
                </h2>

                <div className="flex justify-center py-4">

                  <div className="radial-progress text-info text-2xl font-bold"
                    style={{ '--value': 67 }}
                    role="progressbar"
                  >
                    67%
                  </div>

                </div>

                <p className="text-center text-base-content/60">
                  Keep drinking water throughout the day!
                </p>

                <button className="btn btn-info text-white mt-2">
                  + Add Water
                </button>

              </div>

            </section>


            {/* AI RECOMMENDATION */}
            <section className="card bg-gradient-to-br from-primary to-secondary text-primary-content shadow-lg">

              <div className="card-body">

                <div className="flex items-center gap-3">

                  <div className="text-4xl">
                    🤖
                  </div>

                  <div>
                    <h2 className="card-title">
                      AI Coach
                    </h2>

                    <p className="text-sm opacity-80">
                      Personalized for you
                    </p>
                  </div>

                </div>

                <div className="bg-white/10 rounded-xl p-4 mt-3">

                  <p className="text-sm leading-relaxed">
                    You are doing great! 🌟 Try adding more
                    vegetables to your meals today and keep
                    your hydration above 70%.
                  </p>

                </div>

                <button className="btn btn-warning mt-3">
                  View Recommendations
                </button>

              </div>

            </section>


            {/* ACHIEVEMENTS */}
            <section className="card bg-base-100 shadow-sm">

              <div className="card-body">

                <div className="flex justify-between items-center">

                  <h2 className="card-title">
                    🏅 Recent Badges
                  </h2>

                  <button className="text-primary text-sm">
                    View all
                  </button>

                </div>

                <div className="flex justify-around py-4">

                  <div className="text-center">
                    <div className="text-4xl">🔥</div>
                    <p className="text-xs mt-1">
                      7 Day Streak
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl">💧</div>
                    <p className="text-xs mt-1">
                      Hydrated
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl">🥗</div>
                    <p className="text-xs mt-1">
                      Healthy Eater
                    </p>
                  </div>

                </div>

              </div>

            </section>

          </div>

        </div>

      </main>


      {/* MOBILE NAVIGATION */}
      <div className="btm-nav md:hidden bg-base-100">

        {['Home', 'Learn', 'Challenges', 'Achievements'].map((item) => (

          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={activeTab === item ? 'active' : ''}
          >
            <span>
              {item === 'Home' && '🏠'}
              {item === 'Learn' && '📚'}
              {item === 'Challenges' && '🎯'}
              {item === 'Achievements' && '🏆'}
            </span>

            <span className="text-xs">
              {item}
            </span>

          </button>

        ))}

      </div>

    </div>
  )
}

export default App
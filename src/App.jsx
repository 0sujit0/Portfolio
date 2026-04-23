import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

import { Badcode } from './pages/projects/Badcode'
import { Nykaa } from './pages/projects/Nykaa'
import { Momentum } from './pages/projects/Momentum'
import { UberReserve } from './pages/projects/UberReserve'
import { Zomato } from './pages/projects/Zomato'
import { Blinkit } from './pages/projects/Blinkit'
import { BlinkitSubscription } from './pages/projects/BlinkitSubscription'
import { MealPlanner } from './pages/projects/MealPlanner'

function MainPortfolio() {
  return (
    <div className="flex flex-col min-h-screen pt-[60px]">
      <Nav />
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/projects/badcode" element={<Badcode />} />
        <Route path="/projects/nykaa-fashion-conversion" element={<Nykaa />} />
        <Route path="/projects/momentum" element={<Momentum />} />
        <Route path="/projects/uber-reserve" element={<UberReserve />} />
        <Route path="/projects/zomato-analytics" element={<Zomato />} />
        <Route path="/projects/blinkit-imported-foods" element={<Blinkit />} />
        <Route path="/projects/blinkit-subscriptions" element={<BlinkitSubscription />} />
        <Route path="/projects/meal-planning" element={<MealPlanner />} />
        {/* Fallback pattern for unstructured projects */}
        <Route path="/projects/:slug" element={
          <div className="flex flex-col min-h-screen pt-[60px]">
            <Nav />
            <main className="flex-1 flex flex-col items-center justify-center py-24">
               <div className="text-stone-gray mb-4">Project detail page placeholder</div>
               <a href="/" className="text-terracotta underline">Return home</a>
            </main>
            <Footer />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App

import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load below-the-fold components
const Showcase = lazy(() => import("./components/Showcase"));
const Benefits = lazy(() => import("./components/Benefits"));
const Consultation = lazy(() => import("./components/Consultation"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingCTA = lazy(() => import("./components/FloatingCTA"));

function App() {
  return (
    <div className="min-h-screen font-sans text-text-main dark:text-gray-50 bg-bg-body dark:bg-slate-900 overflow-x-hidden antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Suspense
          fallback={
            <div className="h-96 md:h-[500px] bg-slate-50 dark:bg-slate-800/50 animate-pulse rounded-3xl mx-6 my-12" />
          }
        >
          <Showcase />
          <Benefits />
          <Consultation />
          <Pricing />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingCTA />
      </Suspense>
    </div>
  );
}

export default App;

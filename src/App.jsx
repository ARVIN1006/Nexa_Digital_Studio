import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmoothScroll from "./components/SmoothScroll";

// Lazy load below-the-fold components
const Showcase = lazy(() => import("./components/Showcase"));
const Benefits = lazy(() => import("./components/Benefits"));
const Consultation = lazy(() => import("./components/Consultation"));
const Pricing = lazy(() => import("./components/Pricing"));
const FAQ = lazy(() => import("./components/FAQ"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const FloatingCTA = lazy(() => import("./components/FloatingCTA"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

import { SiteProvider } from "./context/SiteContext";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense
          fallback={
            <div className="space-y-24 py-24">
              <div className="container mx-auto px-6 h-96 bg-gray-100 dark:bg-slate-800/50 animate-pulse rounded-[2rem]" />
              <div className="container mx-auto px-6 h-96 bg-gray-100 dark:bg-slate-800/50 animate-pulse rounded-[2rem]" />
            </div>
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
    </>
  );
}

function App() {
  return (
    <SiteProvider>
      <SmoothScroll />
      <div className="min-h-screen font-sans text-text-main dark:text-gray-50 bg-bg-body dark:bg-slate-900 overflow-x-hidden antialiased selection:bg-primary/20 selection:text-primary transition-colors duration-300">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/privacy-policy"
              element={
                <Suspense fallback={null}>
                  <PrivacyPolicy />
                </Suspense>
              }
            />
            <Route
              path="/terms"
              element={
                <Suspense fallback={null}>
                  <Terms />
                </Suspense>
              }
            />
          </Routes>
        </Router>
      </div>
    </SiteProvider>
  );
}

export default App;

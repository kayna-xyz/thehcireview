"use client"

import { useState } from "react"
import { X, Newspaper, FileText, Mic } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Banner from "@/components/banner"
import Footer from "@/components/footer"

export default function Home() {
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Banner />
      <div className="pt-[52px]">
        <Header />
      </div>
      
      <main className="flex-1">
        {/* Hero - Magazine Showcase with Apple-style effects */}
        <section className="py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Magazine Cover with blur backdrop effect */}
              <div className="relative flex justify-center lg:justify-start">
                {/* Blur backdrop container */}
                <div className="relative group">
                  {/* Blurred background layer */}
                  <div className="absolute -inset-8 bg-white/40 backdrop-blur-[20px] rounded-lg" />
                  
                  {/* Main magazine */}
                  <div className="relative z-10 p-4 transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1">
                    <img 
                      src="/images/magazine-cover.png"
                      alt="Columbia Tech & Policy Review - Fall 2026 Inaugural Issue"
                      className="w-full max-w-[340px] drop-shadow-[0_20px_40px_rgba(128,128,128,0.5)]"
                    />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center lg:text-left">
                <p className="font-mono text-sm uppercase tracking-[0.2em] text-brand-button mb-4">
                  Fall 2026 Inaugural Issue
                </p>
                <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
                  Columbia Tech & Policy Review
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  A biannual independent review journal focused on technological development and global governance.
                </p>
                <p className="font-mono text-lg text-foreground font-medium mb-8">
                  For those building what comes next.
                </p>
                <Link
                  href="/submit"
                  className="inline-block px-8 py-3 bg-brand-button text-brand-button-foreground font-mono font-medium hover:bg-brand-button/90 transition-all duration-300"
                >
                  Submit a Pitch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About CTPR */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              About CTPR
            </h2>
            <h3 className="font-mono text-3xl md:text-4xl font-semibold text-foreground mb-8 text-balance">
              What&apos;s CTPR?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              CTPR is a biannual independent review journal focused on technological development and global governance. Rooted in Columbia University&apos;s global perspective, we conduct in-depth semester-long analyses of AI evolution and the tensions between technological progress and global policy. CTPR is committed to providing readers with the underlying logic that transcends the surface of news coverage.
            </p>
          </div>
        </section>

        {/* Research Focus 2026 */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
              2026 Research Focus
            </h2>
            <h3 className="font-mono text-3xl md:text-4xl font-semibold text-foreground mb-8 text-balance">
              AI, Energy, and the New GeoTechnological Competition
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond building AI, what comes next? This year, we examine the shift in 2026, AI as infrastructure, energy as constraint, frontline voices from founders, and industry observations that define the next chapter of technological development.
            </p>
          </div>
        </section>

        {/* Content Offerings */}
        <section className="py-24 px-6 md:px-12 lg:px-24 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
              What We Publish
            </h2>
            <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg font-mono">
              Research and analysis for readers who value judgment over speed
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Weekly */}
              <div className="group bg-background border border-brand-button p-8 hover:bg-brand-button/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-button flex items-center justify-center flex-shrink-0">
                    <Newspaper className="w-5 h-5 text-background" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-button font-medium">
                    Weekly
                  </span>
                </div>
                <h3 className="font-mono text-xl font-semibold text-foreground mb-4 leading-tight">
                  Five Stories Shaping the Future
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  A weekly brief covering the five developments that truly matter—focusing on structural shifts across technology and markets, including major research breakthroughs, policy signals, and what they mean for investors and builders.
                </p>
              </div>

              {/* Biweekly */}
              <div className="group bg-background border border-brand-button p-8 hover:bg-brand-button/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-button flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-background" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-button font-medium">
                    Biweekly
                  </span>
                </div>
                <h3 className="font-mono text-xl font-semibold text-foreground mb-4 leading-tight">
                  Deep Tech & Policy Analysis
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  In-depth research and commentary aligned with each semester&apos;s core themes. This term, we focus on AI, energy, and geopolitics, producing analysis that meets the standards of leading think tanks and policy institutions.
                </p>
              </div>

              {/* Monthly */}
              <div className="group bg-background border border-brand-button p-8 hover:bg-brand-button/5 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-button flex items-center justify-center flex-shrink-0">
                    <Mic className="w-5 h-5 text-background" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-brand-button font-medium">
                    Monthly
                  </span>
                </div>
                <h3 className="font-mono text-xl font-semibold text-foreground mb-4 leading-tight">
                  Columbia Founders Interviews
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  Conversations with Columbia alumni and affiliates on building the next generation of technology companies or shaping policy decisions—featuring early-stage builders, experienced operators, and public company founders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-white/40 backdrop-blur-[20px]"
            onClick={() => setShowModal(false)}
          />
          
          <div className="relative flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 p-2 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <img 
              src="/images/magazine-cover.png"
              alt="Columbia Tech & Policy Review - Fall 2026 Inaugural Issue"
              className="w-full max-w-[320px] drop-shadow-[0_20px_40px_rgba(128,128,128,0.5)] mb-8"
            />

            <p className="text-center text-foreground font-medium mb-6">
              26 Fall Inaugural Issue in preparing
            </p>

            <Link
              href="/submit"
              className="block text-center px-8 py-3 bg-brand-button text-brand-button-foreground font-mono font-medium hover:bg-brand-button/90 transition-colors"
            >
              Submit a Pitch
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

"use client"

import { useState } from "react"
import { X } from "lucide-react"
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
                      alt="The HCI Review - Fall 2026 Inaugural Issue"
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
                  The HCI Review
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  The first student-led publication on human–computer interaction in the US.
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
              About The HCI Review
            </h2>
            <h3 className="font-mono text-3xl md:text-4xl font-semibold text-foreground mb-8 text-balance">
              What&apos;s The HCI Review?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The HCI Review is a biannual independent review journal focused on human-computer interaction and emerging technology. Rooted in Columbia University&apos;s global perspective, we conduct in-depth analyses of HCI evolution and product analysis. The HCI Review is committed to providing readers with an outlier mode of thinking that allows us to navigate the post-AI era.
            </p>
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
              alt="The HCI Review - Fall 2026 Inaugural Issue"
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

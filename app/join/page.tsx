"use client"

import Header from "@/components/header"
import Banner from "@/components/banner"
import Footer from "@/components/footer"

export default function JoinUs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Banner />
      <div className="pt-[52px]">
        <Header />
      </div>
      
      <main className="flex-1">
        {/* Hero */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 text-balance">
              Join Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We&apos;re looking for passionate individuals who want to shape the conversation around HCI, emerging technology, and product innovation.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Open Positions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-background p-6 border border-brand-button">
                <h3 className="font-mono text-xl font-semibold text-foreground mb-2">Editor</h3>
                <p className="text-sm text-brand-button mb-2">For US local students</p>
                <p className="text-muted-foreground">
                  Review and edit submissions, ensure editorial quality, and help shape our publication standards. No AI or HCI experience needed.
                </p>
              </div>
              
              <div className="bg-background p-6 border border-brand-button">
                <h3 className="font-mono text-xl font-semibold text-foreground mb-2">HCI Researcher (Industry)</h3>
                <p className="text-muted-foreground">
                  Analyze the HCI industry, emerging tech products, market trends, and product innovations.
                </p>
              </div>

              <div className="bg-background p-6 border border-brand-button">
                <h3 className="font-mono text-xl font-semibold text-foreground mb-2">HCI Researcher (Research)</h3>
                <p className="text-muted-foreground">
                  Conduct quantitative and qualitative user research. Experience with user research methodologies preferred.
                </p>
              </div>

              <div className="bg-background p-6 border border-brand-button">
                <h3 className="font-mono text-xl font-semibold text-foreground mb-2">Social Media Specialist</h3>
                <p className="text-muted-foreground">
                  Operate our media presence across platforms including Instagram, LinkedIn, X, and more.
                </p>
              </div>

              <div className="bg-background p-6 border border-brand-button">
                <h3 className="font-mono text-xl font-semibold text-foreground mb-2">Vibe-Coding Engineer</h3>
                <p className="text-muted-foreground">
                  Build and maintain our digital presence using modern tools like Vercel, Claude Code, and other AI-assisted development platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="pb-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground mt-8">
              Interested in joining The HCI Review? Please send us a message at{" "}
              <a
                href="mailto:kh3443@columbia.edu"
                className="text-brand-button hover:underline"
              >
                kh3443@columbia.edu
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

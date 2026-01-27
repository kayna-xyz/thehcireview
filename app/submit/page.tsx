"use client"

import React, { useState, useRef } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Upload, Clock, Users, FileText, CheckCircle, X } from "lucide-react"

export default function SubmitPage() {
  const [dragActive, setDragActive] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    affiliation: "",
    graduateYear: "",
    email: "",
    articleDescription: ""
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0])
    }
  }

  const removeFile = () => {
    setUploadedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    const subject = encodeURIComponent("CTPR Submission - " + formData.name)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nAffiliation: ${formData.affiliation}\nGraduate Year: ${formData.graduateYear}\nEmail: ${formData.email}\n\nArticle Description:\n${formData.articleDescription}`
    )
    window.location.href = `mailto:kh3443@columbia.edu?subject=${subject}&body=${body}`
  }

  const topics = [
    "Artificial intelligence as infrastructure",
    "Energy, compute, and technological constraints",
    "U.S.–China competition and geo-technological rivalry",
    "Industry analysis across companies, business models, or products",
    "First-hand perspectives from builders, researchers, and operators"
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-mono">
              Submit a Pitch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Columbia Tech & Policy Review (CTPR) accepts pitches and submissions on a rolling basis. We welcome contributions from students, faculty, researchers, founders, and community stakeholders working at the intersection of technology, policy, and global competition.
            </p>
          </div>

          {/* 2026 Inaugural Issue */}
          <section className="mb-16 p-8 bg-background border border-brand-button">
            <h2 className="font-mono text-sm uppercase tracking-[0.15em] text-brand-button mb-4">
              2026 Inaugural Issue
            </h2>
            <p className="text-foreground mb-6 leading-relaxed font-mono">
              For our 2026 Inaugural Issue, we are particularly interested in work related to:
            </p>
            <ul className="space-y-3">
              {topics.map((topic, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-button mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{topic}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-brand-button/30 space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Selected pieces</span> may be featured in our physical inaugural issue, subject to thematic fit and editorial planning.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">All accepted submissions</span> are guaranteed publication on our website within two weeks of final approval.
              </p>
            </div>
          </section>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Review Timeline */}
            <div className="p-6 bg-background border border-brand-button">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-brand-button" />
                <h3 className="font-mono text-sm uppercase tracking-[0.1em] text-foreground font-medium">
                  Review Timeline
                </h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium min-w-[70px]">1 week</span>
                  <span>Initial editorial decision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium min-w-[70px]">2 weeks</span>
                  <span>Publication after final edits</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground font-medium min-w-[70px]">Rolling</span>
                  <span>Submissions reviewed continuously</span>
                </li>
              </ul>
            </div>

            {/* Who Can Submit */}
            <div className="p-6 bg-background border border-brand-button">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-brand-button" />
                <h3 className="font-mono text-sm uppercase tracking-[0.1em] text-foreground font-medium">
                  Who Can Submit
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Columbia University affiliates</li>
                <li>Independent researchers & founders</li>
                <li>Industry practitioners connected to Columbia</li>
                <li>Community members with relevant perspectives</li>
              </ul>
            </div>

            {/* Guidelines */}
            <div className="p-6 bg-background border border-brand-button">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-brand-button" />
                <h3 className="font-mono text-sm uppercase tracking-[0.1em] text-foreground font-medium">
                  Guidelines
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pre-written submissions under 2,000 words</li>
                <li>All pieces undergo editorial revision</li>
                <li>Pitches, drafts, and completed essays welcome</li>
              </ul>
            </div>
          </div>

          {/* Submit Section */}
          <section className="border-t border-border pt-16">
            <h2 className="font-mono text-2xl font-semibold text-foreground mb-6">
              Submit Your Pitch
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed font-mono">
              Fill out the form below with your details and a brief description of your proposed article.
            </p>

            {/* Form Fields */}
            <div className="space-y-6 mb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 font-mono">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-brand-button text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-button/70"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 font-mono">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-brand-button text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-button/70"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="affiliation" className="block text-sm font-medium text-foreground mb-2 font-mono">
                    Affiliation *
                  </label>
                  <input
                    type="text"
                    id="affiliation"
                    name="affiliation"
                    value={formData.affiliation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-brand-button text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-button/70"
                    placeholder="Columbia College, SIPA, etc."
                  />
                </div>
                <div>
                  <label htmlFor="graduateYear" className="block text-sm font-medium text-foreground mb-2 font-mono">
                    Graduate Year
                  </label>
                  <input
                    type="text"
                    id="graduateYear"
                    name="graduateYear"
                    value={formData.graduateYear}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-brand-button text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-button/70"
                    placeholder="e.g., 2026"
                  />
                </div>
              </div>

              <div>
<label htmlFor="articleDescription" className="block text-sm font-medium text-foreground mb-2 font-mono">
                    Article Description (1-2 sentences) *
                  </label>
                <textarea
                  id="articleDescription"
                  name="articleDescription"
                  value={formData.articleDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-brand-button text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-brand-button/70 resize-none"
                  placeholder="Briefly describe your proposed article topic and angle..."
                />
              </div>
            </div>

            {/* File Upload Area */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">Attach your document (optional):</p>
              <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative border-2 border-dashed transition-colors p-12 text-center ${
                  dragActive
                    ? "border-brand-button bg-brand-button/5"
                    : "border-brand-button/50 hover:border-brand-button"
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.txt,.md"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {uploadedFile ? (
                  <div className="flex items-center justify-center gap-4">
                    <CheckCircle className="w-6 h-6 text-brand-button" />
                    <span className="text-foreground font-medium">{uploadedFile.name}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        removeFile()
                      }}
                      className="p-1 hover:bg-secondary rounded-full transition-colors"
                    >
                      <X className="w-4 h-4 text-muted-foreground" />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      <span className="text-foreground font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      PDF, DOC, DOCX, TXT, or MD
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="px-8 py-4 border border-brand-button bg-background text-foreground font-mono font-medium hover:bg-brand-button/5 transition-colors"
            >
              Submit
            </button>
            <p className="mt-4 text-muted-foreground">
              or send your pitch to{" "}
              <a
                href="mailto:kh3443@columbia.edu"
                className="text-brand-button hover:underline"
              >
                kh3443@columbia.edu
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

"use client"

import React from "react"

import Link from "next/link"
import { useState } from "react"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const FORM_ACTION_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScZIqEWGSGZwGKwdE_yh4CIibLFDMaT9JMKoqIFZyZwERu2bg/formResponse"

  const ENTRY_EMAIL = "entry.852221972"
  const ENTRY_CONSENT = "entry.1439614941"
  const CONSENT_VALUE = "Yes"

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !consent) return

    setStatus("sending")

    try {
      const data = new FormData()
      data.append(ENTRY_EMAIL, email.trim())
      data.append(ENTRY_CONSENT, CONSENT_VALUE)

      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      })

      setStatus("success")
      setEmail("")
      setConsent(false)
    } catch {
      setStatus("error")
    }
  }

  return (
    <footer className="mt-20 border-t border-border bg-background text-foreground">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 md:items-start">
          {/* Newsletter */}
          <div id="newsletter">
            <h3 className="font-mono text-[28px] font-semibold leading-tight">
              Subscribe to Our Newsletter
            </h3>

            <form onSubmit={submit} className="mt-10 max-w-xl">
              <label className="block font-mono text-[16px] font-medium">
                What's Your Email?
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                className="mt-4 w-full rounded-full border border-input bg-background px-5 py-3 text-[16px] outline-none focus:border-brand-button"
                placeholder="you@columbia.edu"
              />

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <label className="flex items-center gap-3 text-[16px] text-muted-foreground">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="h-4 w-4 rounded border-input accent-brand-button"
                  />
                  Yes, subscribe me to your newsletter.
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-fit bg-brand-button px-8 py-3 font-mono text-[16px] font-medium text-brand-button-foreground transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === "sending" ? "Submitting..." : "Subscribe"}
                </button>
              </div>

              {status === "success" && (
                <p className="mt-4 text-[16px] text-green-600">
                  Submitted! You're on the list.
                </p>
              )}
              {status === "error" && (
                <p className="mt-4 text-[16px] text-red-600">
                  Something went wrong. Try again.
                </p>
              )}
            </form>
          </div>

          {/* Links */}
          <div className="md:flex md:justify-end">
            <nav className="space-y-4 font-mono text-[16px] font-medium">
              <Link className="block hover:text-brand-button" href="/">
                Home
              </Link>
              <Link className="block hover:text-brand-button" href="/submit">
                Submit a Pitch
              </Link>
              <Link className="block hover:text-brand-button" href="/join">
                Join Us
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-border py-6 text-[16px] text-muted-foreground">
          © 2026 CTPR
        </div>
      </Container>
    </footer>
  )
}

"use client"

import { useEffect } from "react"

import { useState } from "react"

import { useSearchParams } from "next/navigation"

import { useRouter } from "next/navigation"

import React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Suspense } from "react"
import { Instagram, Linkedin } from "lucide-react"

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4">{children}</div>
}

function NavChip({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const active = pathname === href

  return (
    <Link
      href={href}
      className={
        "font-mono text-base transition " +
        (active
          ? "text-[#4AC3FF]"
          : "text-zinc-700 hover:text-zinc-900")
      }
    >
      {children}
    </Link>
  )
}

function HeaderContent() {
  return (
    <Container>
      {/* Top row */}
      <div className="flex items-start justify-between py-6">
        <div>
          <Link href="/">
            <h1 className="font-mono text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
              The HCI <br /> Review
            </h1>
          </Link>
        </div>

        <div className="flex flex-col items-end justify-between">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/columbiatechinsight/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:scale-105 hover:bg-zinc-100 hover:text-pink-600"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href="https://www.linkedin.com/company/columbiatechinsight/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:scale-105 hover:bg-zinc-100 hover:text-blue-600"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Category tags */}
          <div className="mt-4 flex flex-col gap-1 text-right text-[16px] leading-tight text-zinc-600">
            <span>Artificial Intelligence</span>
            <span>Human-Computer Interaction</span>
            <span>Robotics & Wearables</span>
            <span>Emerging Tech Markets</span>
          </div>
        </div>
      </div>

      {/* Nav + search */}
      <div className="flex flex-col gap-3 pb-6 pt-4 md:flex-row md:items-end md:justify-between">
        <nav className="flex gap-6">
          <NavChip href="/">Home</NavChip>
          <NavChip href="/submit">Submit a Pitch</NavChip>
          <NavChip href="/join">Join Us</NavChip>
        </nav>
      </div>
    </Container>
  )
}

export default function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white text-zinc-900">
      <Suspense fallback={<div className="h-[200px]" />}>
        <HeaderContent />
      </Suspense>
    </header>
  )
}

import Link from 'next/link'
import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_#061006,_#040404)]">
      <header className="py-4 px-6 border-b border-green-900">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-black flex items-center justify-center border border-green-600">
              <span className="text-neon font-mono">KX</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold hacker-accent">KamoXTech Kino</h1>
              <p className="text-sm text-gray-400">Kinolar olami — Dark · Hacker style</p>
            </div>
          </Link>
          <nav>
            <Link href="/" className="text-sm text-gray-300 hover:text-white mr-4">Home</Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">Admin</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-8">{children}</main>
      <footer className="py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} KamoXTech Kino</footer>
    </div>
  )
}

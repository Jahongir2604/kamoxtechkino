import Link from 'next/link'
import React from 'react'

export default function MovieCard({movie}:{movie:any}){
  return (
    <Link href={`/movie/${movie.slug}`} className="block card overflow-hidden rounded-md">
      <div className="relative">
        <img src={movie.poster} alt={movie.title} className="w-full h-48 object-cover" />
        <div className="absolute left-3 bottom-3 bg-black/60 px-2 py-1 rounded text-sm text-neon">{movie.year}</div>
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold">{movie.title}</h3>
        <p className="text-sm text-gray-400 mt-1 line-clamp-2">{movie.description}</p>
      </div>
    </Link>
  )
}

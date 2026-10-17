import React from 'react'

function getYouTubeId(url:string){
  try{
    const u = new URL(url)
    if(u.hostname.includes('youtu.be')) return u.pathname.slice(1)
    return u.searchParams.get('v') || ''
  }catch(e){
    return ''
  }
}

export default function Player({ url }:{url:string}){
  const id = getYouTubeId(url)
  const src = id ? `https://www.youtube.com/embed/${id}` : url
  return (
    <div className="w-full aspect-video bg-black rounded-md overflow-hidden">
      <iframe className="w-full h-full" src={src} title="player" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

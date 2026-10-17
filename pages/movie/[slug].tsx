import Layout from '../../components/Layout'
import data from '../../data/movies.json'
import Player from '../../components/Player'
import { useRouter } from 'next/router'

export default function Movie(){
  const router = useRouter()
  const { slug } = router.query
  const movie = data.find((m:any)=>m.slug===slug)
  if(!movie) return (
    <Layout>
      <div className="text-center py-20">Movie not found</div>
    </Layout>
  )

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Player url={movie.youtube} />
          <h2 className="text-2xl font-bold mt-4">{movie.title} <span className="text-sm text-gray-400">({movie.year})</span></h2>
          <p className="mt-2 text-gray-300">{movie.description}</p>
        </div>
        <aside className="card p-4">
          <h3 className="font-semibold">Details</h3>
          <ul className="mt-2 text-sm text-gray-300 leading-7">
            <li><strong>Genres:</strong> {movie.genres.join(', ')}</li>
            <li><strong>Language:</strong> {movie.language}</li>
            <li><strong>Slug:</strong> {movie.slug}</li>
          </ul>
        </aside>
      </div>
    </Layout>
  )
}

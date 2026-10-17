import Layout from '../components/Layout'
import MovieCard from '../components/MovieCard'
import data from '../data/movies.json'

export default function Home(){
  return (
    <Layout>
      <section>
        <h2 className="text-3xl font-bold hacker-accent">Yangi filmlar</h2>
        <p className="text-gray-400 mt-1">KamoXTech — kinolar olamiga xush kelibsiz</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {data.map((m:any)=> (
            <MovieCard key={m.slug} movie={m} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

 export default function Profile() {
  const { data, error } = useSWR('/books/632abccd26362f1889b51cb6', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <div>
      <h1>{data.data.title}</h1>
      <p>{data.data.bio}</p>
    </div>
  )
}
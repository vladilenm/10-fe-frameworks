import { useEffect, useRef, useState } from 'react'

function App() {
  const allUsers = useRef([])

  const [users, setUsers] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      allUsers.current = data
      setUsers(data)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    setUsers(
      allUsers.current.filter((u) =>
        u.name.toLowerCase().includes(input.toLowerCase())
      )
    )
  }, [input])
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App

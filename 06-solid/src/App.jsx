import { For, createSignal, onMount } from 'solid-js'

function App() {
  const [input, setInput] = createSignal('')
  const [users, setUsers] = createSignal([])

  const filteredUsers = () =>
    users().filter((u) => u.name.toLowerCase().includes(input().toLowerCase()))

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    setUsers(await res.json())
  })

  return (
    <>
      <input type="text" onInput={(e) => setInput(e.target.value)} />
      <ul>
        <For each={filteredUsers()}>{(user) => <li>{user.name}</li>}</For>
      </ul>
    </>
  )
}

export default App

import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'

interface IUser {
  id: number
  name: string
}

export default component$(() => {
  const input = useSignal('')
  const filteredUsers = useSignal<IUser[]>([])
  const users = useSignal<IUser[]>([])

  useVisibleTask$(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    users.value = (await res.json()) as IUser[]
  })

  useVisibleTask$(({ track }) => {
    const value = track(() => input.value)
    const allUsers = track(() => users.value)
    filteredUsers.value = allUsers.filter((u) =>
      u.name.toLowerCase().includes(value.toLowerCase())
    )
  })

  return (
    <>
      <input
        type="text"
        onInput$={(e) => (input.value = (e.target as HTMLInputElement).value)}
      />
      <ul>
        {filteredUsers.value.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  )
})

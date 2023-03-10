function app() {
  return {
    users: [],
    input: '',
    async fetchUsers() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      this.users = await res.json()
    },
    filteredUsers() {
      return this.users.filter((u) =>
        u.name.toLowerCase().includes(this.input.toLowerCase())
      )
    },
  }
}

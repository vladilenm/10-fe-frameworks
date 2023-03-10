const input = document.querySelector('input')
const ul = document.querySelector('ul')
let ALL_USERS

async function start() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  ALL_USERS = await res.json()
  render(ALL_USERS)
}

input.addEventListener('input', () => {
  render(
    ALL_USERS.filter((i) =>
      i.name.toLowerCase().includes(input.value.toLowerCase())
    )
  )
})

function render(data) {
  const html = data.map((i) => `<li>${i.name}</li>`).join('')
  ul.innerHTML = html
}

start()

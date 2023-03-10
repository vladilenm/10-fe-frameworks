const input = document.querySelector('input')
const ul = document.querySelector('ul')
let DATA

async function start() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  DATA = data.concat()
  render(data)
}

input.addEventListener('input', () => {
  if (input.value.length) {
    render(
      DATA.filter((i) =>
        i.name.toLowerCase().includes(input.value.toLowerCase())
      )
    )
  } else {
    render(DATA)
  }
})

function render(data) {
  const html = data.map((i) => `<li>${i.name}</li>`).join('')
  ul.innerHTML = html
}

start()

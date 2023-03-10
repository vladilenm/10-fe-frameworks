import { html, LitElement } from 'lit'

export class UsersFilter extends LitElement {
  static properties = {
    users: { type: Array },
    input: { type: String },
  }

  constructor() {
    super()
    this.input = ''
  }

  connectedCallback() {
    super.connectedCallback()
    this.fetchUsers()
  }

  async fetchUsers() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    this.users = await res.json()
  }

  render() {
    if (!this.users) return html`Loading...`
    return html`
      <input type="text" @input=${(e) => (this.input = e.target.value)} />
      <ul>
        ${this.users
          .filter((u) =>
            u.name.toLowerCase().includes(this.input.toLowerCase())
          )
          .map((u) => html`<li>${u.name}</li>`)}
      </ul>
    `
  }
}

customElements.define('users-filter', UsersFilter)

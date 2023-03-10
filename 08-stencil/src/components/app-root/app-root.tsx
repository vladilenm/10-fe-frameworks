import { Component, State, Watch, h } from '@stencil/core';

interface IUser {
  id: number;
  name: string;
}

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  users: IUser[] = [];
  @State() filteredUsers: IUser[] = [];
  @State() input = '';

  async componentDidLoad() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    this.users = await res.json();
    this.filteredUsers = this.users.concat();
  }

  @Watch('input')
  filterUsers(value: string) {
    this.filteredUsers = this.users.filter(u => u.name.toLowerCase().includes(value.toLowerCase()));
  }

  handleChange(event) {
    this.input = event.target.value;
  }

  render() {
    return (
      <div>
        <input type="text" onInput={event => this.handleChange(event)} />
        <ul>
          {this.filteredUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

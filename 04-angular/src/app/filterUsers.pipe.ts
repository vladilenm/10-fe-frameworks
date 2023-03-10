import { IUser } from './user.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers',
})
export class FilterUsers implements PipeTransform {
  transform(users: IUser[], value: string) {
    if (users.length === 0) return users;
    return users.filter((u) =>
      u.name.toLowerCase().includes(value.toLowerCase())
    );
  }
}

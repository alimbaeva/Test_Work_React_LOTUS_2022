import { IUser, ITimer } from '../type/types';

const path = 'https://63aeaa6fceaabafcf1802995.mockapi.io/test-work/te/users';
const pathTimer = 'https://63aeaa6fceaabafcf1802995.mockapi.io/test-work/te/timer';

export const api = {
  async getUsers() {
    try {
      const response = await fetch(path, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Failed get all users');
    }
  },
  async apdateUsers(data: IUser, id: string, boolean: boolean) {
    try {
      const response = await fetch(`${path}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          id: data.id,
          authentication: boolean,
          person: data.person,
          surname: data.surname,
          firstName: data.firstName,
          patronymic: data.patronymic,
          key: data.key,
          activities: data.activities,
          term: data.term,
          warranty: data.warranty,
          pay: data.pay,
          priceAll: data.priceAll,
          percent: data.percent,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Failed get all users');
    }
  },
};

export const apiTimer = {
  async getTimer() {
    try {
      const response = await fetch(pathTimer, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Failed get timer');
    }
  },
  async apdateTimer(data: ITimer) {
    try {
      console.log(`${path}/id`);
      const response = await fetch(`${path}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          id: data.id,
          minute: data.minute,
          second: data.second,
          millisecond: data.millisecond,
          boolean: data.boolean,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return await Promise.reject(new Error(response.statusText));
      }
    } catch (error) {
      throw new Error('Failed get timer');
    }
  },
};

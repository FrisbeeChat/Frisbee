import axios from 'axios';
import getFriends from '../pages/api/getFriends';

describe('Startup', () => {
    it('jest should run', () => {
      const sum = (x: number, y: number) => x + y;
      expect(sum(1, 2)).toBe(3);
    });
});

describe('Endpoint Tests', () => {
  it('should get all friends', async () => {
    const friends = await axios.get('http://localhost:3000/api/getFriends', {
      data: {username: 'ChosenOne'}
    })
    expect(friends.data.length).not.toBe(0);
    expect(friends.status).toBe(200);
  });

  it('should get all users', async () => {
    const users = await axios.get('http://localhost:3000/api/getUsers')
    expect(users.data.length).not.toBe(0);
    expect(users.status).toBe(200);
  });
});
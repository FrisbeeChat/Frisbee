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
    expect(friends.data.length).not.toEqual(0);
    expect(friends.status).toBe(200);
  });

  it('should get all users', async () => {
    const users = await axios.get('http://localhost:3000/api/getUsers')
    expect(users.data.length).not.toEqual(0);
    expect(users.status).toBe(200);
  });

  it('should get all messages', async () => {
    const messages = await axios.get('http://localhost:3000/api/getMessages', {
      data: {username: 'ChosenOne'}
    })
    expect(messages.data.length).not.toEqual(0);
    expect(messages.status).toBe(200);
  });

  it('should send a friend request, then be able to ignore it', async () => {
    // Get friend requests
    const before = await axios.get('http://localhost:3000/api/getFriendRequests', {
      data: {username: 'Chewy'}
    })
    // Send friend request from Anakin to Chewbacca
    await axios.get('http://localhost:3000/api/addUser', {
      data: {me: 'ChosenOne', them: 'Chewy'}
    })
    // Get friend requests again
    const after = await axios.get('http://localhost:3000/api/getFriendRequests', {
      data: {username: 'Chewy'}
    })
    // Ignore the friend request
    await axios.get('http://localhost:3000/api/ignoreRequest', {
      data: {me: 'Chewy', them: 'ChosenOne'}
    })
    // Get the request one more time
    const ignored = await axios.get('http://localhost:3000/api/getFriendRequests', {
      data: {username: 'Chewy'}
    })
    expect(after.data.length).toEqual(before.data.length + 1);
    expect(ignored.data.length).toEqual(before.data.length);
  });

  it('should accept a friend request, then delete the friend', async () => {
    // Get Anakin and Chewbacca's lists of friends
    const beforeAnakin = await axios.get('http://localhost:3000/api/getFriends', {
      data: {username: 'ChosenOne'}
    })
    const beforeChewbacca = await axios.get('http://localhost:3000/api/getFriends', {
      data: {username: 'Chewy'}
    })
    // Chewbacca adds Anakin as a friend
    await axios.get('http://localhost:3000/api/addUser', {
      data: {me: 'Chewy', them: 'ChosenOne'}
    })
    // Anakin accepts the friend request from Chewbacca
    await axios.get('http://localhost:3000/api/acceptFriend', {
      data: {me: 'ChosenOne', them: 'Chewy'}
    })
    // Get Anakin and Chewbacca's lists of friends after
    const afterAnakin = await axios.get('http://localhost:3000/api/getFriends', {
      data: {username: 'ChosenOne'}
    })
    const afterChewbacca = await axios.get('http://localhost:3000/api/getFriends', {
      data: {username: 'Chewy'}
    })
    // Delete the friendship
    await axios.get('http://localhost:3000/api/deleteFriend', {
      data: {me: 'ChosenOne', them: 'Chewy'}
    })
    expect(afterAnakin.data.length).toEqual(beforeAnakin.data.length + 1);
    expect(afterChewbacca.data.length).toEqual(beforeChewbacca.data.length + 1);
  });
});
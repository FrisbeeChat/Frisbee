import React from 'react';
import jest from 'jest';
import { cleanup, render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

import Login from '../components/login/login';
import Signup from '../components/login/signup';
import AllMessages from '../components/view/allMessages';
import Single from '../components/view/single';
import Send from '../components/send/send';
import Search from '../components/search/search';
import Message from '../components/message/message';
import Connections from '../components/connect/connections';
import UserCard from '../components/cards/userCard';
import RequestCard from '../components/cards/requestCard';
import Header from '../components/header/header';
import Settings from '../components/header/settings';

afterEach(cleanup);

describe('Startup', () => {
  it('jest should run', () => {
    const sum = (x: number, y: number) => x + y;
    expect(sum(6, 2)).toBe(8);
  })
});

describe('Snapshots', () => {
  it('login', () => {
    const res = shallow(<Login />);
    expect(res).toMatchSnapshot();
  });

  it('signup', () => {
    const res = shallow(<Signup />);
    expect(res).toMatchSnapshot();
  });

  it('all messages', () => {
    const res = shallow(<AllMessages />);
    expect(res).toMatchSnapshot();
  });

  it('single', () => {
    const res = shallow(<Single />);
    expect(res).toMatchSnapshot();
  });

  it('send', () => {
    const res = shallow(<Send />);
    expect(res).toMatchSnapshot();
  });

  it('seearch', () => {
    const res = shallow(<Search />);
    expect(res).toMatchSnapshot();
  });

  it('message', () => {
    const res = shallow(<Message />);
    expect(res).toMatchSnapshot();
  });

  it('connections', () => {
    const res = shallow(<Connections />);
    expect(res).toMatchSnapshot();
  });

  it('user card', () => {
    const res = shallow(<UserCard username='ChosenOne' first='Anakin' last='Skywalker' avatar='' sent={true} />);
    expect(res).toMatchSnapshot();
  });

  it('request card', () => {
    const ig = () => {console.log('ignore')};
    const acc = () => {console.log('accept')}
    const res = shallow(<RequestCard ignore={ig} accept={acc} username='ChosenOne' first='Anakin' last='Skywalker' avatar='' />);
    expect(res).toMatchSnapshot();
  });

  it('header', () => {
    const res = shallow(<Header />);
    expect(res).toMatchSnapshot();
  });

  it('settings', () => {
    const upload = () => {console.log('test')};
    const res = shallow(<Settings upload={upload} avatar='' />);
    expect(res).toMatchSnapshot();
  });
});

describe('Signup', () => {
  it('Should show error when no username input', () => {
    const wrapper = shallow(<Signup />);
    const submit = wrapper.find({'data-testid': 'submit'});
    submit.simulate('click');
    expect(wrapper.contains(<div style={{ fontSize: "12px", color: "red" }}>Please fill in username</div>)).toBe(true);
  });

  it('Should be able to input a username', () => {
    const wrapper = shallow(<Signup />);
    wrapper.find('#username').simulate('change', { target: { value: 'test' }});
    const input = wrapper.find('#username');
    expect(input.prop('value')).toEqual('test');
  });
});

describe('Homepage', () => {
  it('Should show an example username on page load', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.contains(<div
      style={{
        fontWeight: "600",
        borderBottom: "1px solid black",
        lineHeight: "38px"}}
      >@WELCOME</div>)).toBe(true);
  });

  it('Should show an example first and last name on page load', () => {
    const wrapper = shallow(<Message />);
    expect(wrapper.contains(<div style={{
      borderBottom: "1px solid black",
      lineHeight: "38px"
    }}>Add a friend to send cards!</div>)).toBe(true);
  });
});

describe('Connect page', () => {
  it('Should be able to search for a user', () => {
    const wrapper = shallow(<Connections />);
    wrapper.find('#outlined-search').simulate('change', { target: { value: 'c' }});
    const input = wrapper.find('#outlined-search');
    expect(input.prop('value')).toEqual('c');
  });
});

describe('Friends page', () => {
  it('Should be able to search for a friend', () => {
    const wrapper = shallow(<Search />);
    wrapper.find('#outlined-search').simulate('change', { target: { value: 'a' }});
    const input = wrapper.find('#outlined-search');
    expect(input.prop('value')).toEqual('a');
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile/Profile';
import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './data/friends.json';
import FriendList from './components/FriendsList/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './data/transactions.json';

ReactDOM.render(
    <>
    <Profile avatar={user.avatar}
    name={user.name}
    tag={user.tag} 
    location={user.location} 
    followers={user.stats.followers} 
    views={user.stats.views} 
    likes={user.stats.likes} />
    
    <Statistics title="Upload stats"
    stats={statisticalData} />
    <FriendList friends={friends} />
    
    <TransactionHistory items={transactions}/>
    </>,
    document.getElementById('root'))

import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from "./Friend";
import AddFriend from "./AddFriend";

function Friends() {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/api/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }, [])

    function getData() {
        axiosWithAuth()
          .get("/api/friends")
          .then(res => setFriends(res.data))
          .catch(err => console.log(err))
      }
      
      function addFriend(friend) {
        axiosWithAuth()
          .post("/api/friends", friend)
          .then(res => {
            getData();
            console.log(res);
          });
      }

    return(
        <div>
            <AddFriend addFriend={addFriend} />
            <ul>
            {friends.map(friend => {
          return <Friend key={friend.id} friend={friend} />;
        })}
            </ul>
        </div>
    )
}
export default Friends;
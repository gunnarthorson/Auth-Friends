import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button } from 'reactstrap';

function Friend(props) {
    const [friend, setFriend] = useState({});


    useEffect(() => {
        setFriend(props.friend);
      }, [props.friend]);

      function deleteFriend() {
    axiosWithAuth()
      .delete(`/api/friends/${friend.id}`)
      .then(res => {
        console.log("deleted", res);
      })
      .catch(err => console.log("error deleting friend", err))
      .finally(() => window.location.reload());
  }

return(
    <div className="wrapper">
    <div className="list">
      <h1>{friend.name}</h1>
      <p>Email: {friend.email}</p>
      <p>Age: {props.friend.age}</p>
         <Button color="danger" onClick={deleteFriend}>Delete Friend</Button>
    </div>
    </div>
)
}
export default Friend; 
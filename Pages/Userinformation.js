import React, { useState, useEffect } from 'react';
import userIds from './userid.json';     // Import JSON file
import userInfos from './UserInfo.json'; // Import JSON file


function UserFilter() {

  const [selectedUserId, setSelectedUserId] = useState('');

  // Find selected user's info
  const selectedUserInfo = userInfos.find(user => user.id === Number(selectedUserId));
  console.log(selectedUserInfo);
  console.log(selectedUserInfo);

  return (
    <div>
      <h2>Select a User</h2>
      
      <label>
        User ID:
        <select onChange={(e) => setSelectedUserId(e.target.value)} value={selectedUserId}>
          <option value="">-- Select a User --</option>
          {userIds.map(user => (
            <option key={user.id} value={user.id}>
              {user.username}
              {/* {user.department} */}
            </option>
          ))}
        </select>
      </label>

      {selectedUserInfo && (
        <div style={{ marginTop: '20px' }}>
          <h3>User Info:</h3>
          <table>
          <tr>
            <td>
          <p><strong>Name:</strong> {selectedUserInfo.name}</p>
          <p><strong>Email:</strong> {selectedUserInfo.email}</p>
          <p><strong>Department:</strong> {selectedUserInfo.department}</p>
          <p><strong>City:</strong> {selectedUserInfo.city}</p>
          <p><strong>State:</strong> {selectedUserInfo.state}</p>
          </td>
          </tr>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserFilter;

import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [members, setMembers] = useState([]);

  const addMemberHandler = (data) => {
    setMembers([...members, { ...data, id: Date.now() }]);
  };

  const removeMemberHandler = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  return (
    <div className="App">
      <h1>Member Data</h1>
      <Form onAddMember={addMemberHandler} />

      {members.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Middle Name</th>
              <th>Full Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={member.id}>
                <td>{index + 1}</td>
                <td>{member.FirstName}</td>
                <td>{member.LastName}</td>
                <td>{member.MiddleName}</td>
                <td>{`${member.FirstName} ${member.MiddleName} ${member.LastName}`}</td>
                <td>
                  <button className="delete" onClick={() => removeMemberHandler(member.id)}>
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;

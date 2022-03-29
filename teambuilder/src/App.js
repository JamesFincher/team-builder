import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import ShowList from './ShowList';

function App() {
  const initFormValues = {
    name: '',
    email: '',
    role: '',
  };

  const [teamList, setTeamList] = useState([]);
  const [formValues, setFormValues] = useState(initFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeamMember = {
      name: formValues.name.trim,
      email: formValues.email.trim,
      role: formValues.role,
    };

    if (
      newTeamMember.name === '' ||
      newTeamMember.email === '' ||
      newTeamMember.role === ''
    ) {
      alert('Please fill out all fields');
    } else {
      setTeamList([...teamList, formValues]);
      setFormValues(initFormValues);
      console.table(teamList);
    }
  };

  const updateFormValues = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };
  return (
    <div className='App'>
      <Form
        teamList={teamList}
        setTeamList={setTeamList}
        values={formValues}
        setFormValues={setFormValues}
        handleSubmit={handleSubmit}
        updateFormValues={updateFormValues}
      />
      <ShowList teamList={teamList} />
    </div>
  );
}

export default App;

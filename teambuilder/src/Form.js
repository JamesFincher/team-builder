import React from 'react';

function Form(props) {
  const {
    teamList,
    setTeamList,
    values,
    setFormValues,
    handleSubmit,
    updateFormValues,
  } = props;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    updateFormValues(name, value);
    console.log(e.target.name);
  };

  return (
    <div>
      <h1>NEW TEAM MEMBER</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={values.name}
            maxLength='30'
            onChange={handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleChange}
          />
          <select value={values.role} name='role' onChange={handleChange}>
            <option value=''>-- CHOOSE YOUR JOB --</option>
            <option value='Mangager'>Mangager</option>
            <option value='Engineer'>Engineer</option>
            <option value='Intern'>Intern</option>
            <option value='Visitor'>Visitor</option>
          </select>

          <div className='submit'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;

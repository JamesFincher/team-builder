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
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={values.name}
          onChange={handleChange}
        />
        <div className='submit'>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;

import React from 'react';

function ShowList(props) {
  const { teamList } = props;

  return (
    <div>
      <h2>MANAGEMENT LIST</h2>
      {teamList.map((member, index) => {
        return (
          <p>
            `<b>{member.name}</b> is a <b>{member.role}</b>. You can contact
            them at
            <b>{member.email}</b>.`
          </p>
        );
      })}
    </div>
  );
}

export default ShowList;

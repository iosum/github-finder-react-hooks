import React, { useState, useEffect, useRef } from "react";

import Card from '../card/card.component';

import './profile.styles.scss';

const Profile = () => {
  const [searchField, setSearchField] = useState('');
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState([]);

  const onSearchChange = e => {
    setSearchField(e.target.value.toLowerCase());
  };


  const isInitialMount = useRef(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const profileResponse = await fetch(`https://api.github.com/users/${searchField}`);
      const profileJson = await profileResponse.json();

      const repos = await fetch(`${profileJson.repos_url}?sort=created`);
      const reposJson = await repos.json();


      if (profileJson) {
        setUsername(profileJson);
        setRepos(reposJson);
      }
    };
    if (isInitialMount.current) {
      isInitialMount.current = false;
    }
    else {
      fetchProfile();
    }
  }, [searchField]);


  return (
    <div className='search-container'>

      <input type="search" value={searchField} onChange={onSearchChange} className='search-box' />
      {username ?
        <Card username={username} repos={repos} />
        : null}

    </div>

  );
};

export default Profile;

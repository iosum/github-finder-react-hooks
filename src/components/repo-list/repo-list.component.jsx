import React from 'react';

import './repo-list.styles.scss';


const RepoList = ({ repo: { name, description, html_url, forks_count, watchers_count, stargazers_count } }) => {
  return (
    <div className='repo-container'>
      <div className='details'>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      <div className='counts'>
        <span>Forks: {forks_count}</span>
        <span>Watchers : {watchers_count}</span>
        <span>Stars : {stargazers_count}</span>

        <a href={html_url} target="_blank" rel='noopener noreferrer' className='view-repo-btn'>View Repo</a>

      </div>

    </div>
  );
};

export default RepoList;
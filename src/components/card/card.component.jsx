import React from "react";

import "./card.styles.scss";
import RepoList from "../repo-list/repo-list.component";

const Card = ({ username: { name, avatar_url, html_url }, repos }) => {

  return (
    <div className='card-container'>
      <div className='card'>
        <img src={avatar_url} alt="avatar" />
        <div className='profile-container'>
          <span>{name}</span>
          <a href={html_url} target="_blank" rel='noopener noreferrer' className='card-btn'>View Profile</a>
        </div>
      </div>

      <div className='repos'>
        {
          repos.map((repo, index) => (
            <RepoList key={index} repo={repo} />
          ))
        }
      </div>

    </div>

  );
};

export default Card;

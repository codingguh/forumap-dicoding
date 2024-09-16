import React from 'react';
import PropTypes from 'prop-types';

function LeaderBoardItem({ user, score }) {
  return (
    <section className="talk-detail" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <header>
        <img src={user.avatar} alt={user.name} style={{ width: '50px' }} />
        <div className="talk-detail__user-info">
          <p className="talk-detail__user-name">{user.name}</p>
          <p className="talk-detail__user-id">
            @
            {user.id}
          </p>
        </div>
      </header>
      <article>
        <h2 className="talk-detail__text">
          score:
          {' '}
          {score}
        </h2>
      </article>
    </section>
  );
}

const userLeaderBoardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderBoardItemShape = {
  user: PropTypes.shape(userLeaderBoardItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderBoardItem.propTypes = {
  ...leaderBoardItemShape,
};

export { leaderBoardItemShape };

export default LeaderBoardItem;

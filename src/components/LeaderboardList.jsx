import React from 'react';
import PropTypes from 'prop-types';
import LeaderBoardItem, { leaderBoardItemShape } from './LeaderBoardItem/LeaderBoardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="talks-list">
      {leaderboards.map((leaderboard) => (
        <LeaderBoardItem key={leaderboard.user.id} {...leaderboard} />
      ))}
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderBoardItemShape))
    .isRequired,
};

export default LeaderboardList;

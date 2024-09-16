import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <>
      <div className="leaderboard-page">
        <h2>Leaderboards</h2>
      </div>
      <LeaderboardList leaderboards={leaderboardsList} />
    </>
  );
}

export default LeaderboardsPage;

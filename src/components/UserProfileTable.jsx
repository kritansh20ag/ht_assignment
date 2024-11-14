import UserProfileCard from './UserProfileCard';
import { Box } from '@mui/material';
import { useTradingData } from "../hooks/useTradingData";  

function UserProfileTable() {
  const { data, loading, error } = useTradingData();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || !Array.isArray(data.values) || data.values.length < 2) {
    return <div>No data available</div>;
  }

  // Extract rows from data (ignoring headings)
  const [, ...rows] = data.values;

  // Filter rows for ranks 1, 2, and 3
  const topThreeRows = rows.filter((row) => {
    const rank = parseInt(row[7], 10);
    return rank === 1 || rank === 2 || rank === 3;
  });

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }} // Stack on mobile, row on larger screens
      gap={2}
      justifyContent="center"
      alignItems="center"
    >
      {topThreeRows.map((row, index) => (
        <UserProfileCard
          key={index}
          name={row[0]}            // Name
          tradingStyle={row[1]}    // Trading Style
          alerts={row[3]}          // Alerts
          trades={row[4]}          // Trades
          avgGain={row[5]}         // Avg Gain
          rank={row[7]}            // Rank
        />
      ))}
    </Box>
  );
}

export default UserProfileTable;

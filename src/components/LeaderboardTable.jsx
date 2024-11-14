import { useTradingData } from "../hooks/useTradingData";
import LeaderboardCard from "./LeaderboardCard";
import { Box, Typography } from "@mui/material";

const LeaderboardTable = () => {
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

  return (
    <Box padding={4}>
      {/* Wrap the table in a container with overflowX: 'auto' */}
      <Box overflowX="auto">
        {/* Render the static headings */}
        <Box
          display="grid"
          gridTemplateColumns="repeat(8, minmax(100px, 1fr))"
          gap={1}
          paddingBottom={2}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Rank
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Name
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Trophies
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Streaks
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Alerts
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Trades
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Avg Gain
          </Typography>
          <Typography variant="subtitle1" fontWeight="bold">
            Xscore
          </Typography>
        </Box>

        {/* Render each row as a LeaderboardCard */}
        <Box display="flex" flexDirection="column" gap={2}>
          {rows.map((row, index) => (
            <LeaderboardCard
              key={index}
              rank={row[7]}
              name={row[0]}
              tradingstyle={row[1]}
              trophies={row[8]}
              streaks={row[2]}
              alerts={row[3]}
              trades={row[4]}
              avgGain={row[5]}
              xscore={row[2]}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default LeaderboardTable;

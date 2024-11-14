import { Box, Avatar, Typography, Badge, IconButton, Grid } from "@mui/material";
import { CheckCircle2, ChevronRight, Cog } from "lucide-react";
import PropTypes from "prop-types";

export default function LeaderboardCard({
  rank,
  name,
  tradingstyle,
  trophies,
  streaks,
  alerts,
  trades,
  avgGain,
  xscore,
}) {
  // Define border color based on rank
  const getBorderColor = (rank) => {
    switch (parseInt(rank, 10)) {
      case 1:
        return "gold";
      case 2:
        return "silver";
      case 3:
        return "#cd7f32"; // bronze
      default:
        return "grey.300"; // default grey color
    }
  };

  const borderColor = getBorderColor(rank);

  return (
    <Box width="100%" px={1}>
      <Box position="relative" width="100%" overflow="visible">
        <Box
          sx={{
            backgroundColor: "#ffffff",
            border: "2px solid",
            borderColor: borderColor,
            boxShadow: 1,
            transform: "skewX(-12deg)",
            borderRadius: "16px",
          }}
        >
          <Box sx={{ p: 3, transform: "skewX(12deg)" }}>
            <Grid container alignItems="center" spacing={2}>
              {/* Rank */}
              <Grid item xs={12} sm={1}>
                <Typography variant="h5" fontWeight="bold" color="yellow.700">
                  {rank}
                </Typography>
              </Grid>

              {/* Name and Avatar */}
              <Grid item xs={12} sm={2} display="flex" alignItems="center" gap={2}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    backgroundColor: "#ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Avatar
                    alt={name}
                    src="/placeholder.svg?height=32&width=32"
                    sx={{ width: 40, height: 40 }}
                  />
                </Box>
                <Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {name}
                    </Typography>
                    <CheckCircle2 className="w-4 h-4 ml-1 text-blue-500" />
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {tradingstyle}
                  </Typography>
                </Box>
              </Grid>

              {/* Trophies */}
              <Grid item xs={12} sm={1.5} display="flex" alignItems="center">
                <Typography>{trophies}</Typography>
              </Grid>

              {/* Streaks */}
              <Grid item xs={12} sm={1.5}>
                <Typography variant="body2">{streaks}</Typography>
              </Grid>

              {/* Alerts */}
              <Grid item xs={12} sm={1.5}>
                <Typography variant="body2">{alerts}</Typography>
              </Grid>

              {/* Trades */}
              <Grid item xs={12} sm={1.5}>
                <Typography variant="body2">{trades}</Typography>
              </Grid>

              {/* Avg Gain */}
              <Grid item xs={12} sm={1.5}>
                <Typography variant="body2">{avgGain}</Typography>
              </Grid>

              {/* X-Score and Icons */}
              <Grid item xs={12} sm={1} display="flex" alignItems="center">
                <Badge
                  sx={{
                    backgroundColor: "blue.500",
                    color: "black",
                    fontSize: "1rem",
                    borderRadius: "8px",
                    px: 1,
                    py: 0.5,
                  }}
                >
                  {xscore}
                </Badge>
                <IconButton sx={{ alignSelf: "flex-start" }}>
                  <Cog className="w-4 h-4 text-gray-400" />
                </IconButton>
                <IconButton sx={{ alignSelf: "flex-start" }}>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

LeaderboardCard.propTypes = {
  rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  tradingstyle: PropTypes.string.isRequired,
  trophies: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  streaks: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  alerts: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trades: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  avgGain: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  xscore: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

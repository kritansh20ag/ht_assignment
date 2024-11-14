import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import { CandlestickChart } from "lucide-react";
import { BadgeCheck } from "lucide-react";
import PropTypes from "prop-types";

const UserProfileCard = ({
  name,
  alerts,
  trades,
  avgGain,
  tradingStyle,
  rank,
}) => {
  // Define gradient based on rank
  const getGradient = (rank) => {
    switch (parseInt(rank, 10)) {
      case 1:
        return "linear-gradient(135deg, white 0%, green 30%, yellow 100%)";
      case 2:
        return "linear-gradient(135deg, purple 0%, darkgreen 50%, white 100%)";
      case 3:
        return "linear-gradient(135deg, white 0%, green 50%, orange 100%)";
      default:
        return "linear-gradient(135deg, green 0%, yellow 100%)";
    }
  };

  const headerGradient = getGradient(rank);

  return (
    <Card
      sx={{
        width: 300,
        borderRadius: 2,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Header with gradient and hexagon image */}
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 0.2 }}>
        <Box
          sx={{
            background: headerGradient,
            height: 100,
            position: "relative",
          }}
        >
          <Box
            sx={{
              width: 100,
              height: 100,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              position: "absolute",
              bottom: -52,
              left: 16,
              border: "2px solid white",
              backgroundColor: "#ccc",
            }}
          ></Box>
        </Box>
        {/* Buttons with icons */}
        <Box
          display="flex"
          justifyContent="flex-end"
          gap={1}
          mb={2}
          mt={2}
          alignItems="flex-start"
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#f0f0f0",
              color: "black",
              height: 20, // Match the height to lower half of hexagon
            }}
          >
            <CandlestickChart />
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#001f3f",
              color: "white",
              minWidth: "fit-content",
              height: 20,
            }}
          ></Button>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Box display={"flex"} gap={1} alignItems={"center"}>
            <Typography variant="h5" align="left" fontWeight={600}>
              {name}
            </Typography>
            <BadgeCheck />
          </Box>
          <Typography
            sx={{
              background: headerGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 600,
            }}
          >
            {tradingStyle}
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"} mt={1.5}>
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {alerts}
            </Typography>
            <Typography>Alerts</Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "grey.300", mx: 2 }}
          />

          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {trades}
            </Typography>
            <Typography>Trades</Typography>
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ backgroundColor: "grey.300", mx: 2 }}
          />

          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              {avgGain}
            </Typography>
            <Typography>Average Gain</Typography>
          </Box>
        </Box>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "grey.100",
            },
            mt: 5,
            mb: 3,
            borderColor: "grey.300",
            borderWidth: 2,
            color: "black",
          }}
        >
          Profile
        </Button>
      </CardContent>
    </Card>
  );
};

UserProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  alerts: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  trades: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  avgGain: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  tradingStyle: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default UserProfileCard;

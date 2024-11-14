import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UserProfileTable from "./UserProfileTable";
const ChampionsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Stocks", "Options"];

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        pb: 8,
        backgroundColor: "grey.50",
      }}
    >
      {/* Sliding Tab Buttons */}
      <Box
        display="flex"
        justifyContent="center"
        my={4}
        flexDirection={{ xs: "column", sm: "row" }} // Column on mobile, row on desktop
        gap={{ xs: 2, sm: 0 }} // Add spacing between buttons on mobile
        position="relative"
      >
        {tabs.map((tab) => (
          <Button
            key={tab}
            onClick={() => setActiveTab(tab)}
            sx={{
              borderRadius: activeTab === tab ? 2 : 0,
              px: 4,
              py: 1,
              position: "relative",
              backgroundColor: activeTab === tab ? "white" : "grey.300",
              color: activeTab === tab ? "black" : "grey.600",
              transition: "all 0.3s ease",
              boxShadow: activeTab === tab ? 3 : 0,
              ":after": activeTab === tab && {
                content: '""',
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: 2,
              },
            }}
            fullWidth={{ xs: true, sm: false }} // Full width on mobile
          >
            {tab}
          </Button>
        ))}
      </Box>

      {/* Champions Title */}
      <Box position="relative" textAlign="center">
        <Typography
          variant="h2"
          fontSize={{ xs: 48, sm: 80, md: 120 }} // Responsive font size
          fontWeight="bold"
          sx={{ color: "grey.200", mb: 5, zIndex: 1 }}
        >
          Champions
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "6.5%",
            transform: "translateY(-2%)",
            fontSize: { xs: 120, md: 500 }, // Responsive icon size
            color: "grey.200",
          }}
        >
          <ChevronRight width="100%" height="100%" />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "6.5%",
            transform: "translateY(-2%)",
            fontSize: { xs: 120, md: 500 }, // Responsive icon size
            color: "grey.200",
          }}
        >
          <ChevronLeft width="100%" height="100%" />
        </Box>
      </Box>

      {/* User Profile Table overlapping Champions Title */}
      <Box mt={{ xs: 2, sm: -10 }} zIndex={2} position="relative">
        <UserProfileTable />
      </Box>
    </Box>
  );
};

export default ChampionsSection;

import { AppBar, Toolbar, TextField, Box, IconButton, Avatar, InputAdornment } from '@mui/material';
import { Flame, Zap, ChevronDown, Search } from 'lucide-react';

const Header = () => {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: "grey.50", width: "100%" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Search Field */}
        <Box
          sx={{
            width: "33%",
            backgroundColor: "grey.100",
            borderRadius: "8px",
            padding: 0.5,
          }}
        >
          <TextField
            fullWidth
            placeholder="Start typing Ticker name,User or Trader..."
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={24} color="#bdbdbd" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderRadius: "8px",
                  border: "none", // Removing border to better integrate with background color
                },
              },
            }}
          />
        </Box>

        {/* Buttons Section */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* Flame Icon Button */}
          <IconButton
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              p: 1.5,
            }}
          >
            <Flame size={32} color="#cd3318" />
          </IconButton>

          {/* Zap Icon Button */}
          <IconButton
            sx={{
              backgroundColor: "white",
              borderRadius: "50%",
              p: 1.5,
            }}
          >
            <Zap size={32} color="#0d0d0d" strokeWidth={3} />
          </IconButton>

          {/* User Avatar */}
          <Avatar
            sx={{
              width: 50,
              height: 50,
              backgroundColor: "grey.400",
            }}
          />

          {/* Dropdown Icon */}
          <IconButton>
            <ChevronDown size={32} color="#0d0d0d" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

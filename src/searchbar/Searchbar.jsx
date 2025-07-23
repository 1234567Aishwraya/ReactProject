import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Search, People, LocationOn, Close, Remove, Add } from "@mui/icons-material";

const SearchBar = () => {
  const navigate = useNavigate(); // ✅ Step 1

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState({ adults: 1, children: 0, rooms: 1 });

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleChange = (type, value) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(value, type === "adults" || type === "rooms" ? 1 : 0),
    }));
  };

  // ✅ Step 2: Handle Search Navigation
  const handleSearch = () => {
    if (!destination || !checkIn || !checkOut) {
      alert("Please fill in all the fields");
      return;
    }

    const query = new URLSearchParams({
      destination,
      checkIn,
      checkOut,
      adults: guests.adults,
      children: guests.children,
      rooms: guests.rooms,
    }).toString();

    navigate(`/hotels?${query}`); //naviage to another page
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        background: "white",
        padding: 1.5,
        borderRadius: 3,
        boxShadow: 3,
        maxWidth: "800px",
        margin: "auto",
        border: "3px solid white",
        flexWrap: "wrap",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Where to go?"
        value={destination}
        autoComplete="off"
        onChange={(e) => setDestination(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOn />
            </InputAdornment>
          ),
          endAdornment: destination && (
            <InputAdornment position="end">
              <IconButton onClick={() => setDestination("")}> <Close /> </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <TextField
        type="date"
        label="Check-in"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      <TextField
        type="date"
        label="Check-out"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />

      <Box>
        <Button
          onClick={handleClick}
          variant="outlined"
          startIcon={<People />}
          sx={{
            padding: "10px 15px",
            borderRadius: "8px",
            fontWeight: 600,
            textTransform: "none",
            minWidth: "200px",
            maxWidth: "280px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            backgroundColor: "#FFFFFF",
            ":hover": { backgroundColor: "#FFFFFF" },
          }}
        >
          {`${guests.adults} Adults, ${guests.children} Children, ${guests.rooms} Room`}
        </Button>

        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} keepMounted sx={{ mt: 1 }}>
          {["adults", "children", "rooms"].map((type) => (
            <MenuItem
              key={type}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "250px",
                padding: "10px 15px",
              }}
            >
              <Typography sx={{ textTransform: "capitalize", fontWeight: 500 }}>
                {type === "adults" ? "Adults" : type === "children" ? "Children" : "Rooms"}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <IconButton
                  onClick={() => handleChange(type, guests[type] - 1)}
                  disabled={type === "adults" || type === "rooms" ? guests[type] <= 1 : guests[type] <= 0}
                  sx={{
                    border: "2px solid gray",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Remove />
                </IconButton>

                <Typography sx={{ minWidth: "30px", textAlign: "center", fontWeight: "bold" }}>
                  {guests[type]}
                </Typography>

                <IconButton
                  onClick={() => handleChange(type, guests[type] + 1)}
                  sx={{
                    border: "2px solid gray",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <Add />
                </IconButton>
              </Box>
            </MenuItem>
          ))}

          <MenuItem>
            <Button
              fullWidth
              onClick={handleClose}
              variant="contained"
              sx={{
                backgroundColor: "#0071c2",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Apply
            </Button>
          </MenuItem>
        </Menu>
      </Box>

      {/* ✅ Step 4: Search Button triggers handler */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{
          width: { xl: "100%", sm: "auto" },
          fontSize: "16px",
          padding: "10px 24px",
          backgroundColor: "#6a2e1f",
          ":hover": { backgroundColor: "#f4a261" },
        }}
      >
        <Search /> Search
      </Button>
    </Box>
  );
};

export default SearchBar;

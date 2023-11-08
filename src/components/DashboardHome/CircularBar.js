import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CircularProgress } from "@mui/material";

function CircularBar(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        justifyContent: "center",
        marginLeft: "9vh",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={75}
        sx={{ color: "red" }}
        style={{
          color: "green",
          width: "130px",
          height: "130px",
          borderRadius: "100%",
          boxShadow: "inset 0 0 0px 15px grey",
          backgroundColor: "transparent",
          marginTop: "10vh",
          
        }}
        thickness={5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="black"
          style={{
            fontFamily: "Nunito",
            textAlign: "center",
            lineHeight: "20.46px",
            fontWeight: 900,
            fontSize: "20px",
            
            marginTop: "10vh",
          }}
        >
          15
        </Typography>
      </Box>
    </Box>
  );
}

export default CircularBar;

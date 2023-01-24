import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function LoadingProgress() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",

        marginTop: "5rem",
        height: "50vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

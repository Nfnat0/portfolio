import React from "react";
import { Button } from "@mui/material";

const StyledButton = ({ children, ...props }) => {
  return (
    <Button
      sx={{
        color: "white",
        borderRadius: '8px',
        backgroundColor: "#9C27B0",
        margin: "0 5px",
        marginTop: 2,
        padding: '6px 16px',
        minWidth: '100px', // Standardized size
        "&:hover": {
          backgroundColor: "rgb(17, 82, 147)",
        },
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;

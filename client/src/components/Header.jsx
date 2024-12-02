import { Link, Typography } from "@mui/material";
import Box from "@mui/material/Box";

function Header() {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          background: "#000",
          display: "flex",
          color: "white",
          height: "48px",
          " @media (max-width:767px)": {
            height: "auto",
            textAlign: "center",
            padding: "5px 0 ",
          },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textDecoration: "none",
            color: "white",
            display: "flex",
            " @media (max-width:767px)": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              "@media (max-width:767px)": {
                fontSize: "14px",
              },
            }}
          >
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
          </Typography>
          <Link
            sx={{
              fontSize: "16px",
              // "@media (max-width:767px)": {},
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
            }}
            href="#"
          >
            ShopNow
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Header;

import { CATEGORYICONS } from "@/mocks/image";
import { useTheme } from "@emotion/react";
import { Box, Container, Stack, Typography } from "@mui/material";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function CategorySection() {
  const theme = useTheme();

  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };
  return (
    <Container
    sx={{
      bgcolor: "#f6f6f9",
      height: theme.spacing(30),
      width: 1,
      borderRadius: theme.spacing(15),
      display: "flex",
      boxShadow:3 
    }}
    >
        {CATEGORYICONS?.map((icons) => (
          <Stack
            justifyContent="center"
            alignItems="center"
            m={2}
            display="flex"
          >
            <Box
              component="img"
              alt="Icon Image"
              src={icons?.icon}
              bgcolor="#FFC224"
              sx={{
                borderRadius: theme.spacing(10),
                p: 4,
                width: theme.spacing(20),
              }}
            />
            <Typography>{icons?.name}</Typography>
          </Stack>
        ))}
    </Container>
  );
}

import { useTheme } from "@emotion/react";
import { Container, Stack, Typography } from "@mui/material";
import CategorySection from "../categorySection/page";

export default function Catgory() {
  const theme = useTheme();
  return (
    // <Container>
    <Stack
      height={theme.spacing(70)}
      alignItems="center"
      justifyContent="center"
      width={1}
      sx={{
        background: "white",
        color: "black",
      }}
    >
      <Stack alignItems="center" pb={4}>
        <Typography variant='body1' sx={{bgcolor:'#CECCFD', py:1, px:2 , borderRadius:5}}>Trending Categories</Typography>
        <Typography variant="h2" fontWeight='bold'>Top Category We Have</Typography>
        <Typography color="#8a899c" >
          when known printer took a galley of type scrambl edmake
        </Typography>
      </Stack>
      <Stack>
        <CategorySection/>
      </Stack>
    </Stack>
    // </Container>
  );
}

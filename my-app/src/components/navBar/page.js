import { Button, Stack, Typography } from "@mui/material";

const nevItem = [
    { lable: "Home" },
    { lable: "Courses" },
    { lable: "Page" },
    { lable: "Blog" },
];

export default function NavBar() {
    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            px={4}
            bgcolor="white"
            color="#161439"
            py={1}
        >
            <Stack>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    10bitCoding
                </Typography>
                <Typography variant="caption">Master Web Dev</Typography>
            </Stack>
            <Stack direction="row" spacing={3}>
                {nevItem.map((data) => (
                    <Typography
                        sx={{
                            fontWeight: "bold",
                            cursor: "pointer",
                            "&:hover": {
                                color: "#EEAC00",
                            },
                        }}
                    >
                        {data?.lable}
                    </Typography>
                ))}
            </Stack>
            <Stack>
                <Button
                    variant="contained"
                    sx={{
                        background: "#FFC224",
                        borderRadius: 4,
                        "&:hover": {
                            background: "#EEAC00",
                        },
                    }}
                >
                    Book appointment
                </Button>
            </Stack>
        </Stack>
    );
}

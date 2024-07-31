import { IMAGES } from "@/mocks/image";
import { useTheme } from "@emotion/react";
import { Box, Button, Card, Container, Stack, Typography } from "@mui/material";

export default function HomeBanner() {
    const theme = useTheme();
    return (
        <Stack
            height={theme.spacing(70)}
            justifyContent="center"
            alignItems="center"
            width={1}
            sx={{
                background: "#f6f6f9",
            }}
        >
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                py={0}
                px={1}
                gap={2}
                width={1}
                height={1}
                sx={{
                    maxWidth: theme.breakpoints.values.lg,
                }}
            >
                <Stack width={0.6} color="black">
                    <Stack direction="row">
                        <Typography variant="h2">Never Stop</Typography>
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            bgcolor="#FFC224"
                            px={1}
                        >
                            Learning
                        </Typography>
                    </Stack>
                    <Stack direction="row">
                        <Typography variant="h2">Life</Typography>
                        <Typography
                            variant="h2"
                            fontWeight="bold"
                            bgcolor="#FFC224"
                            px={1}
                        >
                            Never Stop
                        </Typography>
                        <Typography variant="h2"> Teaching</Typography>
                    </Stack>
                    <Stack>
                        <Typography width={0.8} py={2}>
                            Every teaching and learning journey is unique
                            Following We'll help guide your way.
                        </Typography>
                    </Stack>
                    <Button
                        sx={{
                            background: "#FFC224",
                            borderRadius: 4,
                            "&:hover": {
                                background: "#EEAC00",
                            },
                            color: "white",
                            width: 0.3,
                        }}
                    >
                        Start Free Trial
                    </Button>
                </Stack>
                <Stack width={0.4} position="relative" height={1} zIndex={0}>
                    <Box
                        component="img"
                        alt="Banner Image"
                        src={IMAGES.bg_dots}
                        sx={{
                            height: 1,
                            maxHeight: theme.spacing(70),
                            zIndex: 1,
                            position: "absolute",
                            left: -120,
                            bottom: 0,
                        }}
                    />
                    <Box
                        component="img"
                        alt="Banner Image"
                        src={IMAGES.bannerShape3}
                        sx={{
                            height: 1,
                            maxHeight: theme.spacing(25),
                            zIndex: 2,
                            position: "absolute",
                            left: -170,
                            bottom: 0,
                        }}
                    />

                    <Box
                        component="img"
                        alt="Banner Image"
                        src={IMAGES.bannerShape1}
                        sx={{
                            height: 1,
                            maxHeight: theme.spacing(45),
                            zIndex: 3,
                            position: "absolute",
                            left: -80,
                            bottom: 0,
                        }}
                    />

                    <Box
                        component="img"
                        alt="Banner Image"
                        src={IMAGES.mybanner}
                        sx={{
                            height: 1,
                            maxHeight: theme.spacing(65),
                            overflow: "hidden",
                            zIndex: 4,
                            position: "absolute",
                            left: -110,
                            bottom: 0,
                        }}
                    />
                </Stack>
            </Stack>
        </Stack>
    );
}

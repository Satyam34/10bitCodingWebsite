import { useTheme } from "@emotion/react";
import { IconButton, Stack, Tooltip, Typography } from "@mui/material";
import {
    LocationOn,
    MailOutline,
    Call,
    Instagram,
    YouTube,
    Telegram,
    WhatsApp,
} from "@mui/icons-material";

const socialIcon = [
    {
        icon: <Instagram />,
        label: "Instagram",
        link: "",
    },
    {
        icon: <YouTube />,
        label: "YouTube",
        link: "",
    },
    {
        icon: <Telegram />,
        label: "Telegram",
        link: "",
    },
    {
        icon: <WhatsApp />,
        label: "WhatsApp",
        link: "",
    },
];

export default function TopNev() {
    const theme = useTheme();

    return (
        <Stack
            direction="row"
            justifyContent="space-around"
            bgcolor="#161439"
            color="#e6eaef"
            alignItems="center"
        >
            <Stack direction="row" spacing={2}>
                <Stack direction="row" spacing={1}>
                    <LocationOn sx={{ color: "#8a899c" }} />
                    <Typography>New Delhi | India</Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <MailOutline sx={{ color: "#8a899c" }} />
                    <Typography>satyam3100@gmail.com</Typography>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={3} alignItems="center">
                <Stack direction="row" spacing={1}>
                    <Call sx={{ color: "#8a899c" }} />
                    <Typography>Call us: +91 8851433557</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Typography sx={{ color: "#8a899c" }}>
                        Follow Us On:
                    </Typography>
                    {socialIcon.map((icons, index) => (
                        <Tooltip
                            title={icons?.label}
                            placement="bottom"
                            key={index}
                        >
                            <IconButton>{icons.icon}</IconButton>
                        </Tooltip>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
}

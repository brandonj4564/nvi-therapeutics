"use client"

import { useScreenSize } from "@/contexts/ScreenSizeContext";
import { Box, Group, Image, Text, Paper, Container } from "@mantine/core";
import { useRouter } from "next/navigation";

const DesktopHeader = () => {
    const router = useRouter();

    return (
        <Box
            pos="sticky"
            top={0}
            left={0}
            w="100vw" // Ensure full width
            bg="#EFEFEF" // Set background color
            style={{ zIndex: 99, boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }} // Optional shadow
        >
            {/* Centered content inside */}
            <Container size="lg">
                <Group justify="space-between" py="1rem">
                    {/* Logo */}
                    <Image
                        src="/nvi-logo.svg"
                        alt="Logo"
                        w={103}
                        h={71}
                        style={{ cursor: "pointer" }}
                        onClick={() => router.push("/")}
                    />

                    {/* Navigation Links */}
                    <Group gap={48}>
                        <Text size="md" c="darkColor.9" style={{ cursor: "pointer" }}>
                            Our Vision
                        </Text>
                        <Text size="md" c="darkColor.9" style={{ cursor: "pointer" }}>
                            Features
                        </Text>
                        <Text size="md" c="darkColor.9" style={{ cursor: "pointer" }}>
                            Meet our Team
                        </Text>
                    </Group>
                </Group>
            </Container>
        </Box>
    );
};

const MobileHeader = () => {
    // TODO
    return <>
        <Group>
            <Text>hi i'm on mobular</Text>
        </Group>
    </>
}

export default function Header() {
    const { isMobile } = useScreenSize();

    return isMobile ? <MobileHeader /> : <DesktopHeader />
}
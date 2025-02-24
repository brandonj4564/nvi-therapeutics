"use client"

import { theme } from "@/theme";
import { Button, Group, Stack, Text, Image } from "@mantine/core";
import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandMeta, IconBrandX } from "@tabler/icons-react";
import { redirect, useRouter } from "next/navigation";
import { Router } from "next/router";

export default function Footer() {
    const router = useRouter()
    const darkColor = theme.colors?.darkColor ? theme.colors.darkColor[8] : "#3a4f59"

    return <Stack align="center" w="100%" mt="10rem" mb="3rem">
        <Text fz="xl" fw={600} c="darkColor.9" style={{ letterSpacing: 0.5 }}>Novel. Innovative. Reliable.</Text>
        <Text fz="sm" c="dimmed" w="60%" style={{ textAlign: 'center' }}>
            Join us in shaping the next frontier of cell and gene therapy. Explore our innovations and learn how we are redefining possibilities in biotechnology.
        </Text>

        <Group gap="2rem" my="2rem">
            <Button bg="primaryColor.7" size="md" fw={500} fz="sm">Receive News</Button>
            <Button variant="outline" c="primaryColor.8" size="md" fw={500} fz="sm">Contact Us</Button>
        </Group>

        <Group w="100%" justify="space-between">
            <Image
                src="/nvi-logo.svg"
                alt="Logo"
                w={80}
                h={56}
            />
            <Text fz="xs" c="dimmed">
                © 2025 Copyright NVI Therapeutics. All Rights Reserved.
            </Text>

            <Group gap="lg">
                <IconBrandLinkedin size={24} color={darkColor} style={{ cursor: 'pointer' }} onClick={() => router.push("https://www.linkedin.com/in/chih-wen-ni-84ba2931/")} />
                <IconBrandX size={24} color={darkColor} style={{ cursor: 'pointer' }} />
                <IconBrandMeta size={24} color={darkColor} style={{ cursor: 'pointer' }} />
            </Group>
        </Group>

    </Stack>
}
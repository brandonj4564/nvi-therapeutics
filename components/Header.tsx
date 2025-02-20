"use client"

import { useScreenSize } from "@/contexts/ScreenSizeContext";
import { Group, Image, Text } from "@mantine/core";

const DesktopHeader = () => {
    return <>
        <Group justify="space-between">
            <Image src="../public/nvi-logo.svg" w={40} h={40} />
            <Group gap={48}>
                <Text size="md" c="darkColor.9">Our Vision</Text>
                <Text size="md" c="darkColor.9">Features</Text>
                <Text size="md" c="darkColor.9">Meet the Team</Text>
            </Group>
        </Group>
    </>
}

const MobileHeader = () => {
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
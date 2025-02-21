"use client"

import { useScreenSize } from "@/contexts/ScreenSizeContext";
import { Group, Image, Text } from "@mantine/core";
import { useRouter } from "next/navigation";

const DesktopHeader = () => {
    const router = useRouter()

    return <>
        <Group justify="space-between" pb="1rem">
            <Image src="/nvi-logo.svg" alt="Logo" w={103} h={71} style={{ cursor: 'pointer' }} onClick={() => router.push('/')} />
            <Group gap={48}>
                <Text size="md" c="darkColor.9" style={{ cursor: 'pointer' }}>Our Vision</Text>
                <Text size="md" c="darkColor.9" style={{ cursor: 'pointer' }}>Features</Text>
                <Text size="md" c="darkColor.9" style={{ cursor: 'pointer' }}>Meet our Team</Text>
            </Group>
        </Group>
    </>
}

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
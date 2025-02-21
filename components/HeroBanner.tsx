import { useScreenSize } from "@/contexts/ScreenSizeContext"
import { theme } from "@/theme"
import { Grid, BackgroundImage, Flex, Container, Stack, Overlay, Text } from "@mantine/core"

const DesktopHeroBanner = () => {
    // This breaks if the screen size is a little too large to count as mobile but still very small

    const primaryColor = theme.colors?.primaryColor ? theme.colors.primaryColor[5] : "#38dfce"

    return <Grid gutter={0} h={460} mb="6rem">
        <Grid.Col span={6}>
            <BackgroundImage src="" bg="darkColor.9" w="50vw" h={460} left={0} pos="absolute">
                <Flex w="100vw" align="flex-start" justify="flex-start">
                    <Container size="lg" p="1rem 2rem" style={{ width: "100%" }}>
                        <Flex w="35vw" m="3rem 0">

                            <Stack>
                                <Text fw={500} c="lightestColor.0" fz={40} style={{ letterSpacing: 0.1, lineHeight: 1.3 }}>
                                    Revolutionizing the <b style={{ color: primaryColor }}>future</b>  of gene and cell therapy
                                </Text>

                                <Text c="lightColor.0" fz="md" m="1rem 0">
                                    Cutting-edge non-viral direct integrate system (D Platform) allows for efficient and precise gene insertion, bypassing traditional reliance on viral vectors.
                                </Text>

                            </Stack>
                        </Flex>
                    </Container>
                </Flex>
            </BackgroundImage>
        </Grid.Col>
        <Grid.Col span={6}>
            <BackgroundImage src="/hero-banner.jpg" w="50vw" h={460} pos="absolute">
                <Overlay color="#2F383C" backgroundOpacity={0.35} />
                <Overlay color="#40E0D0" backgroundOpacity={0.15} />
            </BackgroundImage>
        </Grid.Col>
    </Grid>
}

const MobileHeroBanner = () => {
    return <></>
}

const HeroBanner = () => {
    const { isMobile } = useScreenSize();

    return isMobile ? <MobileHeroBanner /> : <DesktopHeroBanner />
}

export default HeroBanner

"use client"

import { useScreenSize } from '@/contexts/ScreenSizeContext';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { BackgroundImage, Container, Flex, Grid, Text, Group, Stack, Overlay } from '@mantine/core';
import { theme } from '@/theme';
import HeroBanner from '@/components/HeroBanner';

const OurVisionDesktop = () => {
  const ImageCard = ({ text }: { text: string }) => {
    return <Flex bg="white">
      <Group>
        <Text fz="md" c="darkColor.9">
          {text}
        </Text>
      </Group>
    </Flex>
  }

  return <Grid gutter={0} w="100%">
    <Grid.Col span={6} >
      <Flex align="center" justify="center" h="100%">
        <BackgroundImage src="/microscope.png" mah={500} maw={500} mih={300} miw={300} h="35vw" w="35vw" radius={10}>
          <Stack pos="absolute" style={{ zIndex: 10 }}>
            <ImageCard text="Innovative" />
            <ImageCard text="Accessible" />
            <ImageCard text="Effective" />
          </Stack>

          <Overlay color="#2F383C" backgroundOpacity={0.15} pos="relative" h="100%" w="100%" radius={10} zIndex={1} />
          <Overlay color="#40E0D0" backgroundOpacity={0.10} pos="relative" h="100%" w="100%" radius={10} zIndex={1} />
        </BackgroundImage>

      </Flex>
    </Grid.Col>
    <Grid.Col span={6}>
      <Stack align='center' m="2rem">
        <Text fz="xl" c="darkestColor.9">Our Vision</Text>
        <Text fz="md" c="darkColor.9">
          At NVI Therapeutics, we wish to create a world where advanced gene-editing technologies enable transformative therapies.
        </Text>

        <Text fz="md" c="darkColor.9">
          We strive to deliver cell therapies to address cancer and autoimmune diseases, making groundbreaking treatments available to patients everywhere.
        </Text>
      </Stack>
    </Grid.Col>
  </Grid>
}


export default function HomePage() {
  const { isMobile } = useScreenSize()
  const primaryColor = theme.colors?.primaryColor ? theme.colors.primaryColor[5] : "#38dfce"


  return (
    <>
      <HeroBanner />
      {/* <Welcome />
      <ColorSchemeToggle /> */}

      <Flex w="100%" justify='center' m="2rem 0">
        <Text fz="xl" c="darkest.9" fw="md" style={{ letterSpacing: 0.1, lineHeight: 1.3 }}>
          NVI Therapeutics <b style={{ color: primaryColor }}>cares</b> about the future
        </Text>
      </Flex>

      <OurVisionDesktop />

    </>
  );
}

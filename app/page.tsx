"use client"

import { useScreenSize } from '@/contexts/ScreenSizeContext';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { BackgroundImage, Container, Flex, Grid, Text, Group, Stack, Overlay, Divider, Card, Box, rgba, Image } from '@mantine/core';
import { theme } from '@/theme';
import HeroBanner from '@/components/HeroBanner';
import { IconCancel, IconCircleCheckFilled } from '@tabler/icons-react';
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState, useEffect } from 'react';
import dnaAnim from "@/public/lotties/dnahelix.json";
import saveMoneyAnim from "@/public/lotties/savemoney.json";


function FeaturesGrid() {
  const features = [
    { icon: <IconCancel />, lottie: dnaAnim, title: "Non-Viral Approach", description: "Eliminates the risks and high costs associated with viral vector production, ensuring consistent and scalable results." },
    { icon: <IconCancel />, lottie: saveMoneyAnim, title: "Cost Effective Solutions", description: "Reduces overall production costs while maintaining superior therapeutic outcomes." },
    { icon: <IconCancel />, lottie: dnaAnim, title: "High Efficiency", description: "Our system achieves accurate integration of target gene with reduced off-target effects, enhancing therapeutic efficacy." },
    { icon: <IconCancel />, lottie: dnaAnim, title: "Rapid Manufacturing", description: "Speeds up the production process, allowing faster delivery of personalized treatments." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserHovering, setIsUserHovering] = useState(false);

  // Automatically cycle through features every 5 seconds
  useEffect(() => {
    if (isUserHovering) return; // Pause cycling if user is interacting

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length); // Cycle through cards
    }, 5000);

    return () => clearInterval(interval);
  }, [isUserHovering]);

  // TODO: Fix problem where component size changes based on highlighted feature
  return (
    <Grid gutter="xl" m="6rem 0" h={400}>
      {features.map((feature, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
            animate={index === activeIndex ? { scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            onMouseEnter={() => {
              setActiveIndex(index);
              setIsUserHovering(true);
            }}
            onMouseLeave={() => setIsUserHovering(false)}
            style={{
              borderRadius: 10,
            }}
          >
            <Flex
              p="1.5rem"
              bd="1 solid #D1D4D5"
              style={(theme) => ({
                backgroundColor: index === activeIndex ? theme.colors.primaryColor[6] : "#EBEBEB",
                transition: "background-color 0.3s ease",
                borderRadius: 10,
                flexDirection: "column"
              })}
            >
              <Group mb="1rem">
                {index === activeIndex ?
                  <Box m="-1rem -0.5rem">
                    <Lottie animationData={feature.lottie} loop autoplay style={{ width: "100px", height: "100px" }} />
                  </Box>
                  : feature.icon}

                <Text fw={600} fz={index === activeIndex ? 24 : 16} c={index === activeIndex ? "lightestColor.1" : "darkColor.8"}>
                  {feature.title}
                </Text>
              </Group>
              <Text fz="sm" fw={index === activeIndex ? 500 : 400} c={index === activeIndex ? "lightColor.1" : "dimmed"}>
                {feature.description}
              </Text>
            </Flex>
          </motion.div>
        </Grid.Col>
      ))}
    </Grid>
  );
}

const OurVisionDesktop = () => {
  const primaryColor = theme.colors?.primaryColor ? theme.colors.primaryColor[5] : "#38dfce"

  const ImageCard = ({ text }: { text: string }) => {

    return <Flex bg="white" p="0.75rem" style={{ borderRadius: 5 }} opacity={0.8}>
      <Group>
        <IconCircleCheckFilled size={25} color={primaryColor} />
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
          <Flex pos="absolute" mah={500} maw={500} mih={300} miw={300} h="35vw" w="35vw" justify="flex-end" align="flex-end" p="1.5rem">
            <Stack style={{ zIndex: 10 }} gap="1.25rem">
              <ImageCard text="Innovative" />
              <ImageCard text="Accessible" />
              <ImageCard text="Effective" />
            </Stack>
          </Flex>

          {/* <Overlay color="#2F383C" backgroundOpacity={0.15} pos="relative" h="100%" w="100%" radius={10} zIndex={1} /> */}
          <Overlay color={primaryColor} backgroundOpacity={0.10} pos="relative" h="100%" w="100%" radius={10} zIndex={1} />
        </BackgroundImage>

      </Flex>
    </Grid.Col>
    <Grid.Col span={6}>
      <Stack align='center' m="2rem">
        <Text fz="xl" c="darkColor.9" my="lg">Our Vision</Text>
        <Text fz="md" c="darkColor.8">
          At NVI Therapeutics, we wish to create a world where advanced gene-editing technologies enable transformative therapies.
        </Text>

        <Divider my="md" color="darkColor.8" w="35%" size={2} />

        <Text fz="md" c="darkColor.8">
          We strive to deliver cell therapies to address cancer and autoimmune diseases, making groundbreaking treatments available to patients everywhere.
        </Text>
      </Stack>
    </Grid.Col>
  </Grid>
}

const OurTeamDesktop = () => {
  const team = [
    { image: "/chih-wen-ni-photo.jpg", name: "Dr. Chih-Wen Ni", role: "Founder, CEO" },
    { image: "https://thispersondoesnotexist.com", name: "Fake person 1", role: "Roles" },
    { image: "https://thispersondoesnotexist.com", name: "Fake person 2", role: "Roles" },
    { image: "https://thispersondoesnotexist.com", name: "Scottsfield M. Shearwood", role: "Intern (unpaid)" }
  ]

  return <Stack align="center" w="100%" my="5rem">
    <Stack align="center" gap="0.5rem">
      <Text fz="lg" c="darkColor.9" fw={500}>Meet our team</Text>
      <Divider mb="lg" color="darkColor.8" w={80} size={4} style={{ borderRadius: 5 }} />
    </Stack>


    <Group w="100%" justify='space-evenly' align='flex-start'>
      {
        team.map((member, index) => <Stack key={index} align="center" w={200}>
          <Image src={member.image} radius={1000} h={150} w={150} />

          <Stack align="center" gap="0.5rem">
            <Text fz="md" c="darkColor.9" fw={500} style={{ textAlign: 'center' }}>{member.name}</Text>
            <Text fz="sm" c="dimmed" style={{ textAlign: 'center' }}>{member.role}</Text>
          </Stack>
        </Stack>)
      }

    </Group>
  </Stack>
}


export default function HomePage() {
  const { isMobile } = useScreenSize()
  const primaryColor = theme.colors?.primaryColor ? theme.colors.primaryColor[7] : "#38dfce"


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

      <FeaturesGrid />

      <OurTeamDesktop />

    </>
  );
}

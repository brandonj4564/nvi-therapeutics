"use client"

import { useScreenSize } from '@/contexts/ScreenSizeContext';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { Text } from '@mantine/core';

export default function HomePage() {
  const { isMobile } = useScreenSize()

  return (
    <>
      {/* <Welcome /> */}
      {/* <ColorSchemeToggle /> */}
      <Text>hi </Text>
    </>
  );
}

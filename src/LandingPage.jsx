import BeholdWidget from "@behold/react";
import { Container, Image, Text, Title, Space, Divider, Anchor, Overlay, AspectRatio } from '@mantine/core';

function LandingPage() {
  return (
    <>
        <Space h="md" />
        <Divider my="xs" />
      <Container size="md">
        <Title order={1} ta="center" size="h1">
          What is Doughnut Days?
        </Title>
          <Space h="md" />
            <Text ta="center" size="lg">
              Doughnut Days is a website and Instagram account dedicated to connecting
              donut lovers to donut makers in Raleigh, North Carolina.
              <Space h="xs" /> We showcase the best treats from small businesses and talented local bakers.
            </Text>
      </Container>
      <Divider my="xs" />
      <Space h="md" />
      <AspectRatio ratio={16 / 9} mx="auto">
        <Overlay color="#77C4FF" backgroundOpacity={0.2} />
          <Image src="/DD_CoverImage.jpeg" alt="" />
      </AspectRatio>
      <Space h="md" />
      <Divider my="xs" />
      <Space h="xs" />
      <Title order={2} ta="center" size="h1">
        Looking for some sweet donut photos?
      </Title> 
        <Space h="md" />
        <Text ta="center" size="lg"><Anchor href="https://www.instagram.com/doughnut_days/" underline="always" c="#0000FF">Follow us on Instagram</Anchor> and tag along on our donut adventures.</Text>
        <Space h="md" />
      <BeholdWidget feedId="G7ekqLuJW5rXLvBzuRLF" />
      <Space h="md" />
      <Divider my="xs" />
      <Space h="lg" />
    </>
  );
}

export default LandingPage;

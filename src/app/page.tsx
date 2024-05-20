import Icon from "@/Components/Atom/Icon";
import { Anchor, Flex, Group, Image, Stack, Text } from "@mantine/core";

export default function Home() {
  return (
    <main className="full-screen">
      <Flex w="100%" h="100%" justify="center" align="center" direction="column" gap="lg">
        <Text fw={700} fz={24}>This is base template for NEXT.js</Text>
        <Group>
          <Stack gap={4}>
            <Icon name="IconBrandNextjs" size={50}/>
            <Anchor href="https://nextjs.org/">Next.JS</Anchor>
          </Stack>
          <Icon name="IconPlus" size={20}/>
          <Stack gap={4}>
            <Icon name="IconBrandMantine" size={50} className="text-blue"/>
            <Anchor href="https://mantine.dev/getting-started/">Mantine</Anchor>
          </Stack>
        </Group>
        <Flex justify="center" align="center" direction="column" gap={"sm"}>
          <Text fw={700} fz={14}>State management using</Text>
          <Group gap="sm">
            <Icon name="IconBrandRedux" size={20} className="text-grape-9"/>
            <Anchor href="https://react-redux.js.org/">Redux</Anchor>
            <Anchor href="https://redux-toolkit.js.org/">Redux/toolkit</Anchor>
          </Group>
        </Flex>
        <Flex justify="center" align="center" direction="column" gap={"sm"}>
          <Text fw={700} fz={14}>CSS Framework</Text>
          <Group gap="sm">
            <Icon name="IconBrandTailwind" size={20} className="text-blue-4"/>
            <Anchor href="https://tailwindcss.com/">Tailwind</Anchor>
          </Group>
        </Flex>
        <Flex justify="center" align="center" direction="column" gap={"sm"}>
          <Text fw={700} fz={14}>Main Icon</Text>
          <Group gap="sm">
            <Icon name="IconBrandTabler" size={20} className="text-blue-8"/>
            <Anchor href="https://tabler.io/icons">Tabler</Anchor>
          </Group>
        </Flex>
        <Flex justify="center" align="center" direction="column" gap={"sm"}>
          <Text fw={700} fz={14}>Supported Runtime</Text>
          <Group>
            <Group gap="sm">
              <Icon name="IconBrandNpm" size={20} className="text-red"/>
              <Anchor href="https://www.npmjs.com/">NPM</Anchor>
            </Group>
            <Group gap="sm">
              <Image src="/bun.svg" alt="bun" h={20} w="auto"/>
              <Anchor href="https://bun.sh/">Bun</Anchor>
            </Group>
          </Group>
        </Flex>
      </Flex>
    </main>
  );
}

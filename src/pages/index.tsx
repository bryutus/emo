import {
  Card,
  Text,
  Group,
  CopyButton,
  Badge,
  SimpleGrid,
  UnstyledButton,
  TextInput,
  Container,
} from '@mantine/core'
import { useInputState } from '@mantine/hooks'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const emojis = [
  // gray, red, pink, grape, violet, indigo, blue, cyan, teal, green, lime, yellow, orange
  {
    emoji: '🦉',
    alias: ':owl:',
    color: 'orange',
    description: '納得を表現します。',
    keywords: ['ほうほうほう'],
  },
  {
    emoji: '🤔',
    alias: ':thinking_face:',
    color: 'blue',
    description: 'しっくりしていないことを表現します。',
    keywords: ['むむむ', '考え中', 'どうして', 'なんで'],
  },
  {
    emoji: '👍',
    alias: ':+1:',
    color: 'red',
    description: '共感や同意を表現します。',
    keywords: ['Good', '良いね'],
  },
  {
    emoji: '🙏',
    alias: ':pray:',
    color: 'lime',
    description: '敬意を表現します。',
    keywords: ['感謝', '頼む'],
  },
  {
    emoji: '✋',
    alias: ':hand:',
    color: 'gray',
    description: '意思表明を表現します。',
    keywords: ['質問', 'はい'],
  },
  {
    emoji: '🙌',
    alias: ':raised_hands:',
    color: 'violet',
    description: 'ポジティブな気持ちを表現します。',
    keywords: ['嬉しい', 'やった'],
  },
]

export default function Home() {
  const [stringValue, setStringValue] = useInputState<string>('')
  const cards = emojis.map((emoji) => {
    const keywords = emoji.keywords.map((keyword) => <Badge key={keyword}>{keyword}</Badge>)

    return (
      <Card key={emoji.alias} shadow='sm' p='lg' radius='md' withBorder>
        <Card.Section bg={emoji.color + '.2'}>
          <Group position='center'>
            <Text fz='5em'>{emoji.emoji}</Text>
          </Group>
        </Card.Section>

        <Group position='center' mt='md' mb='xs'>
          <CopyButton value={emoji.alias}>
            {({ copied, copy }) => (
              <UnstyledButton onClick={copy}>
                <Text weight={500}>{emoji.alias}</Text>
              </UnstyledButton>
            )}
          </CopyButton>
        </Group>

        <Text size='sm' color='dimmed'>
          {emoji.description}
        </Text>

        <Group position='left' mt='md' mb='xs'>
          {keywords}
        </Group>
      </Card>
    )
  })

  return (
    <>
      <Head>
        <title>emoction | A guide to emoji reactions to comments and messages</title>
        <meta name='description' content='A guide to emoji reactions to comments and messages' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🦄</text></svg>'
        ></link>
      </Head>
      <Container size='md'>
        <TextInput
          placeholder='Search your emoji...'
          radius='md'
          size='xl'
          rightSectionWidth={90}
          value={stringValue}
          onChange={setStringValue}
        />
        <SimpleGrid
          cols={4}
          spacing='lg'
          breakpoints={[
            { maxWidth: 'lg', cols: 2, spacing: 'lg' },
            { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          ]}
        >
          {cards}
        </SimpleGrid>
      </Container>
    </>
  )
}

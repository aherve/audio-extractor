import {ChangeEvent, useState} from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  ListItem,
  Spacer,
  UnorderedList,
  Spinner,
} from '@chakra-ui/react'

export default function Home() {

  const [url, setURL] = useState('')
  const [audios, setAudios] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const val = event.target.url.value
    setURL(val)
    search(val)
  }

  const search = async (url: string) => {
    setLoading(true)
    setAudios([])
    const data = await fetch(`/api/extract?url=${encodeURI(url)}`)
      .then(r => r.json())
    setLoading(false)
    setAudios(data.audios)
  }

  const loader = () => {
    if (loading) {
      return (
        <>
          <Spinner />
        </>
      )
    }
  }

  const results = () => {
    if (!url) {return }
    return (
      <>
        <Heading size="sm" marginBottom='20px'>Results for {url}:</Heading>
        {loader()}
        <UnorderedList>
          {
            audios.map(a =>
              <ListItem key={a} color='blue'>
                <Link href={a} download isExternal>{a}</Link>
              </ListItem>
            )
          }
        </UnorderedList>
      </>
    )
  }

  return (
    <>
      <Flex direction="column" align='stretch' gap='10px'>
        <Box margin='20px'>
          <Flex direction="column" align="center">
            <Heading>Audio Extractor</Heading>
            <Box>Extract audio links from any URL</Box>
          </Flex>
        </Box>
        <Spacer />
        <Box margin='20px'>
          <form onSubmit={handleSubmit}>
            <Flex direction='row' gap='5px'>
              <Input placeholder="Enter a URL" name="url" />
              <Button type="submit" value="Submit">search</Button>
            </Flex>
          </form>
        </Box>
        <Box marginTop='50px' margin='20px'>
          {results()}
        </Box>
      </Flex >
    </>
  )
}

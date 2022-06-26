import {ChangeEvent, EventHandler, useState} from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  FormLabel,
  UnorderedList,
  ListItem,
  Link
} from '@chakra-ui/react'


export default function Home() {

  const [url, setURL] = useState('')
  const [audios, setAudios] = useState([])
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()
    const val = event.target.url.value
    setURL(val)
    search(val)
  }

  const search = async (url: string) => {
    const toFetch = `/api/extract?url=${encodeURI(url)}`
    console.log({toFetch})
    const data = await fetch(toFetch)
      .then(r => r.json())
    console.log('data = ', data)
    setAudios(data.audios)
  }

  return (
    <>
      <Heading>Audio Extractor</Heading>
      <Box>
        <form onSubmit={handleSubmit}>
          <FormLabel>URL input</FormLabel>
          <Input placeholder="Enter a URL" name="url" />
          <Button type="submit" value="Submit">search</Button>
        </form>
      </Box>
      <Box>
        <Heading>Results for {url}:</Heading>
      </Box>
      <Box>
        <UnorderedList>
          {
            audios.map(a =>
              <ListItem key={a}>
                <Link href={a} download isExternal>{a}</Link>
              </ListItem>
            )
          }
        </UnorderedList>
      </Box>
    </>
  )
}



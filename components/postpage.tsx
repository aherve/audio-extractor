import Head from 'next/head'
import { Nav } from './nav'
import {
  Divider,
  Flex,
  Text,
  Box,
  Container,
  Heading,
  Image,
} from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  thumbnailUrl: string
  imageUrl?: string
  tags: string[]
}

export default function PostPage({
  children,
  post,
}: PropsWithChildren<{ post: Post }>) {
  return (
    <>
      <Head>
        <title>Exomodule | {post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <Nav />
      <Container maxW="container.lg" mt="12" mb="20">
        {post.imageUrl ? (
          <Flex justifyContent="space-around">
            <Image src={post.thumbnailUrl} />
          </Flex>
        ) : null}
        <Box as="main">
          <Heading as="h1" my="10" color="gray.600">
            {post.title}
          </Heading>
          <Box color="gray.400" mb="2">
            {post.date}
          </Box>
          <Text fontStyle="italic" mb="1">
            {post.description}
          </Text>
          <Divider />
          {children}
        </Box>
      </Container>
    </>
  )
}

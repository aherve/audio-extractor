import { Box, Image, Flex } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  thumbnailUrl: string
  tags: string[]
}

export default function BlogImage({
  children,
  src,
  alt,
}: PropsWithChildren<{ src: string; alt: string }>) {
  return (
    <>
      <Flex
        direction="column"
        align="center"
        mx={[0, , 8, 12]}
        my={[4, , 8, 16]}
      >
        <Box borderWidth="1px">
          <Image src={src} alt={alt}></Image>
        </Box>
        <Box color="gray.400" maxW="80%" align="center" mt="3">
          {children}
        </Box>
      </Flex>
    </>
  )
}

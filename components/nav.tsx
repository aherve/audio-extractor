import {
  Box,
  Button,
  Container,
  Grid,
  Flex,
  Image,
  Link,
  GridItem,
  Stack,
} from '@chakra-ui/react'

import NextLink from 'next/link'

export const Nav = () => (
  <Box as="nav" borderBottomWidth="1px">
    <Container maxW={['container.xl', null, null, '8xl']}>
      <Grid templateColumns={['1fr 1fr', , , '1fr 1fr 1fr']}>
        <GridItem>
          <Flex height="100%" align="center">
            <NextLink href="/" passHref>
              <Link>
                <Image
                  src="/logo.svg"
                  height="100px"
                  cursor="pointer"
                  alt="Exomodule"
                />
              </Link>
            </NextLink>
          </Flex>
        </GridItem>
        <GridItem colStart={[2, , , 3]}>
          <Flex align="center" height="100%" justifyContent="flex-end">
            <Stack spacing="12px" py="3" direction={['column', , , 'row']}>
              <NextLink href="/executables" passHref>
                <Link >
                  <Button variant="ghost">Executables</Button>
                </Link>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Link textAlign="left" >
                  <Button variant="ghost">Blog</Button>
                </Link>
              </NextLink>
                <NextLink href="mailto:contact@exomodule.com" passHref>
                  <Link isExternal>
                    <Button variant="ghost">Contact</Button>
                  </Link>
                </NextLink>
            </Stack>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
  </Box>
                )

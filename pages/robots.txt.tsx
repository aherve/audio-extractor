const allow = `User-agent: *
Allow: /
`

export function getServerSideProps({res}) {
  res.setHeader('Content-Type', 'text/plain')
  res.write(allow)
  res.end()

  return {
    props: {},
  }
}

export default function Robots() {}

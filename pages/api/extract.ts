import {NextApiRequest, NextApiResponse} from "next";

const audioReg = new RegExp('(http[^\<\>\?\%\"]+?\.(mp3|ogg|aac|flac|wav|aiff))', 'gm')


export default async function extract(req: NextApiRequest, res: NextApiResponse) {
  try {

    const url = req.query["url"]
    if (!url) {
      return res.status(400).json({
        error: "please provide an 'url' query parameter"
      })
    }

    const body = await fetchURL(url as string)
    console.log('body ', body)
    const audios = findAudios(body)
    console.log('audios', audios)

    res.status(200).json({audios})
  } catch (error) {
    console.error(error)
    return res.status(500).json({error})
  }
}

function findAudios(body: string): string[] {
  let m = audioReg.exec(body)
  const res = []
  while (m != null) {
    console.log("MATCH", m)
    res.push(decodeURI(m[1]))
    m = audioReg.exec(body)
  }
  // return unique array
  return res.filter((val, index, self) => self.indexOf(val) === index)
}

async function fetchURL(url: string): Promise<string> {
  return fetch(url)
    .then(r => r.text())
}

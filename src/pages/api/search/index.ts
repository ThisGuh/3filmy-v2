import type { NextApiRequest, NextApiResponse } from 'next';
import fetchSearchMovie from 'helpers/fetchSearchMovie';

const searchHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { phrase } = req.body;
  const encodedPhrase = encodeURI(phrase);

  if (phrase) {
    try {
      const { data } = await fetchSearchMovie(encodedPhrase);
      res.status(200).json({ ...data });
    } catch {
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(400).json({ message: 'Payload is empty' });
  }
};

export default searchHandler;

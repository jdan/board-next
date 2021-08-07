import type { NextApiRequest, NextApiResponse } from "next";
import pgnToSvg from "pgn-to-svg";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-type", "image/svg+xml");
  res.send(
    pgnToSvg({
      pgn: req.query.pgn && decodeURIComponent(req.query.pgn as string),
    })
  );
}

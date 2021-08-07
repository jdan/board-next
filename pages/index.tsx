import { useState } from "react";

export default function Home() {
  const [pgn, setPgn] = useState("");
  return (
    <>
      <div>
        <label>
          PGN: <input onChange={(e) => setPgn(e.target.value)} value={pgn} />
        </label>
      </div>

      <img
        width={500}
        height={500}
        alt={pgn}
        src={`/api/board.svg?pgn=${encodeURIComponent(pgn)}`}
      />
    </>
  );
}

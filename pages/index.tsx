import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [pgn, setPgn] = useState("");
  return (
    <>
      <div style={{ padding: 20 }}>
        <label>
          PGN: <input onChange={(e) => setPgn(e.target.value)} value={pgn} />
        </label>
      </div>

      <div style={{ padding: 20 }}>
        <a href={`/api/board.svg?pgn=${encodeURIComponent(pgn)}`}>link</a>
      </div>

      <div style={{ padding: 20 }}>
        <Image
          width={500}
          height={500}
          alt={pgn}
          src={`/api/board.svg?pgn=${encodeURIComponent(pgn)}`}
        />
      </div>
    </>
  );
}

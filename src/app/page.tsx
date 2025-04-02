'use client';

import { useSession } from "next-auth/react";

const Home = () => {
  const session = useSession()
  console.log(session);
  return (
    <div className="h-80">
      <h1>Welcome to Nirbhor</h1>
      <p>Your comfort, our commitment.</p>
      <p>hello</p>
      <p>Ready for conflict</p>
      <p>Your comfort our commitment.</p>
    </div>
  );
};

export default Home;

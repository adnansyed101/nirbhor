import User from "@/app/models/user";
import dbConnect from "@/lib/dbConnect";

const GET = () => {
  const data = {
    name: "Jubayer Ahmed",
    age: 24,
  };

  return Response.json({ data });
};

const POST = async (req: Request) => {
  const { name, email, password } = await req.json();

  await dbConnect();
  const newUser = new User({ name, email, password, role: "customer" });

  console.log(newUser);

  const saveUser = await newUser.save();
  return Response.json({ saveUser });
};

export { GET, POST };

import { Input } from "@/components/ui/input";

const Login = () => {
  return (
    <div className="w-8/12 mx-auto my-10 p-10 rounded border">
      <h2 className="text-2xl">Login</h2>
      <Input type="email" placeholder="Email" />
    </div>
  );
};

export default Login;

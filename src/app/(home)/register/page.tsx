import { Input } from "@/components/ui/input";

const Register = () => {
  return (
    <div className="w-8/12 mx-auto my-10 p-10 rounded border">
      <h2 className="text-2xl">Register</h2>
      <Input type="email" placeholder="Email" />
    </div>
  );
};

export default Register;

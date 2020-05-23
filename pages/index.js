import { useForm } from "react-hook-form";

export default function Home() {
  const { register, watch } = useForm({
    defaultValues: { example: "test" },
  });
  const exampleValue = watch("example");

  return (
    <>
      <input name="example" ref={register} />
      <pre>value: {String(exampleValue)}</pre>
    </>
  );
}

"use server";

export async function handleForm(prevState: any, formData: FormData) {
  await new Promise((r) => setTimeout(r, 2000));
  console.log("logged in");
  console.log(formData);
  return {
    errors: ["Wrong Password", "Too Short"],
  };
}

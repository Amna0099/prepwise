import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { redirect } from "next/navigation";

const Page = async () => {
  // Get user
  const user = await getCurrentUser();
  
  // Early return if not authenticated
  if (!user?.id) {
    redirect("/sign-in");
  }

  // Safe to use user properties now
  return (
    <>
      <h3>Interview generation</h3>

      <Agent
  userName={user.name || "User"}
  userId={user.id}
  type="generate"
/>
    </>
  );
};

export default Page;
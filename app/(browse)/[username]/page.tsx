import { notFound } from "next/navigation";

import { getUserByUsername } from "@/lib/user-service";
import { isFollowingUser } from "@/lib/follow-service";
import { Actions } from "./_components/actions";
import { isBlockedByUser } from "@/lib/block-service";

interface UserPagaeProps {
  params: {
    username: string;
  };
}

const UserPage = async ({ params }: UserPagaeProps) => {
  const user = await getUserByUsername(params.username);

  if (!user) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);

  const isBlocking = await isBlockedByUser(user.id);

  // if (isBlocking) {
  //   notFound();
  // }

  return (
    <div className="flex flex-col gap-y-4">
      <p>Username: {user.username}</p>
      <p>user ID: {user.id}</p>
      <p>is following:{`${isFollowing}`}</p>
      <p>is blocked by the user:{`${isBlocking}`}</p>
      <Actions
        userId={user.id}
        isFollowing={isFollowing}
        isBlocking={isBlocking}
      />
    </div>
  );
};

export default UserPage;

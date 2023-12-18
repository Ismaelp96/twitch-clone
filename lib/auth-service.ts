import { currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const getSelf = async () => {
  const self = await currentUser();
  if (!self || !self.username) {
    throw new Error("Unauthorzied");
  }

  const user = await db.user.findUnique({
    where: { externaUserId: self.id },
  });

  if (!user) {
    throw new Error("Not found");

    return user;
  }
};

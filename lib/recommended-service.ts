import { db } from "./db";
import { getSelf } from "./auth-service";

export const getRecommended = async () => {
  let userId;
  let users = [];
  try {
    const self = await getSelf();
    userId = self.id;
  } catch {
    userId = null;
  }

  if (userId) {
    users = await db.user.findMany({
      where: {
        AND: [
          {
            NOT: {
              id: userId,
            },
          },
          {
            NOT: {
              followedBy: {
                some: {
                  followerId: userId,
                },
              },
            },
          },
        ],
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } else {
    users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  return users;
};

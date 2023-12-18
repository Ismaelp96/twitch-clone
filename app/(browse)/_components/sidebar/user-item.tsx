"use client";
interface UserItemProps {
  username: string;
  imageUrl: string;
  isLive?: boolean;
}
export const UserItem = ({ username, imageUrl, isLive }: UserItemProps) => {
  return <div>User Item</div>;
};

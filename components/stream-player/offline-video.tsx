import { WifiOff } from "lucide-react";

interface OfflineVideoProps {
  username: string;
}

export const OfflineVideo = ({ username }: OfflineVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center">
      <WifiOff className="h-10 w-10 text-muted-foreground" />
      <p className="text-muted-foreground">{username} is offiline</p>
    </div>
  );
};

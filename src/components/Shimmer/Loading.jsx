import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const Loading = () => {
  return (
    <div className="flex justify-center ">
      <Card className="w-[18rem] h-[20rem] m-10">
        <CardContent>
          <Skeleton className="w-full h-48 rounded-lg" />
        </CardContent>
        <CardHeader>
          <Skeleton className="w-[70%] h-[1rem] rounded-lg mb-2" />
          <Skeleton className="w-[50%] h-[1rem] rounded-lg mb-1" />
          <Skeleton className="w-[40%] h-[1rem] rounded-lg" />
        </CardHeader>
      </Card>
      <Card className="w-[18rem] h-[20rem] m-10">
        <CardContent>
          <Skeleton className="w-full h-48 rounded-lg" />
        </CardContent>
        <CardHeader>
          <Skeleton className="w-[70%] h-[1.5rem] rounded-lg mb-2" />
          <Skeleton className="w-[50%] h-[1rem] rounded-lg mb-1" />
          <Skeleton className="w-[40%] h-[1rem] rounded-lg" />
        </CardHeader>
      </Card>
    </div>
  );
};

export default Loading;

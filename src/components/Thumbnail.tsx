import React from "react";
import Image from "next/image";
import { cn, getFileIcon } from "@/lib/utils";

interface Props {
  type: string;
  extension: string;
  url: string;
  imageClassName?: string;
}

const Thumbnail = ({ type, extension, url = "", imageClassName }: Props) => {
  const isImage = type === "image" && extension !== "svg";
  return (
    <figure>
      <Image
        src={isImage ? url : getFileIcon(extension, type)}
        alt="thumbnail"
        width={100}
        height={100}
        className={cn("size-8 object-contain", imageClassName)}
      />
    </figure>
  );
};
export default Thumbnail;

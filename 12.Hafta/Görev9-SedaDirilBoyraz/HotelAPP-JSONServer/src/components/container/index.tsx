import React from "react";

interface Props {
  children?: React.ReactNode;
  designs?: string;
}

export default function Container({ children, designs }: Props) {
  return (
    <div className={`max-w-[1440px] mx-auto p-5 ${designs} `}>{children}</div>
  );
}

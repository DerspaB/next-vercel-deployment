import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties, FC } from "react";

interface ActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

export const ActiveLink: FC<ActiveLinkProps> = ({
  text,
  href,
}: ActiveLinkProps) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ? style : {}}>{text}</a>
    </Link>
  );
};

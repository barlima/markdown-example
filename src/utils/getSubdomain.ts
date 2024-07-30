import { headers } from "next/headers";

const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

const DOMAIN_REGEX = new RegExp(
  `^(?:https?:\/\/)?(?:[^.]+\\.)?(www\.)?(?<subdomain>.*)`
);

export const getSubdomain = () => {
  const hostname = headers().get("x-hostname");

  if (!DOMAIN) return;

  const prefix = hostname?.replace(`.${DOMAIN}`, "");

  if (prefix) {
    const matcher = prefix.match(DOMAIN_REGEX);
    return matcher?.groups?.subdomain;
  }
};

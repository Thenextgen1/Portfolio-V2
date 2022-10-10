import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { TechStack } from "../../typings";

const query = groq`
*[_type == "techStack"]
`;

type Data = {
  techStack: TechStack[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const techStack: TechStack[] = await sanityClient.fetch(query);

  res.status(200).json({ techStack });
}

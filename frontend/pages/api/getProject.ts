import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Project } from "../../typings";

const query = groq`
*[_type == "project"]
`;

type Data = {
  Project: Project[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const Project: Project[] = await sanityClient.fetch(query);

  res.status(200).json({ Project });
}

import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "@/util/dbConnect";
import User from "@/models/User";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json({ success: true, data: users });
    } catch (error) {
      console.log(error);
    }
  }

  if (method === "POST") {
    try {
      const user = await User.create(req.body);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      console.log(error);
    }
  }
};

export default handler;

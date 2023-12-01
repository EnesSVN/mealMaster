import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import dbConnect from "../../../util/dbConnect";
import bcrypt from "bcrypt";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    res.status(400).json({ success: false, message: "Email already exists" });
    return;
  }

  try {
    const newUser = await new User(body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    newUser.confirmPassword = await bcrypt.hash(newUser.confirmPassword, salt);
    await newUser.save();
    res.status(200).json({ success: true, data: newUser });
    return;
  } catch (error: any) {
    res.status(400).json({ success: false, message: error.message });
    return;
  }
};

export default handler;

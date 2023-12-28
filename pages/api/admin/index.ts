import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import jwt from "jsonwebtoken";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  if (method === "POST") {
    const { username, password } = req.body;

    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        serialize("token", jwt.sign({ username }, "ADMIN") as string, {
          maxAge: 60 * 60,
          path: "/",
          sameSite: "strict",
        })
      );
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  }
  if (method === "PUT") {
    res.setHeader(
      "Set-Cookie",
      serialize("token", "", {
        maxAge: -1,
        path: "/",
      })
    );
    res.status(200).json({ message: "Login successful" });
  }
};

export default handler;

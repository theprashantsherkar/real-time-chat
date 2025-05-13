import { User } from "../model/usersSchema";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginFunc = async (
  req: Request,
  res: Response,
  next: NextFunction
):Promise<any> => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user)
      return res.json({
        success: false,
        message: "user does not exists, Register first",
      });
    const isMatched = await bcrypt.compare(password, user.password);

    if (!isMatched)
      return res.json({
        successs: false,
        message: "incorrect password",
      });

    const token = jwt.sign(
      { _id: user._id },
      process.env.SECRET_KEY || "vehukjnedhavh"
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
        secure: true,
      })
      .json({
        success: true,
        message: `welcome back ${user.name}`,
      });
  } catch (error) {
    console.log(error);
  }
};

export const signinFunc = async (
  req: Request,
  res: Response,
  next: NextFunction
):Promise<any> => {
  try {
    const { name, email, role, password } = req.body;
    const oldUser = await User.findOne({ email });

    if (oldUser)
      return res.json({
        success: false,
        message: "User Already Exists, go and login!",
      });
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);

    const hashedPass = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      role,
      password: hashedPass,
    });

    const token = jwt.sign(
      { _id: user._id },
      process.env.SECRET_KEY || "vbrkhjndsc"
    );

    res
      .status(200)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: 60 * 60 * 1000,
      })
      .json({
        success: true,
        message: `${role} created successfully!`,
      });
  } catch (error) {
    console.log(error);
  }
};

export const logout = (req: Request, res: Response) => {
  res
    .clearCookie("token", {
      httpOnly: true,
    })
    .json({
      success: true,
      message: "signed out successfully!",
    });
};

export const profile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user)
    return res.json({
      success: false,
      message: "login first!",
    });

  const user = await User.findOne({ _id: req.user });

  if (!user)
    return res.json({
      success: false,
      message: "user Not found!",
    });

  res.json({
    success: true,
    message: `welcome ${user.name}`,
    user,
  });
};

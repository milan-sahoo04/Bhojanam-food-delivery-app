import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  // console.log(req.headers);
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!req.body) {
      req.body = {};
    }
    // console.log("token is: ", token_decode);
    req.body.userId = token_decode.id; //IndexOf
    // console.log("userId: ",req.body.userId);
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;

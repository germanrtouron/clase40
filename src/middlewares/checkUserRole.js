const isAdmin = true;

export const checkUserRole = (req, res, next) => {
  if (isAdmin === false) {
    res.json({
      error: "unauthorized",
      message:
        "Your account does not have sufficient permissions to perform this action. Please contact an administrator for assistance.",
    });
    throw new Error(
      "Your account does not have sufficient permissions to perform this action. Please contact an administrator for assistance."
    );
  } else {
    next();
  }
};

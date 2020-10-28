// const Router = require("express");
// const router = new Router();

// const CpuInfo = require("/proc/cpuinfo");

// router.get("/", async (req, res, next) => {
//   try {
//     const info = await CpuInfo.findAll();
//     if (!info) {
//       res.status(404).send({ message: "No info was found!" });
//     } else {
//       res.status(200).send({ message: "Info was found!" }, info);
//     }
//   } catch (e) {
//     next(e);
//   }
// });

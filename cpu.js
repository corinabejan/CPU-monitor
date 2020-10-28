const Router = require("express");
const router = new Router();
const si = require("systeminformation");

router.get("/", async (req, res, next) => {
  try {
    const cpuInfo = await si.cpuCurrentspeed((data) => {
      return data.data;
    });
    if (!cpuInfo) {
      res.status(404).send({ message: "There was no CPU usage data found!" });
    } else {
      res
        .status(200)
        .send({ message: "There was CPU usage data found", cpuInfo });
    }
  } catch (e) {
    next(e);
  }
});



module.exports = router;

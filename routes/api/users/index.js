import { Router } from "express";
import { aggregetion, uploadAvatar } from "../../../controllers/users/index";
import guard from "../../../middlewares/guard";
import { upload } from "../../../middlewares/upload";
import roleAccess from "../../../middlewares/role-access";
import { Role } from "../../../lib/constants";

const router = new Router();

router.post("/stats/:id", guard, roleAccess(Role.ADMIN), aggregetion);
router.patch("/avatar", guard, upload.single("avatar"), uploadAvatar);

export default router;

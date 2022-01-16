import { Router } from "express";
import { aggregetion } from "../../../controllers/users/index";
import guard from "../../../middlewares/guard";
import roleAccess from "../../../middlewares/role-access";
import { Role } from "../../../lib/constants";

const router = new Router();

router.post("/stats/:id", guard, roleAccess(Role.ADMIN), aggregetion);

export default router;

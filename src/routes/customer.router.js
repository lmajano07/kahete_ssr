import { Router } from "express";
import { getCustomerBySlug } from "../controllers/customer.controller.js";

const router = Router();

router.get("/customers/:slug", getCustomerBySlug);

export default router;

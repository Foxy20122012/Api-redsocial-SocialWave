import express  from "express";
import  {login}  from "../controllers/auth.js";
// import { Router } from "express";

const router = express.Router();

router.post('/login', login);

export default router;





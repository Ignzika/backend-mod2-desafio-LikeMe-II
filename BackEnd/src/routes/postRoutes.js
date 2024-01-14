import { Router } from "express";
import {
  postPost,
  getPost,
  getIDPost,
  deltePost,
  putLikePost,
  putUpdatePost,
  notFound,
} from "../controllers/postControllers.js";
const router = Router();

router
  .route("/posts")
  .get(getPost) // visualizar
  .post(postPost) //titulo,img,descripcion
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); // .all bloqueasr otras acciones con esta ruta
  
router
  .route("/posts/like/:id")
  .put(putLikePost) //likes
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); // .all bloqueasr otras acciones con esta ruta


router
  .route("/posts/:id")
  .get(getIDPost) // visualizar por id individual
  .put(putUpdatePost) // update for client (postman, thunder)
  .delete(deltePost) //delete
  .all(function (req, res, next) {
    res.status(405).json({ message: "not allowed" });
  }); // .all bloqueasr otras acciones con esta ruta
  
router.use("*", notFound); // para routas que no existan

export default router;

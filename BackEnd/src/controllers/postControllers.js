import {
  createGetModel,
  getIDModel,
  createPostModel,
  createLikeModel,
  createPutUpdate,
  createPatch,
  createDeleteModel,
} from "../models/postModels.js";

export const getPost = async (req, res, next) => {
  try {
    const result = await createGetModel();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getIDPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await getIDModel(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const postPost = async (req, res, next) => {
  const { titulo, img, descripcion } = req.body;
  try {
    const result = await createPostModel(titulo, img, descripcion);
    res.status(201).json(result);
    console.log(result);
  } catch (error) {
    next(error);
  }
};

export const putLikePost = async (req, res, next) => {
  const { id } = req.params;
  const { likes } = req.body;
  try {
    const result = await createLikeModel(id, likes);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

//update from client
export const putUpdatePost = async (req, res, next) => {
  const { id } = req.params;
  const { titulo, img, descripcion, likes } = req.body;
  try {
    const result = await createPutUpdate(id, titulo, img, descripcion, likes);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

//patch from client
export const patchPost = async (req, res, next) => {
  const { id } = req.params;
  const { titulo, img, descripcion, likes } = req.body;
  try {
    const result = await createPatch(id, titulo, img, descripcion, likes);
    res.status(200).json(result);

  } catch (error) {
    next(error);
  }
};

export const deltePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await createDeleteModel(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const notFound = (req, res) => {
  res.status(404).json({ error: "NOT FOUND" });
};

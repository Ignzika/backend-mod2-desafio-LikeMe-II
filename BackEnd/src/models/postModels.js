import { pool } from "../db.js";

//get all
export const createGetModel = async () => {
  try {
    const SQLquery = {
      text: "SELECT * FROM posts;",
    };
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message); //"Error GETing something"
  }
};

//get por id
export const getIDModel = async (id) => {
  try {
    const SQLquery = {
      text: "SELECT * FROM posts WHERE id = $1;",
      values: [id],
    };
    const response = await pool.query(SQLquery);
    if (response.rowCount == 0) {
      throw new Error("Not Found post from ID");
    }
    return response.rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message); //"Error GETing something by ID"
  }
};

// posteo
export const createPostModel = async (titulo, img, descripcion) => {
  try {
    const SQLquery = {
      text: "INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4) RETURNING *; ",
      values: [titulo, img, descripcion, 0],
    };
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating: " + error.message);
  }
};

// likes por id
export const createLikeModel = async (id, likes) => {
  try {
    const SQLquery = {
      text: "UPDATE posts SET likes = likes + 1 WHERE id= $1;",
      values: [id],
    };
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message); //"Error PUTing like on something by ID"
  }
};

//  update id on client
export const createPutUpdate = async (id, titulo, img, descripcion, likes) => {
  try {
    const SQLquery = {
      text: "UPDATE posts SET titulo = $2, img = $3, descripcion = $4, likes =$5 WHERE id=$1;",
      values: [id, titulo, img, descripcion, likes],
    };
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message); //"Error UPDATing on something by ID"
  }
};

//patch id on client
export const createPatch = async (id, titulo, img, descripcion, likes) => {
  try {
    const SQLquery = {
      text: "UPDATE posts SET titulo = COALESCE($2, titulo), img= COALESCE($3, img), descripcion = COALESCE($4, descripcion), likes = COALESCE($5, likes) WHERE id = $1 RETURNING *;",
      values: [id, titulo, img, descripcion, likes],
    };
    const response = await pool.query(SQLquery);
    if (response.rowCount == 0) {
      throw new Error("Not Found posts, check ID");
    }
    return response.rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message); //"Error PATCHing something by ID"
  }
}

// delete from id
export const createDeleteModel = async (id) => {
  try {
    const SQLquery = {
      text: "DELETE FROM posts WHERE id= $1;",
      values: [id],
    };
    const response = await pool.query(SQLquery);
    if (response.rowCount == 0) {
      throw new Error("This item has already been deleted or not exist...");
    }
    return response.rows;
  } catch (error) {
    console.log(error);
    throw new Error(error.message); //"Error DELETing like on something by ID"
  }
};

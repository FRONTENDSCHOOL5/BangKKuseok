import { accessInstance } from './axiosInstance';

export const uploadPost = async (postData) => {
  try {
    const response = await accessInstance.post(`/post`, postData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getPostDetail = async (postId) => {
  try {
    const response = await accessInstance.get(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getComments = async (postId) => {
  try {
    const response = await accessInstance.get(`/post/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const editPost = async ({ postId, post }) => {
  try {
    const response = await accessInstance.put(`/post/${postId}`, { post: { ...post } });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
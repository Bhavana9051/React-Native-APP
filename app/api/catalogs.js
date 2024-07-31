import client from "./client";

const endPoint = "/catalogs";

const getCatalogs = () => client.get(endPoint);

const addCatalogs = (catalog, onUploadProgress) => {
  const data = new FormData();

  data.append("title", catalog.title);
  data.append("price", catalog.price);
  data.append("categoryId", catalog.category.value);
  data.append("description", catalog.description);

  catalog.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (catalog.location) {
    data.append("location", JSON.stringify(catalog.location));
  }

  return client.post(endPoint, data, {
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default { addCatalogs, getCatalogs };

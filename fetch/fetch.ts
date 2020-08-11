export default async ({
  url,
  data,
  baseURL = "",
  contentType = "application/json",
  ...config
}: any) => {
  const origin = `${baseURL}${url}`;
  
  const response = await fetch(origin, {
    ...config, // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": contentType,
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json();
};

// export default fech;

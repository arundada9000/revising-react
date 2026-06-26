export const getGithubData = async () => {
  const response = await fetch("https://api.github.com/users/arundada9000");
  return response.json();
};

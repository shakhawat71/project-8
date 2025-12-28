export const appDetailsLoader = async ({ params }) => {
  const res = await fetch("/data.json");
  const data = await res.json();

  const app = data.find(item => item.id === params.id);

  if (!app) {
    throw new Response("App Not Found", { status: 404 });
  }

  return app;
};

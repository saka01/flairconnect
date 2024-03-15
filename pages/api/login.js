// pages/api/proxy.js
export default async (req, res) => {
  const response = await fetch("http://jobtest.apihutsy.com/api/auth/local", {
    method: req.method,
    headers: {
      "Content-Type": "application/json",
      // Forward any other necessary headers
    },
    body: JSON.stringify(req.body),
  });

  const data = await response.json();

  res.status(response.status).json(data);
};

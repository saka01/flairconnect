// // pages/api/proxy.js
// export default async (req, res) => {
//   const response = await fetch("http://jobtest.apihutsy.com/api/auth/local", {
//     method: req.method,
//     headers: {
//       "Content-Type": "application/json",
//       // Forward any other necessary headers
//     },
//     body: JSON.stringify(req.body),
//   });

//   if (!response.ok) {
//     const errorResponse = await response.json();

//     const errorMessage =
//       errorResponse.error && errorResponse.error.message
//         ? errorResponse.error.message
//         : "Login failed";
//     throw new Error(errorMessage);
//   }

//   const data = await response.json();
//   console.log("Login successful:", data);

//   // Store the JWT token
//   Cookies.set("token", data.jwt, {
//     expires: 7,
//     secure: true,
//     sameSite: "Lax",
//   });

//   router.push("/dashboard"); // Redirect to dashboard page after successful login
//   console.log(data);
// //   res.status(response.status).json(data);
// };

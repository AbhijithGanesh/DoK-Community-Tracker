let updateUsername = async (username: string, uid: string) => {
  let body = await fetch("http://dok-community-tracker.vercel.app/api/profiles/update_username", {
    body: JSON.stringify({
      username: username,
      userid: uid,
    }),
    method: "PUT",
  });
  let res = await body.json();
  return res;
};

let updateEmail = async (email: string) => {
  let body = await fetch("http://dok-community-tracker.vercel.app/api/profiles/update_email", {
    body: JSON.stringify({
      email: email,
    }),
    method: "PUT",
  });
  let res = await body.json();
  return res;
};

let updatePassword = async (password: string) => {
  let body = await fetch("http://dok-community-tracker.vercel.app/api/profiles/update_password", {
    body: JSON.stringify({
      password: password,
    }),
    method: "PUT",
  });
  let res = await body.json();
  return res;
};

export { updateEmail, updatePassword, updateUsername };

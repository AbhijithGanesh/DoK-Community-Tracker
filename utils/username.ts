let check_boolean_username = async (username: string) => {
  let data = await fetch(
    `http://dok-community-tracker.vercel.app/api/profiles/get_username_or_null`,
    {
      body: JSON.stringify({ userid: username }),
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let resolution = await data.json();

  if (resolution![0]?.username) {
    return true;
  } else {
    return false;
  }
};

let default_user_create = async (userid: string, username: string) => {
  let data = await fetch(
    `http://dok-community-tracker.vercel.app/api/profiles/empty_user_create`,
    {
      body: JSON.stringify({ userid: userid, username: username }),
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let resolution = await data.json();
  if (resolution == null) {
    return false;
  } else {
    return true;
  }
};

let profile_established_boolean = async (userid: string) => {
  let data = await fetch(
    `http://dok-community-tracker.vercel.app/api/profiles/profile_established`,
    {
      body: JSON.stringify({ userid: userid }),
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );
  let resolution = await data.json();
  if (resolution[0]?.profile_created == false) {
    return false;
  } else if (resolution[0]?.profile_created == true) {
    return true;
  }
};

let postUsername = async (username: string, userid: string) => {
  let data = await fetch(`http://dok-community-tracker.vercel.app/api/profiles/by_username`, {
    body: JSON.stringify({ userid: userid, username: username }),
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  let resolution = await data.json();
  return resolution
};

export {
  check_boolean_username,
  default_user_create,
  profile_established_boolean,
  postUsername,
};

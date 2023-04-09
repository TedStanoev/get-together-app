import { createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { auth } from "../config/firebase";
import { getDatabase, ref, set } from "@firebase/database";
import { REGISTER } from "../constants/errors/registerErrors";

export const createUser = async ({ username, email, password }) => {
  let data;
  let error;

  try {
    data = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    await addUserToDB(auth.currentUser);
  } catch (e) {
    console.log(e);
    error = REGISTER[e.code] || REGISTER.default;
  }

  return { data, error }

}

const addUserToDB = async (userData) => {
  const db = getDatabase();

  await set(ref(db, 'users/' + userData.uid), {
    username: userData.displayName,
    invitations: [],
    createdHangouts: [],
  })
}
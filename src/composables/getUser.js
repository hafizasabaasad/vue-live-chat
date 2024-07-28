import { projectAuth } from "../firebase/config";
import { ref } from "vue";

const user = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((_user) => {
    console.log("user sate change. Current user is:", _user);
   
    user.value = _user;
  
});

const getuser = () => {
  return { user };
};

export default getuser;

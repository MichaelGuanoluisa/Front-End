import useSWR, {SWRConfig} from 'swr'

import { getUser } from "../requests/userApi";

export default function useUser() {
  
  
  const { user, error } = useSWR("api_user", getUser);
  const {mutate} = SWRConfig("api_user")

  let loading = false
  if (!error && !user ){
    loading = true;
  }
  let loggedIn = false
  if(!error && user) {
    loggedIn = true;
  }
  console.log(loggedIn)
  console.log(user)

  return {
    loading,
    loggedIn,
    user: user,
    mutate
  };
}

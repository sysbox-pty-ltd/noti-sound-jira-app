import ForgeUI, {useEffect, useProductContext, useState} from "@forge/ui";
import SetupPage from "./pages/SetupPage";
import {checkNRegisterCompany} from "./services/AppService";
import LoadingPage from "./pages/LoadingPage";
const App = () => {
  const [token, setToken]= useState(null);
  const [notification, setNotification]= useState(null);
  const [user, setUser]= useState(null);
  const context = useProductContext();
  useEffect(async () => {
    const result = await checkNRegisterCompany(context);
    const resultJson = await result.json();
    setToken(resultJson.token);
    setNotification(resultJson.notification);
    setUser(resultJson.user);
  }, [context.accountId])

  if (token === null || user === null || notification === null) {
    return <LoadingPage />
  }

  return (
    <SetupPage token={token} notification={notification} user={user}/>
  );
};

export default App;

import ForgeUI, {useEffect, useProductContext, useState} from "@forge/ui";
import api, {route} from '@forge/api';
import SetupPage from "./setup/SetupPage";

const getInstance = async (projectId) => {
  const response = await api
    .asApp()
    .requestJira(route `/rest/api/3/project/${projectId}`);
  const results = await response.json();
  return results
}

const App = () => {
  // const [serverInfo] = useState(async () => await getInstance())
  // console.log('serverInfo', serverInfo);
  const context = useProductContext();
  useEffect(() => {
    console.log('context.accountId', context);
    // getInstance(context.platformContext.)
  }, [context.accountId])

  return (
    <SetupPage />
  );
};

export default App;

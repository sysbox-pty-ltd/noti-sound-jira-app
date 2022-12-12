// the new api endpoint
const endPoint = `https://nspi.sysbox.app`
import {fetch} from '@forge/api';

export const checkNRegisterCompany = (data) => {
  return fetch(`${endPoint}/jira/register`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  })
}

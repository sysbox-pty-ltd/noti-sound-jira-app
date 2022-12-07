import ForgeUI, {
  Fragment,
  SectionMessage,
  Text,
  Heading,
} from "@forge/ui";
import SetupStepOne from "./SetupPageComponents/SetupStepOne";
import SetupStepTwo from "./SetupPageComponents/SetupStepTwo";

const SetupPage = ({notification}) => {

  return (
    <Fragment>
      <Text>Designed to play a sound when an issue is created (updated/deleted is WIP...)</Text>
      <SectionMessage title="Critical: Change of address" appearance="warning">
        <Text>As our service provider cutting off our free service, we have to move to another server</Text>
        <Text>PLEASE UPDATE YOUR JIRA AUTOMATION TO THE NEW ADDRESS IN STEP 1</Text>
        <Text>to avoid any disruption of services</Text>
      </SectionMessage>
      <SetupStepOne notification={notification} />
      <SetupStepTwo notification={notification} />
    </Fragment>
  )
}

export default SetupPage;

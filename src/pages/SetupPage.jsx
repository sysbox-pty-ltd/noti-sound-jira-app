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
      <SectionMessage title="Purpose of this app" appearance="info">
        <Text>Designed to play a sound when an issue is created (updated/deleted is WIP...)</Text>
      </SectionMessage>
      <SetupStepOne notification={notification} />
      <SetupStepTwo notification={notification} />
    </Fragment>
  )
}

export default SetupPage;

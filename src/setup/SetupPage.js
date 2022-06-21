import ForgeUI, {Fragment, SectionMessage, Text} from "@forge/ui";

const SetupPage = () => {
  return (
    <Fragment>
      <SectionMessage title="Purpose of this app" appearance="info">
        <Text>Designed to play a sound when an issue is created (updated/deleted is WIP...)</Text>
      </SectionMessage>
    </Fragment>
  )
}

export default SetupPage;

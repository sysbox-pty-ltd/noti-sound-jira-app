import ForgeUI, {Fragment, Heading, Link, Text, Image, Table, Row, Cell} from "@forge/ui";

const SetupStepOne = ({notification}) => {
  return (
    <Fragment>
      <Heading size="medium">Step 2: Open your sound player</Heading>
      <Text>You can now open your <Link href={notification.playerUrl} openNewTab={true}>{notification.playerUrl}</Link>, and wait for new tickets to come.</Text>
      <Text>
        Scan the QRCode below to open Sound Player on your mobile device:
      </Text>
      <Image src={notification.soundPlayerQrCode} size={"medium"}/>
      <Text>
        Or to click the link below to open on the same computer.
      </Text>
      <Text>
        <Link href={notification.playerUrl} openNewTab={true} appearance={'primary-button'} >Open Sound Player</Link>
      </Text>
    </Fragment>
  )
}

export default SetupStepOne;

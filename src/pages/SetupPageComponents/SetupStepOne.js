import ForgeUI, {Code, Fragment, Heading, Image, Link, Text, useEffect, useProductContext, useState, Table, Row, Cell} from "@forge/ui";

const stepImgsFolder = 'https://res.cloudinary.com/duudulwyh/image/upload/v1655820738/noti-sound/setup-guide/automation-setup/';
const setupVideoCover = 'https://res.cloudinary.com/duudulwyh/image/upload/v1656675279/noti-sound/setup-guide/automation-setup/setupVideoCover_zmev6t.png';
const setupVideo = 'https://www.youtube.com/watch?v=suBaZODElUQ';

const stepImgs = [
  'step1_rwskvf.png',
  'step2_hn38wv.png',
  'step3_xa0oen.png',
  'step4_c59b9t.png',
  'step5_lakpiu.jpg',
  'step6_qwnwoi.jpg',
  'step7_q4otnn.jpg',
].map(image => `${stepImgsFolder}/${image}`)

const SetupStepOne = ({notification}) => {
  const [automationUrl, setAutomationUrl] = useState('');
  const context = useProductContext();
  useEffect(() => {
    setAutomationUrl(`/jira/servicedesk/projects/${context.platformContext.projectKey}/settings/automate#/rule/new/new`)
  }, [context]);
  return (
    <Fragment>
      <Heading size="medium">Step 1: setup your Jira Automation</Heading>
      <Text>
        Setting up your{' '}
        <Link href={automationUrl} openNewTab={true}>Jira Automation</Link>{' '}
        to send data to:
        <Code text={notification.webhookUrl} />
      </Text>
      <Fragment>
        <Table>
          <Row>
            {stepImgs.map((url, index) => {
              if (index === 0) {
                return (
                  <Cell>
                    <Image src={setupVideoCover} alt={'Setup Video'} />
                  </Cell>
                )
              }
              return (
                <Cell>
                  <Image src={url} alt={`Step ${index}`} />
                </Cell>
              )
            })}
          </Row>
          <Row>
            {stepImgs.map((url, index) => {
              if (index === 0) {
                return (
                  <Cell>
                    <Text><Link href={setupVideo} openNewTab={true}>Watch Video</Link></Text>
                  </Cell>
                )
              }
              return (
                <Cell>
                  <Text><Link href={url} openNewTab={true}>{`Step ${index}`} Enlarge</Link></Text>
                </Cell>
              )
            })}
          </Row>
        </Table>
      </Fragment>
      <Text>
        <Link href={setupVideo} openNewTab={true} appearance={'link'}>Watch Setup Video</Link>
        <Link href={automationUrl} openNewTab={true} appearance={'button'}>Go To Setup</Link>
      </Text>
    </Fragment>
  )
}

export default SetupStepOne;

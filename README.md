# Noti Sound Jira App

The whole purpose of this project is play a sound when a new ticket is created.

## Requirements

See [developer.atlassian.com/platform/forge/](https://developer.atlassian.com/platform/forge) for documentation and tutorials explaining Forge.
See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Quick start

- Modify your app by editing the `src/index.jsx` file.

- Build and deploy your app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```



### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.
- IMPORTANT: if you want to run without docker or on a Mac, please use this to tunnel
```
# run without docker
npm install -g @forge/tunnel
FORGE_DEV_TUNNEL=true forge tunnel
```

## Support

See [Get help](mailto:support@sysbox.com.au) for how to get help and provide feedback.

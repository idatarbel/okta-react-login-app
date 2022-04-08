Get this application from Github using this Git command:

> git clone https://github.com/idatarbel/okta-react-login-app.git

This will create a directory called okta-react-login-app.
Go into the okta-react-login-app directory and run this command:

> npm install

Then, run this command to launch the application:

> npm start

This will eventually launch a ReactJS app in a window of your default browser.

You will be taken to an Okta login screen.

You can test log in with this user account:
username: john.doe@okta-react-login-app.com
password: AWorkingExample1!

This app depends on an app running on the Okta developer platform.  
I created one for you and put the credentials for accessing the app in the .env file in the root directory of this project.

You can reconfigure this .env file to point to your own OKTA application. Here are instructions for setting up your OKTA application.

First, by default, React apps run on port 3000. If you want to run on some other port, perhaps 8080, include the following in your .env file:
PORT=8080

The configurations I setup in the Okta development app assume that you are using the default 3000 port.

STEP 1: Set Up Okta
See instructions here: https://developer.okta.com/docs/guides/sign-into-spa-redirect/angular/main/
Set up your Okta org. The CLI is the quickest way to work with your Okta org, so we recommend using it for the first few steps. If you don't want to install the CLI, you can manually sign up for an org (opens new window)instead. We provide non-CLI instructions along with the CLI steps below.

1. Install the Okta command-line interface: Okta CLI (https://cli.okta.com/).
2. If you don't already have a free Okta developer account, create one by entering okta register on the command line.
3. Make a note of the Okta Domain as you need that later.
4. IMPORTANT: Set the password for your Okta developer org by opening the link that's shown after your domain is registered. Look for output similar to this:

Your Okta Domain: https://dev-xxxxxxx.okta.com
To set your password open this link:
https://dev-xxxxxxx.okta.com/welcome/xrqyNKPCZcvxL1ouKUoh
Note: If you don't receive the confirmation email sent as part of the creation process, check your spam filters for an email from noreply@okta.com

5. Connect to your Okta developer org if you didn't create one in the last step (successfully creating an Okta org also signs you in) by running the following command. You need the URL of your org — which is your Okta domain with https:// prepended — and an API/access token:

STEP 2: Create an Okta integration for your app
An application integration represents your app in your Okta org. The integration configures how your app integrates with the Okta services including: which users and groups have access, authentication policies, token refresh requirements, redirect URLs, and more. The integration includes configuration information required by the app to access Okta.

To create your app integration in Okta using the CLI:

1. Create the app integration by running:
   okta apps create spa

2. Enter Quickstart when prompted for the app name.
3. Specify the required redirect URI values:
   Redirect URI: http://localhost:3000/login/callback
   Post Logout Redirect URI(s): select the default option, http://localhost:3000
4. Make note of the application configuration printed to the terminal as you use the Client ID and Issuer to configure your SPA.

At this point, you can log into developer.okta.com and navigate to Applications/Applications. Click on the name of the Okta app you created in the last step (i.e., "Quickstart")
Here is what the my fully configured app looks like:

Client ID 0oa4ljugakR5M2SvN5d7
Client authentication
(SELECTED) Use PKCE (for public clients)

General Settings
Okta domain dev-57630070.okta.com

APPLICATION
App integration name Okta Example
Application type Single Page App (SPA)
Grant type Client acting on behalf of a user

(CHECKED)- Authorization Code  
(CHECKED)- Interaction Code
(CHECKED)- Refresh Token
(CHECKED)- Implicit (hybrid)
(CHECKED)- - Allow ID Token with implicit grant type
(CHECKED)- - Allow Access Token with implicit grant type

Refresh Token
Refresh token behavior
(SELECTED) Rotate token after every use (recommended)
(NOT SELECTED) Use persistent token

Grace period for token rotation 30 Seconds

USER CONSENT
(UNCHECKED) Require consent
(NOT PROVIDED) Terms of Service URI
(NOT PROVIDED) Policy URI
(NOT PROVIDED) Logo URI

LOGIN
Sign-in redirect URIs
(UNCHECKED) Allow wildcard \* in login URI redirect.
Set the following values:
http://localhost:3000/callback
http://localhost:3000/login/callback

Sign-out redirect URIs
http://localhost:3000/

Login initiated by App Only

(NOT SET) Initiate login URI

STEP 3: Grant cross-origin access to websites
You can enable CORS for websites that need cross-origin requests to the Okta API.
Cors Setup: https://developer.okta.com/docs/guides/enable-cors/main/

1. Select Security and then API.
2. Select the Trusted Origins tab.
3. Select Add Origin and then enter a name for the organization origin.
4. In the Origin URL box, specify the base URL of the website that you want to allow cross-origin requests from.
5. Make sure that CORS is selected as the Type. You can also enable the Redirect setting, which allows for redirection to this Trusted Origin after a user signs in or out.
6. Click Save.

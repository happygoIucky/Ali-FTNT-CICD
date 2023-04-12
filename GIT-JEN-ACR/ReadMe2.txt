GitHub 
- Ensure that you have done the necessary such as doing a webhook to Jenkins
- e.g. https://bbb2-218-212-22-206.ap.ngrok.io/github-webhook/
- I am using the local machine Jenkins, u have to expose Jenkins to internet, therefore you could download Ngrok and run the "ngrok http <port>" to obtain the URL

Jenkins
-  Create a new pipeline, checked on "Github hook trigger for GITScm Polling"
- Select Pipeline script from SCM and paste your Git Repo URL.
- Select your branch for e.g. */main 
- Specify for your Jenkinsfile path e.g. directory/Jenkinsfile
- Steps
  a) Clone the entire SCM
  b) Build the image locally in your docker machine
  c) login to Alibaba Cloud CR with the credentials (Ensure Credential is saved in your Jenkins Global Credential)
  d) Push Images with tagged number for easier verification
  
  FortiDevSec
  - you can use run this normally or automatically.
  - Guide : https://docs.fortinet.com/document/fortidevsec/23.1.a/user-guide/546812/introduction


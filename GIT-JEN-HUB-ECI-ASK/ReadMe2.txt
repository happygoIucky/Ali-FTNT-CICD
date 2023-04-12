GitHub 
- Ensure that you have done the necessary such as doing a webhook to Jenkins
- e.g. https://bbb2-218-212-22-206.ap.ngrok.io/github-webhook/
- I am using the local machine Jenkins, u have to expose Jenkins to internet, therefore you could download Ngrok and run the "ngrok http <port>" to obtain the URL

Jenkins
-  Create a new pipeline, checked on "Github hook trigger for GITScm Polling"
- Select Pipeline script from SCM and paste your Git Repo URL.
- Select your branch for e.g. */main 
- Specify for your Jenkinsfile path e.g. directory/Jenkinsfile

Docker Hub 
- Remember to add your Username/PW and ID in your Jenkins Plugin (Credentials)

Terraform
- Specify the Environment variables so you can use VScode to run
- remember to install Terraform plugin as well in Jenkins 

node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

  
 
    stage('Shell script 0') {
   
        sh 'sh.sh'
    
      
}
    


    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */
   
         dir("GIT-JEN-ACR")
{
    script
    {
       // app = docker.build("GIT-JEN-ACR", "-f ./GIT-JEN-ACR/Dockerfile .")
        app = docker.build("jawnns/jawnrepo3:${env.BUILD_TAG}")
    }
}
        
        //sh "sudo docker build -t cicddemo:${tag_version} ."
        //sh "sudo docker tag cicddemo:${tag_version} ${acr_url}/${acr_namespace}/${acr_repo_name}:${tag_version}"
    }
    

    stage('Test'){
          
                 echo 'Empty'
            
        }
        
    stage('Push image') {

        docker.withRegistry('https://registry-intl.ap-southeast-1.aliyuncs.com/jawnns/jawnrepo3','ack-credentials') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
            
           
          
        }
    }



    
}

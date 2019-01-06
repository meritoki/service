pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'node index.js'
      }
    }
    stage('Deploy') {
      steps {
        sh 'mkdir -p /home/jorodriguez/meritoki/dailybread/'
        sh 'sudo rm -rf service'
        sh 'sudo git clone -b dev https://github.com/meritoki/service.git'
        sh 'cd service'
        sh 'git branch -a'
        sh 'git status'
        sh 'docker stop service || true && docker rm service || true'
        sh 'docker rmi $(docker images |grep \'dailybread/service\') || true'
        sh 'docker build -t dailybread/service .'
        sh 'sudo docker run --network host -dlt --restart unless-stopped --name service -p 3000:3000 dailybread/service'
      }
    }
  }
}
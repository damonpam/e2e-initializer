pipeline {
    options {
        disableConcurrentBuilds()
    }

    agent {
        docker {
            image 'timbru31/java-node:latest'
        }
    }

    environment {
        BUILD_URL = "${BUILD_URL}"
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building project...'
                sh 'yarn install'
            }
            post {
                always {
                    junit '*.xml'
                    script {
                        allure([
                                includeProperties: false,
                                jdk              : '',
                                properties       : [],
                                reportBuildPolicy: 'ALWAYS',
                                results          : [[path: 'target/allure-results']]
                        ])
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy project...'
            }
        }
    }
    post {
        always {
            influxDbPublisher(selectedTarget: 'TestDB', customData: assignURL(BUILD_URL))
        }
    }
}

def assignURL(build_url) {
    def buildURL = [:]
    buildURL['url'] = build_url
    return buildURL
}

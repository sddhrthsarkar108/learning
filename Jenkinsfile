pipeline {
    agent any

    stages {
        stage('Build') {
            environment {
                COMPOSE_PROJECT_NAME      = "${env.GIT_COMMIT}-${env.BUILD_ID}"
                DOCKER_TAG_SUFFIX         = ":${COMPOSE_PROJECT_NAME}"

                WEB_APP_SERVICE_NAME      = "${env.COMPOSE_PROJECT_NAME}_webapp_1"
                WEB_APP_PORT_MAPPING      = '80'

                DB_SERVICE_NAME           = "${env.COMPOSE_PROJECT_NAME}_db_1"
                DB_PORT_MAPPING           = '1433'

                REST_API_SERVICE_NAME     = "${env.COMPOSE_PROJECT_NAME}_app-services_1"
                SEARCH_SERVICE_NAME       = "${env.COMPOSE_PROJECT_NAME}_search-services_1"

                ES_PORT_MAPPING           = '9200'
                ES_HOST_URL               = "http://${env.COMPOSE_PROJECT_NAME}-elasticsearch-1:${ES_PORT_MAPPING}"

                VAULT_PORT_MAPPING        = '8200'

                RUN_CHROME_HEADLESS       = true
            }

            steps {
                sh "echo testing personal git"
                setBuildStatus("Build complete", "SUCCESS");
            }

            post {
                success {
                         script  {
                            currentBuild.result = 'SUCCESS'
                            setBuildStatus("Build complete", "SUCCESS");
                         }
                }

                aborted {
                        script  {
                            currentBuild.result = 'ABORTED'
                            setBuildStatus("Build failed", "FAILURE");
                        }
                }

                failure {
                        script  {
                            currentBuild.result = 'FAILED'
                            setBuildStatus("Build failed", "FAILURE");
                        }
                }

                always {
                        script {
                        }
                }
            }
        }
    }
}

void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: "https://github.com/sddhrthsarkar108/learning"],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}


void notifyPending() {
    githubNotify  description: 'This is a shorted example',  status: 'PENDING', repo: 'lab49/ProjectTemplate_FullstackReactJava', credentialsId: 'git-user-pass', account: 'sisarkar-lab49', sha: '${env.GIT_COMMIT}'
}

void notifySuccess() {
    githubNotify  description: 'This is a shorted example',  status: 'SUCCESS', repo: 'lab49/ProjectTemplate_FullstackReactJava', credentialsId: 'git-user-pass', account: 'sisarkar-lab49', sha: '${env.GIT_COMMIT}'
}

void notifyError() {
    githubNotify  description: 'This is a shorted example',  status: 'ERROR', repo: 'lab49/ProjectTemplate_FullstackReactJava', credentialsId: 'git-user-pass', account: 'sisarkar-lab49', sha: '${env.GIT_COMMIT}'
}

void notifyFailure() {
    githubNotify  description: 'This is a shorted example',  status: 'FAILURE', repo: 'lab49/ProjectTemplate_FullstackReactJava', credentialsId: 'git-user-pass', account: 'sisarkar-lab49', sha: '${env.GIT_COMMIT}'
}

void cleanResources() {
    sh "docker rm -f \$(docker ps -qa -f name='${COMPOSE_PROJECT_NAME}') || true"
    sh "docker network rm '${COMPOSE_PROJECT_NAME}' || true"
    sh "docker rmi -f \$(docker images '${COMPOSE_PROJECT_NAME}'* --quiet) || true"
    sh "docker volume rm SECRETS_FOR_${COMPOSE_PROJECT_NAME} || true"
}

void publishCucumberReport(){
    cucumber fileIncludePattern: '**/target/cucumber-*.json', sortingMethod: 'ALPHABETICAL'
}

void archiveScreenshots(){
    archiveArtifacts artifacts: '**/target/**/*screenshot.png'
}

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
        }
    }
}

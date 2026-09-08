//Jenkins Pipeline flow
pipeline {
    agent any
    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['smoke', 'regression', 'Addtest'],
            description: 'Select test suite'
        )
    }
    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                 bat "npm run %TEST_SUITE%"
            }
        }
    }
    post {

        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**',
                allowEmptyArchive: true
            )

            echo 'Pipeline completed'
        }

        success {
            echo 'Playwright tests passed'
        }

        failure {
            echo 'Playwright tests failed'
        }
    }
}
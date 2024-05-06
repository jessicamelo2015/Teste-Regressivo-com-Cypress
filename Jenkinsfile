pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/jessicamelo2015/Teste-Regressivo-com-Cypress.git'
               
            }
        }
        stage('Instalar dependencias') {
            steps{
             sh 'npm install cypress'
        }
    }
        stage('Executar Testes') {
            steps {
               sh 'set NO_COLOR=1 npm test'
               }
            }
        }
    }  
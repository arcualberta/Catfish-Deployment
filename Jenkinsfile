
/*
 * Kamal Ranaweera
 * Reference: https://faun.pub/jenkins-ci-cd-to-deploy-an-asp-net-core-application-6145b5308bff
*/

pipeline{
    agent any
           
    triggers {
        pollSCM 'H * * * *'
    }
	
	stages{
		stage('Deploy'){
		    steps{
				script{
					if (env.BRANCH_NAME == 'Catfish-2.0-published-test'){				
						bat "xcopy ..\\_Test_Data\\futureofthepast.arts.ualberta.ca\\wwwroot ${WORKSPACE}\\catfish\\wwwroot /s /e /Y"
						bat "copy ..\\_Test_Data\\futureofthepast.arts.ualberta.ca\\appsettings.json ${WORKSPACE}\\catfish\\appsettings.json"
						bat """ "C:\\Program Files\\IIS\\Microsoft Web Deploy V3\\msdeploy.exe"  -verb:sync -source:iisApp="${WORKSPACE}\\catfish" -dest:iisApp="catfish-dev.artsrn.ualberta.ca" -enableRule:AppOffline """   	
					}
				}
		    }
		}		
	}
 }

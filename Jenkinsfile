
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
						//bat "xcopy ..\\_Test_Data\\futureofthepast.arts.ualberta.ca\\wwwroot ${WORKSPACE}\\catfish2\\wwwroot /s /e /Y"
						bat "xcopy E:\\inetpub\\wwwroot2\\futureofthepast.arts.ualberta.ca\\wwwroot\\uploads  ${WORKSPACE}\\catfish2\\wwwroot\\uploads /s /e /Y"
						bat "copy E:\\inetpub\\wwwroot2\\futureofthepast.arts.ualberta.ca\\wwwroot\\assets\\css\\public\\custom.css  ${WORKSPACE}\\catfish2\\wwwroot\\assets\\css\\public\\custom.css"
						bat "copy ..\\_Test_Data\\futureofthepast.arts.ualberta.ca\\appsettings.json ${WORKSPACE}\\catfish2\\appsettings.json"
						bat """ "C:\\Program Files\\IIS\\Microsoft Web Deploy V3\\msdeploy.exe"  -verb:sync -source:iisApp="${WORKSPACE}\\catfish2" -dest:iisApp="catfish-dev.artsrn.ualberta.ca" -enableRule:AppOffline """   	
					}
				}
		    }
		}		
	}
 }

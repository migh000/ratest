AWS = require("aws-sdk"); 
re = new AWS.ResourceExplorer({ region: 'us-east-1'}); 
re.listResources({ ResourceType: "AWS::RDS::DBClusterParameterGroup" }).promise().then(console.log)


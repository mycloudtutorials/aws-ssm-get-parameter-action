const core = require('@actions/core')
const github = require('@actions/github')

try {
    const parameterName = core.getInput('parameter-name')
    console.log('Parameter Name:', parameterName)

    const awsRegion = core.getInput('aws-region')
    console.log('AWS Region:', awsRegion)

    core.setOutput("value", "you sent:" +  parameterName + " in region: " + awsRegion)

} catch (error) {
    core.setFailed(error.message)
}
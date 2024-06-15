const fs = require('fs')

const readJsonSchema = (schemaName) => {
    const schemaFolder = 'resource/schema'
    const jsonFile = fs.readFileSync(`${schemaFolder}/${schemaName}`, 'utf-8')
    const parseSchema = JSON.parse(jsonFile)
    // console.log(parseSchema)
    return parseSchema
}

module.exports = readJsonSchema

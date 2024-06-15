module.exports = {
    reporter: 'node_modules/mochawesome',
    'reporter-option': [
        'reportDir=report-mochawesome',
        'reportFilename=[status]_[datetime]-[name]-report',
        'html=true',
        'json=true',
        'overwrite=false',
        'timestamp=longDate',
    ],
}

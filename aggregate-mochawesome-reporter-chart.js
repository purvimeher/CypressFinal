// aggregate-mochawesome-reporter-chart.js

const path = require('path');
const fs = require('fs-extra');
const { v1: uuidv1 } = require('uuid');

function aggregateResults() {
  const jsonPath = path.join('./report/mochawesome.json');
  const report = fs.readJsonSync(jsonPath)
  report.results.forEach((report) => {
      aggregate(report.suites[0]);
  });
  fs.writeJsonSync(jsonPath, report);
}
function aggregate(suite, level = 0) {
  const childSuites = suite.suites.map(child => aggregate(child, ++level))
  suite.passes = suite.passes.concat(childSuites.map(child => child.passes)).flat()
  suite.failures = suite.failures.concat(childSuites.map(child => child.failures)).flat()
  suite.pending = suite.pending.concat(childSuites.map(child => child.pending)).flat()
  suite.skipped = suite.skipped.concat(childSuites.map(child => child.skipped)).flat()
  suite.duration = childSuites.map(child => child.duration).flat().reduce((acc, current) => acc + current, suite.duration)
  //On pourrait additionner les durations aussi
  if (!suite.tests.length && suite.suites[0].tests.length) {
    // trigger chart when to describe has no tests
    suite.tests = [               
      {
        "title": "Aggregate of tests",
        "fullTitle": "Aggregate of tests",
        "duration": 0,
        "pass": suite.failures.length==0,
        "fail": suite.failures.length>0,
        "pending": false,
        "skipped": false,
        "isHook": false,
        "code": "N/A",
        "context": null,
        "err": {},
        "uuid": uuidv1(),
        "parentUUID": suite.uuid,
      },
    ]
  }
  return suite
}

aggregateResults()

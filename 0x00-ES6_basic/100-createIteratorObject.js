export default function* createIteratorObject(report) {
    for (const dept of Object.keys(report.allEmployees)) {
      for (const employee of report.allEmployees[dept]) {
        yield employee;
      }
    }
  }
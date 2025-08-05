var appointmentPurpose = context.getVariable("req.appointmentPurpose");

var scheduleType = "";

if (appointmentPurpose === "PROVIDE") {
    scheduleType = "VFINSTALL";
} else if (appointmentPurpose === "REPAIR") {
    scheduleType = "VFSERVICE";
}

context.setVariable("scheduleType", scheduleType);
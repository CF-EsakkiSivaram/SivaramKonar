var orderId = context.getVariable('req.orderId');
var data = {
    "data": [
        {
            "models": [
                "WorkOrder",
                "workOrderTask",
                "workOrderTaskAppointmentWindow",
                "crew",
                "User",
                "taskType",
                "ZStatus",
                "taskScheduleBreakdown",
                "site"
            ],
            "columns": {
                "appointmentWindowId": "WorkOrderTaskAppointmentWindow.appointmentWindowId",
                "scheduleType": "workOrderTask.cflScheduleType",
                "broadbandProduct": "workOrderTask.cflBroadbandProduct",
                "accountNumber": "WorkOrder.cflAccountNumber",
                "createdDate": "workOrderTask.createdDate",
                "modifiedDate": "workOrderTask.modifiedDate",
                "workOrderTaskResult": "workOrderTask.result",
                "workOrderTaskId": "workOrderTask.id",
                "workOrderTaskModifiedDate": "workOrderTask.modifiedDate",
                "workOrderTaskScheduledDate": "IF({$workOrderTask.scheduledDate} IS NULL, '-', {$workOrderTask.scheduledDate})",
                "workOrderTaskScheduledDateMapView": "IF({$workOrderTask.scheduledDate} IS NULL, '-', {$workOrderTask.scheduledDate})",
                "workOrderTaskAppointmentWindow": "workOrderTaskAppointmentWindow.startEndJson",
                "workOrderTaskAppointmentWindowStartDate": "workOrderTaskAppointmentWindow.startDate",
                "workOrderTaskDueDate": "IF({$workOrderTask.dueDate} IS NULL, '-', {$workOrderTask.dueDate})",
                "workOrderTaskAppointmentWindowEndDate": "workOrderTaskAppointmentWindow.endDate",
                "workOrderTaskEstimatedDuration": "Round(({$workOrderTask.estimatedDuration})/60,2)",
                "crewName": "crew.name",
                "userName": "User.name",
                "assignee": "IF({$taskType.crewTask}=true,{$crew.name},{$User.name})",
                "statusName": "ZStatus.name",
                "statusNameColor": "ZStatus.colorCode",
                "taskIdTaskTypeName": "CONCAT({$workOrderTask.id},'-',{$taskType.name})",
                "taskTypeName": "taskType.name",
                "installationType": "WorkOrder.cflInstallationType",
                "systemOfOrigen": "WorkOrder.cflSystemOfOrigen",
                "accountType": "WorkOrder.cflAccountType",
                "serviceType": "workOrderTask.cflServiceType",
                "regionId": "site.regionId",
                "borough": "site.regionId",
                "externalOrderReference": "WorkOrder.externalOrderReference",
                "customerId": "workOrder.customerId",
                "customerName": "site.name",
                "city": "site.city",
                "address": "site.address",
                "UPRN": "site.id",
                "postcode": "site.postalCode",
                "contactPhone": "site.contactPhone",
                "deviceName": "site.cflDeviceName",
                "oltIP": "site.cflIP",
                "email": "site.contactEmail"
            },
            "orderBy": "workOrderTaskAppointmentWindowStartDate ASC",
            "outerJoinOnModel": "workOrderTask",
            "filter": "{$externalOrderReference} = '"+ orderId +"'",
            "distinct": true
        }
    ]
};
var payload = JSON.stringify(data);
print(payload);
context.setVariable('reqPayload', payload);
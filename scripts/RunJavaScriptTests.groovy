includeTargets << grailsScript("_GrailsInit")
includeTargets << grailsScript("_GrailsTest")

def baseUrl = new File("test-javascript").absolutePath
def reportLocation = "${baseUrl}/reports"
def configLocation = "${baseUrl}/jsTestDriver.conf"
def jstdJar = "${baseUrl}/JsTestDriver-1.3.4.jar"
def browser = "firefox"
def serverPort = "9876"

target(main: "Test Jasmine specifications") {
    
    println "Javascript Test Base Path ${baseUrl}"

    functionalTestPhasePreparation()

    Date startTime = new Date()

    event("StatusUpdate", ["Starting Jasmine test phase"])

    def jsTestDriverCommand = "java -jar ${jstdJar} --config ${configLocation} --port ${serverPort} --browser ${browser} --reset --tests all --testOutput ${reportLocation} --raiseOnFailure true"

    println jsTestDriverCommand

    Process executingProcess = jsTestDriverCommand.execute()

    println executingProcess.text

    boolean buildPassed = executingProcess.exitValue() == 0

    functionalTestPhaseCleanUp()

    println "-------------------------------------------------------"
    println "Jasmine Tests Completed in ${new Date().getTime() - startTime.getTime()}ms"
    def msg = "Jasmine Tests ${buildPassed ? "PASSED" : "FAILED"} - view reports in " + new File(reportLocation).absolutePath
    println "-------------------------------------------------------"

    event("StatusFinal", [msg])



    event("StatusUpdate", ["Finished Jasmine test phase"])
}

setDefaultTarget(main)

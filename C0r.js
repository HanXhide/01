function C0r() {

    var rollerRows= parseFloat(document.getElementById('i').value);
   
    var rollerDiameter = parseFloat(document.getElementById('Dwe').value);
    var contactAngle = parseFloat(document.getElementById('CA').value);
    var CADegree =degreesToRadians(contactAngle);
    var numberOfRollers = parseFloat(document.getElementById('Z').value);
    var rollerLength = parseFloat(document.getElementById('Lwe').value);
    var pitchDiameter = parseFloat(document.getElementById('Dpw').value);
    
    // Check if pitchDiameter is not zero to avoid division by zero
    if (pitchDiameter !== 0) {
        
        var gamma = rollerDiameter*Math.cos(CADegree) / pitchDiameter;
        var C0r = 44 * (1 - gamma) *rollerRows*numberOfRollers * rollerLength * rollerDiameter * Math.cos(CADegree)/1000;
        
        document.getElementById('gamma').innerText = gamma.toFixed(3);
        document.getElementById('C0r').innerText = C0r.toFixed(2)+ " KN";
    } else {
        // Handle the case when pitchDiameter is zero
        alert("Pitch diameter cannot be zero.");
    }
}
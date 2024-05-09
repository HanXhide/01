function Cr() {

    var BM  =  parseFloat(document.getElementById('bm').value);
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
        var f4=Math.pow((1-gamma)/(1+gamma),143/108);
        var f3=1.04*f4;
        var f2=Math.pow(gamma,2/9)*Math.pow(1-gamma,29/27) / Math.pow(1+gamma,0.25);
        //var f2=Math.pow(gamma,2/9)*Math.pow(1-gamma,29/27) / (Math.Pow(1+gamma,0.25));
        var f1=21.2*9.80665;
        var gc=Math.pow(1+Math.pow(f3,9/2),-2/9);
        var fc=0.83*gc*f1*f2;
        var Cr = BM * fc * Math.pow(rollerRows*rollerLength*Math.cos(CADegree),(7/9))*Math.pow(numberOfRollers,3/4)*Math.pow(rollerDiameter,29/27)/1000;
        
        //document.getElementById('gamma').innerText = gamma.toFixed(3);

        document.getElementById('Cr').innerText = Cr.toFixed(2) + " KN";

    } else {
        // Handle the case when pitchDiameter is zero
        alert("Pitch diameter cannot be zero.");
    }
}
function NecessaryInterference() {

    var Fr  =  parseFloat(document.getElementById('Fr').value);
    var d= parseFloat(document.getElementById('d').value);
    var d0 = parseFloat(document.getElementById('d0').value);
    var B = parseFloat(document.getElementById('B').value);
    var Di =parseFloat(document.getElementById('Di').value);
    var MS =parseFloat(document.getElementById('MS').value);
    var ES =parseFloat(document.getElementById('ES').value);
    var MI =parseFloat(document.getElementById('MI').value);
    var EI =parseFloat(document.getElementById('EI').value);

    //var numberOfRollers = parseFloat(document.getElementById('Z').value);
    //var rollerLength = parseFloat(document.getElementById('Lwe').value);
   //var pitchDiameter = parseFloat(document.getElementById('Dpw').value);
    
    // Check if pitchDiameter is not zero to avoid division by zero

    if (B !== 0) {
        
        var PR = 0.08*Math.pow(d/B*Fr*1000,0.5)*0.001;
        var SR=0.02*Fr/B;
        var NI_Solid=Math.max(PR,SR)
        var k=d/Di;
        var k0=d0/d;
        var C_Solid=(MS-1)/(MS*ES)-(MI-1)/(MI*EI)+2/EI/(1-Math.pow(k,2));

        var C_Hollow=(MS-1)/(MS*ES)-(MI-1)/(MI*EI)+2*(Math.pow(k0,2)/EI/(1-Math.pow(k0,2))+1/EI/(1-Math.pow(k,2)));
        //document.getElementById('gamma').innerText = gamma.toFixed(3);
        var NI_Hollow=NI_Solid*C_Hollow/C_Solid;
        document.getElementById('PR').innerText = PR.toFixed(4) + " mm";
        document.getElementById('SR').innerText = SR.toFixed(4) + " mm";
        document.getElementById('NI_Solid').innerText = NI_Solid.toFixed(4) + " mm";
        document.getElementById('NI_Hollow').innerText = NI_Hollow.toFixed(4) + " mm";
    } else {
        // Handle the case when Width is zero
        alert("Width cannot be zero~~~");
    }
}
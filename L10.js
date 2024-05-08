function L10()
 {

    var Cr= parseFloat(document.getElementById('Cr').value); 
    var C0r= parseFloat(document.getElementById('C0r').value); 
    var Fa = parseFloat(document.getElementById('Axia-Load').value);
    var Fr = parseFloat(document.getElementById('Radial-Load').value);
    var RPM = parseFloat(document.getElementById('RPM').value);
    var contactAngle = parseFloat(document.getElementById('CA').value);
    var CADegree =degreesToRadians(contactAngle);
    var KV40 = parseFloat(document.getElementById('KV40').value);
    var KV100 = parseFloat(document.getElementById('KV100').value);
    var LT = parseFloat(document.getElementById('LT').value);
    var Dpw = parseFloat(document.getElementById('Dpw').value);

    // Check if pitchDiameter is not zero to avoid division by zero
    if (RPM !== 0) 
    {
        
        // var gamma = rollerDiameter*Math.cos(CADegree) / pitchDiameter;
   
        var e=1.5*Math.tan(CADegree);

        if (e==0 & Fa!=0)
        {
         alert("When contactAngle=0,Axial-load is not permissible!!!");
        }
        else{
             if(Fa/Fr>e)
             {
             var P=0.4*Fr+0.4/Math.tan(CADegree)*Fa;
             }
        else{
            var P=Fr;
            }
        }
/*        计算L10*/
            var L10 = Math.pow(Cr/P,10/3)*1000000/60/RPM;
/*        计算疲劳极限*/
        if(Dpw<100)
        {
            var Pu=C0r/8.2;
        }else{
            var Pu=C0r/8.2*Math.pow(100/Dpw,0.3);
        }
/*        计算润滑油粘度相关结果*/
            var B_coeff=(Math.log10(Math.log10(KV40+0.7))-Math.log10(Math.log10(KV100+0.7)))/0.07613102992;  
            var A_coeff=Math.log10(Math.log10(KV40+0.7))+B_coeff*2.495752416;
            var C_coeff=Math.pow(10,A_coeff-B_coeff*Math.log10(273.15+LT));
            var OKV = Math.pow(10,C_coeff)-0.7;  
        if(RPM<1000)
        {
            var NKV=45000/Math.pow(RPM,5/6)/Math.pow(Dpw,0.5);
            
        }else{
            var NKV=4500/Math.pow(RPM,0.5)/Math.pow(Dpw,0.5);
        }
            var Real_kappa=OKV/NKV;/*计算kappa*/
            var Used_kappa=Math.max(Real_kappa,1);/*计算kappa*/
/*计算ec*/
            var grade = document.getElementById("ISO4406").value;

            // 使用switch语句确定等级
            switch (true) {
                case (grade=="-/15/12"):
                    var f1=0.9987;
                    var f2=0.0432;
                    break;
                case (grade=="-/17/14"):
                    var f1=0.9987;
                    var f2=0.0432;
                case (grade=="-/19/16"):
                    var f1=0.9987;
                    var f2=0.0432;
                    break;
                default:
                    break;
            }


        var a=f2*Math.pow(Used_kappa,0.68)*Math.pow(Dpw,0.55);
        var a=Math.min(a,1);
        var ec=a*(1-f1/Math.pow(Dpw,1/3));


        document.getElementById('e').innerText = e.toFixed(2);
        document.getElementById('P').innerText = P.toFixed(3)+ " KN";
        document.getElementById('L10').innerText = L10.toFixed(0)+ " Hours";
        document.getElementById('OKV').innerText = OKV.toFixed(2);
        document.getElementById('Real_kappa').innerText = Real_kappa.toFixed(2);
        document.getElementById('Used_kappa').innerText = Used_kappa.toFixed(2);
        document.getElementById('ec').innerText = ec.toFixed(2);
    } 
    else {
            // Handle the case when pitchDiameter is zero
            alert("RPM cannot be zero!!!");
         }
    
}
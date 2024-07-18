function handang() 
{
            // 获取输入的成绩
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

            // 在页面上显示结果
            //document.getElementById("result").innerHTML = "Your grade is: " + grade;
        }
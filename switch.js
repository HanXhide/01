function handang() 
{
            // 获取输入的成绩
            var grade = document.getElementById("ISO4406").value;
            var f1;
            var f2;

            // 使用switch语句确定等级
            switch (true) {
                case (grade=="-/15/12"):
                    f1=0.9987;
                    f2=0.0432;
                    break;
                case (grade=="-/17/14"):
                    f1=0.9987;
                    f2=0.0432;
                case (grade=="-/19/16"):
                    f1=0.9987;
                    f2=0.0432;
                    break;
                default:
                    break;
            }

            // 在页面上显示结果
            //document.getElementById("result").innerHTML = "Your grade is: " + grade;
        }
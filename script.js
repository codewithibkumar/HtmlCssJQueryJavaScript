   // single line
        /* multi line */
        function greet()
        {
            var name = document.getElementById('tname').value;
            alert(name +' :) Welcome to Javascript');
        }
        /*function sum()
        {
            // variable
            var a = 10;
            var b = 20;
            var name = "Javascript";
            alert(name+": "+(a+b));

        } */
        function sum()
        {
            var num1 = document.getElementById("tnum1").value;
            var num2 = document.getElementById("tnum2").value;

                    
            var result = parseInt(num1) + parseInt(num2);
            var output = document.getElementById("calcoutput");
            output.innerHTML = "Sum is: "+result;
            output.style.color="white";
            output.style.backgroundColor="blue";
            console.log("Addition done");
            //alert("Sum is "+result);
        }
        function sub()
        {
            var num1 = document.getElementById("tnum1").value;
            var num2 = document.getElementById("tnum2").value;

                    
            var result = parseInt(num1) - parseInt(num2);
            var output = document.getElementById("calcoutput");
            output.innerHTML = "Subtraction is: "+result;
            output.style.color="white";
            output.style.backgroundColor="red";
            //alert("Sum is "+result);
        }
        function mul()
        {
            var num1 = document.getElementById("tnum1").value;
            var num2 = document.getElementById("tnum2").value;

                    
            var result = parseInt(num1) * parseInt(num2);
            var output = document.getElementById("calcoutput");
            output.innerHTML = "Mulitplication is: "+result;
            output.style.color="black";
            output.style.backgroundColor="cyan";
            //alert("Sum is "+result);
        }
        function div()
        {
            var num1 = document.getElementById("tnum1").value;
            var num2 = document.getElementById("tnum2").value;

                    
            var result = parseInt(num1) / parseInt(num2);
            var output = document.getElementById("calcoutput");
            output.innerHTML = "Division is: "+result;
            output.style.color="black";
            output.style.backgroundColor="pink";
            //alert("Sum is "+result);
        }
        function evenOdd()
        {
            var num = document.getElementById("tnum3").value;
            var number = parseInt(num);
            var output = document.getElementById("evenoddoutput");
            if(number % 2 == 0)
            {
                output.innerHTML = number + " is even";
                output.style.backgroundColor = "red";
                
            }
            else
            {
                output.innerHTML = number + " is odd";
                output.style.backgroundColor = "black";
                output.style.color="white";
            }
        }
        function findMax()
        {
            var num1 = parseInt(document.getElementById("tnum4").value);
            var num2 = parseInt(document.getElementById("tnum5").value);
            var num3 = parseInt(document.getElementById("tnum6").value);
            var output = document.getElementById("maxoutput");

            //conditional statements.
            if(num1 > num2 && num1 > num3)
            {
                output.innerHTML = num1 +" is largest";
            }
            else if(num2 > num1 && num2 > num3)
            {
                output.innerHTML = num2 +" is largest";
            }
            else
            {
                output.innerHTML = num3 +" is largest";
            }

        }
       //Loop -to perform any task repeatedly.
       function printTable()
       {
        var num1 = parseInt(document.getElementById("tnum7").value);
        var output = document.getElementById("tableoutput");
        var i;
        var result = " ";
        for(i=1; i<=10; i++)
        {
            result = result + num1*i + " ";
            output.innerHTML = result;
        }

       }
      window.onload =  function greet()
       {
           alert("Welcome to JavaScript");
       }
       function printFactorial()
       {
           var num = parseInt(document.getElementById("tnum8").value);

           var result=1;
           while(num > 1)
           {
               result = result * num;  // 6, 30,120,360,720
               num--; //5,4,3,2,1
           }
           var output = document.getElementById("factoutput");
           output.innerHTML = "Factorial is " +result;
       }
       function printFactorialUsingFor()
       {
        var num = parseInt(document.getElementById("tnum9").value);
        var result=1;
        var i;
        for(i=num; i>1; i--)
        {
            result = result * i;
        }
        var output = document.getElementById("fact1output");
        output.innerHTML = "Factorial is " +result;
       }
       window.onload = function printDate()
       {
           document.getElementById("printdate").innerHTML = Date();
       }
    // There are 3 types of loop
    // 1. for
    // 2. while
    // 3. do while
  
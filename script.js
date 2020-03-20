function btnClick(){

    var x = document.getElementById("screen").value;

    var first_name=document.getElementById("first_name").value;
    var last_name=document.getElementById("last_name").value;
      

    if(first_name == "" || last_name == ""){ 

        alert("please fill all fields")
    }else{

        var full_name = first_name + " " + last_name
        var u_full = full_name.toUpperCase()
        document.getElementById("screen").value =  "Your full name is:" + u_full 

    }
    
}  
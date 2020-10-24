let regform=document.getElementById("addFo");


const validateform=()=>{
    let firstname=document.getElementById("firstname");
    let fnameerror=document.getElementById("fnameerr");
    if(firstname.value==""){
        firstname.style.border="1px solid red";
        fnameerror.innerHTML="* This field is required";
        fnameerror.style.color="red"
        fnameerror.style.fontFamily="sans-serif"
        firstname.focus();
    }
    
    let lastname=document.getElementById("lastname");
    let lnameerror=document.getElementById("lnameerr");
    if(lastname.value==""){
        lastname.style.border="1px solid red";
        lnameerror.innerHTML="* This field is required";
        lnameerror.style.color="red"
        lnameerror.style.fontFamily="sans-serif"
        lastname.focus();
    }
    
    let userid=document.getElementById("userid");
    let useriderror=document.getElementById("iderr");
    if(userid.value==""){
        userid.style.border="1px solid red";
        useriderror.innerHTML="* This field is required";
        useriderror.style.color="red"
        useriderror.style.fontFamily="sans-serif"
        userid.focus();
    }
    let nationid=document.getElementById("nationID");
    let ninerr=document.getElementById("ninerr");
    if(nationid.value==""){
        nationid.style.border="1px solid red";
        ninerr.innerHTML="* This field is required";
        ninerr.style.color="red"
        ninerr.style.fontFamily="sans-serif"
        nationid.focus();
    }
    let dob=document.getElementById("dob");
    let doberr=document.getElementById("doberr");
    if(dob.value==""){
        dob.style.border="1px solid red";
        doberr.innerHTML="* This field is required";
        doberr.style.color="red";
        doberr.style.fontFamily="sans-serif";
        dob.focus();
    }


    let phone=document.getElementById("phone");
    let phoneerr=document.getElementById("phoneerr")
    if(phone.value==""){
        phone.style.border="1px solid red";
        phoneerr.innerHTML="* This field is required";
        phoneerr.style.color="red";
        phoneerr.style.fontFamily="sans-serif";
        phone.focus();
    }

    let address=document.getElementById("address");
    let adresserr=document.getElementById("addresserr");
    if(address.value==""){
        address.style.border="1px solid red";
        adresserr.innerHTML="* This field is required";
        adresserr.style.color="red";
        adresserr.style.fontFamily="sans-serif";
        address.focus();
    }
    let gender=document.getElementById("gender");
    let gendererr=document.getElementById("gendererr");
    if(gender.value=="Select..."){
        gender.style.border="1px solid red";
        gendererr.innerHTML="* This field is required";
        gendererr.style.color="red";
        gendererr.style.fontFamily="sans-serif";
        gender.focus();
    }

    let regdate=document.getElementById("regdate");
    let regdateerr=document.getElementById("regdateerr");
    if(regdate.value==""){
        regdate.style.border="1px solid red";
        regdateerr.innerHTML="* This field is required";
        regdateerr.style.color="red";
        regdateerr.style.fontFamily="sans-serif";
        regdate.focus();
    }
    
    let ward=document.getElementById("ward");
    let warderr=document.getElementById("warderr");
    if(ward.value=="Select..."){
        ward.style.border="1px solid red";
        warderr.innerHTML="* This field is required";
        warderr.style.color="red";
        warderr.style.fontFamily="sans-serif";
        ward.focus();
    }

    let residencetype=document.getElementById("residencetype");
    let residenceerr=document.getElementById("residenceerr");
    if(residencetype.value=="Select..."){
        residencetype.style.border="1px solid red";
        residenceerr.innerHTML="* This field is required";
        residenceerr.style.color="red";
        residenceerr.style.fontFamily="sans-serif";
        residencetype.focus();
    }

    
    let activities=document.getElementById("activities");
    let activitieserr=document.getElementById("activityerr");
    if(activities.value=="Select..."){
        activities.style.border="1px solid red";
        activitieserr.innerHTML="* This field is required";
        activitieserr.style.color="red";
        activitieserr.style.fontFamily="sans-serif";
        activities.focus();
    }


    let stayperiod=document.getElementById("stayperiod");
    let poserr=document.getElementById("poserr");
    if(stayperiod.value==""){
        stayperiod.style.border="1px solid red";
        poserr.innerHTML="* This field is required";
        poserr.style.color="red";
        poserr.style.fontFamily="sans-serif";
        stayperiod.focus();
    }



    
}





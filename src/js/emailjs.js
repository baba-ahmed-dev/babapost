const sendEmail = (e) => {
    e.preventDefault();
    let name =  document.querySelector('#name').value;
    let message = document.querySelector('#message').value;
    let sender =  document.querySelector('#email').value
    if ((name && name.length > 1) && (sender && sender.length > 1) && (message && message.length > 1) ){
        
        emailjs.send("service_cdvl7df","template_cbxj1q7",{
            from_name: name,
            message: message,
            reply_to: sender,
            });
        alert("YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY");
        document.querySelector('#name').value='';
        document.querySelector('#message').value='';
        document.querySelector('#email').value=''
    }else{
        alert("Failed , Please try again");
    }
}

var myForm = document.querySelector('#myorm').addEventListener('submit', sendEmail);
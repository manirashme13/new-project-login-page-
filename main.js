window.alert = function(message , timeout=null){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerText = 'تایید';
    alert.classList.add('alert');
    alert.setAttribute('style',`
        position:fixed;
        top: 85%;
        left: 63%;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 #00000044;
        display:flex;
        flex-direction:column;
        text-align: right;
        width: 20rem;
    `);
    alert.innerHTML = `<span styale="padding:10px;">${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click' , (e)=>{
        alert.remove();
    });
    if(timeout != null){
        setTimeout(()=>{
            alert.remove();
        },Number(timeout))
    }
    document.body.appendChild(alert);
}
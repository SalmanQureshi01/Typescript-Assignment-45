let personNAME :string = '';

personNAME = prompt('what is your name?') || '';

if(personNAME !== null && personNAME !== '') {
     alert(`hello ${personNAME},would you like to learn some python today?`)
}
else{
alert('you have fill to your name !')
}
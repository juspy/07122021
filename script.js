for(let i = 0 + 1; i < 11; i++){
    var userName = prompt('Введите ваше имя');
    if (!isNaN(userName)) {
        alert('Введите имя правильно.');
        break
    };
    var userAge = +prompt('Введите ваш возраст');
    if(isNaN(userAge)){
        alert('Введите возраст цифрами.');
        break
    };
    const users = {
            name: userName,
            age: userAge,
    }
    console.log('Пользователь ' + i);
    console.log('Имя ' + users.name);
    console.log('Возраст ' + users.age);
    console.log(users)
}
let obj={
    name: 'Maxim',
    age: 22,
    status: true,
    colors:['#a80000','#ffffff','#006ccb'],
    setValue(age){
        console.log(this.age+age)
    }
}
obj.setValue(10)

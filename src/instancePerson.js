let PersonModel = require('./Person')
let database=require('./MONGO_URI');
const Person = require('./Person');
database
let person = new PersonModel({
    name : "fredj fathia",
    age : 27,
    favoriteFoods:['sbaguetti','fastFood']
    })

person.save(function(err, data) {
if(err)
console.log(err)
else
console.log(data)
  });
let person = new PersonModel()
// create an array of Peopol
let arryofPeopol=[{name:'ahmed',age:30,favoriteFoods:['soupe','salade']},
{name:'farah',age:20,favoriteFoods:['pizza','lazagne']},
{name:'khaled',age:40,favoriteFoods:['kouskous']},
{name:'rahma',age:17,favoriteFoods:['pasta','veal']}]

PersonModel.create(arryofPeopol,function(err, data) {
    if(err)
    console.log(err)
    else
    console.log(data)
      });

// find a person 
PersonModel.find({
    name: 'rahma'   
  })
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
// Find just one person which has a certain food in the person's favorites
PersonModel.findOne({ favoriteFoods: 'pizza' }, function (err, data)
{
    if(err)
    console.log(err)
    else
    console.log(data)
});
// find update and save 
PersonModel.findById('5f6d151ea5fca81e34c11025', function (err, data) {
    if(err)
    console.log(err)
    else
    {
    data.favoriteFoods.push('hamburger');
     person=new Person(data)
     person.save((err,data)=>{
        if(err)console.log(err)
       
        else{ console.log(data)}
    })}
   
});
// update using findOneAndUpdate()
const query = { name: 'rahma' };
PersonModel.findOneAndUpdate(query, { age:20 },function (err,data){
    if(err)
    console.log(err)
    else console.log(data)
})

PersonModel.findByIdAndRemove('5f6d151ea5fca81e34c11025',function (err,data){
        if(err)
        console.log(err)
        else console.log('data removed succesfuly')} )

// Delete all the people whose name is “Mary”, using Model.remove()
PersonModel.remove({name:'Mary'},function(err,done){
    if(err)
    console.log(err)
    else console.log(done.deletedCount)
});
// Find people who like burrito
PersonModel.find({favoriteFoods:'burrito'})                   
        .sort({name: "asc"})
        .limit(2)     
        .select("-age")
        .exec()                   
        .then(docs => {
            console.log(docs)
          })
        .catch(err => {
            console.error(err)
          })
 

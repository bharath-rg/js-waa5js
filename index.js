//-------------object creation with function----------------//
const obj ={
   id:1,
   name:'bharath',
   class:'cse',
   age:22,
   dob:'01/09/1997',
   place:'chennai',
   getid: function() {
          return this.id;
          },
   setid: function(id) {
          this.name = id;
          },
   getname: function() {
           return this.name;
          },
   setname: function(name) {
           return this.name = name;
          },
   getclass1: function() {
          return this.class1;
          },
   setclass1: function(class1) {
           this.place = class1;
          },
   getage: function() {
          return this.age;
          },
   setage: function(age) {
           this.age = age;
          },
   getdob: function() {
          return this.dob;
          },
   setdob: function(dob) {
          this.dob= dob;              
          },
  getplace: function() {
          return this.place;
          },
   setplace: function(place) {
          this.place = place;
          }
}
console.log(obj.getname())
obj.setname('hello')
name= obj.getname();

console.log(obj.getid())
obj.setid(7)
id=obj.getid();

console.log(obj.getplace())
obj.setplace('hello');
console.log(obj.getage())

console.log(obj.getdob())
obj.setdob('hello');
console.log(obj.getdob())

console.log(obj.getplace())
obj.setplace('hello');
console.log(obj.getplace())







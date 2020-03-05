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
   setplace: function(place) {
           this.place = place;
          },
   getclass: function() {
          return this.age;
          },
   setclass: function(age) {
           this.age = age;
          },
   getclass: function() {
          return this.place;
          },
   setclass: function(place) {
           this.place = place;              
          },
  getclass: function() {
          return this.class1;
          },
   setclass: function(class1) {
           this.class1 = class1;
          }
}
console.log(obj.getname())
obj.setname('hello')
// name= obj.getName();
console.log(obj.getid())
obj.setid('hello');
console.log(obj.getplace())
obj.setplace('hello');
console.log(obj.getage())
obj.setage('hello');





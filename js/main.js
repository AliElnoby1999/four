///    <reference types="../@types/jquery"/>
  
     // var scrollTop = $(this).scrollTop();
  // if(scrollTop > 100){
  //   $('#navbar').addClass('navbar-scroll');
  // } else{
  //   $('#navbar').removeClass('navbar-scroll');
  // }


  setTimeout(function(){
   
  },4000)
$(function(){
  $('.loader').fadeOut(1500,function(){
    $('.loading').slideUp(2000,function(){
      $(body).css('overflow','auto');
    })
  })
})

let boxcolor=$('.box-color');
boxcolor.eq(0).css('background-color', 'red')
boxcolor.eq(1).css('background-color', 'green')
boxcolor.eq(2).css('background-color', '#09c')
boxcolor.eq(3).css('background-color', 'tomato')

boxcolor.on('click', function(e){
  let color=$(this).css('backgroundColor');
$('*').css('color', color);
})
$('#icon').on('click', function(){
  $('.side-box').animate({width:'toggle',paddingInline:'toggle'}, 1000)
})

  let secctionOffset =$('#about').offset().top;
  
// $('a[href^=#]').on('click', function(e){
// let ahref=e.target.getAttribute('href');
//   let secctionOffset =$(ahref).offset().top;
//   $('body').animate({scrollTop:300}, 2000);
// }) 

$(window).on('scroll', function(){

let scrollTop = $(window).scrollTop();

if(scrollTop > secctionOffset-67){
  $('.navbar').removeClass('bg-dark');
  $('.navbar').addClass('bg-danger');

}
else{
  $('.navbar').css('backgroundColor', 'transparent');
  $('.navbar').removeClass('bg-danger');
  $('.navbar').addClass('bg-dark');
}

})


// let person={
// name: 'John',
//   age: 30,
//   city: 'New York'
// };
// let doctor={

// islive: true,
// work: function(){
//   console.log(this.name +'is working');
// }
// }

// Object.setPrototypeOf(doctor,person);
   
function Instructor(name, address,age,salary,gender){
  this.name=name;
  this.address=address;
  this.age=age;
  this.salary=salary;
  this.gender=gender;
}

Instructor.prototype.work = function(){
  console.log(this.name +'is teaching');
}

let instructor=new Instructor('John Doe', '123 Main St', 40, 50000, 'Male');



class Maintenance{
constructor(name, age,salary,course){
  this.name=name;
  this.age=age;
  this.salary=salary;
  this.course=course;
}

 work () {
  console.log('work');
}

}

const alielnoby=new Maintenance('alielnoby',25,25000,'fullsatck');

console.log(alielnoby);










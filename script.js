var models=[
    {
        name: "1 ilustration",
        image:"img/1.png"
    },
    {
        name:"2 ilustration",
        image:"img/2.png"
    },
    {
        name:"3 ilustration",
        image:"img/3.png"
    },
    {
        name:"4 ilustration",
        image:"img/4.png"
    },
    {
        name:"5 ilustration",
        image:"img/5.png"
    }

]
const settings={
    duration:2000,
    random:false
}
var index =3
var slaytCount =models.length
var interval

init(settings)
document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index++;
    showSlide(index);
})

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index--;
    showSlide(index);
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
});


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
    })
})

function init(settings){


    var prev
   interval= setInterval(function(){
    if(settings.random){
        do{
            index=Math.floor(Math.random()*5)

        }while (index==prev) 
        prev=index
        
    }else{
        if(slaytCount==index+1){
            index=0
        }
        showSlide(index)
        console.log(index)
        index++
    }

    showSlide(index)
    },settings.duration)
    
}


function showSlide(i){
    index=i

    if(i<0){
        index = slaytCount-1
    }
    if(i>=slaytCount){
        index=0
    }

    document.querySelector('.card-img-top').setAttribute('src',models[index].image)
    document.querySelector('.card-title').textContent=models[index].name
}

function makePlayer(avg,nat){
    obj={}
    obj.avg=avg
    obj.nat=nat
    return obj
}
var modric=makePlayer(87,"Croitia")
var camavinga=makePlayer(79,"French")
var casemiro=makePlayer(89,"Brazil")
var jorginho=makePlayer(85,"Italy")
var fernandes=makePlayer(87,"Portugal")
var davies=makePlayer(82,"Peru")
var maguire=makePlayer(82,"England")
var vandijk=makePlayer(90,"Netherlands")
var koulibaly=makePlayer(88,"Senegal")
var ramos=makePlayer(89,"Spain")
var cancello=makePlayer(86,"Portugal")
var walker=makePlayer(85,"England")
var arnold=makePlayer(87,"England")
var ronaldo=makePlayer(91,"Portugal")
var mbappé=makePlayer(91,"French")
var kane=makePlayer(90,"England")
var neymar=makePlayer(91,"Brazil")
var hazard=makePlayer(85,"Belgium")
var messi=makePlayer(93,"Argentina")
var salah=makePlayer(90,"Egypt")
var grizman=makePlayer(83,"French")
var neur=makePlayer(91,"Germany")
var marqinhos=makePlayer(88,"Brazil")
var sanné=makePlayer(84,"French") 
var angelino=makePlayer(83,"Spain")   
var maignan=makePlayer(84,"French")
var debruyn=makePlayer(91,"Belgium")
var reus=makePlayer(85,"Germany")
var busquets=makePlayer(86,"Spain")
var kroos=makePlayer(88,"Germany")
var arr=[]
var arr1=[]
arr1.push(kroos)
arr1.push(ronaldo)
arr1.push(messi)
arr1.push(busquets)
arr1.push(debruyn)
arr1.push(maignan)
arr1.push(angelino)
arr1.push(maguire)
arr1.push(salah)
arr1.push(hazard)
arr1.push(grizman)
arr1.push(mbappé)
arr1.push(neymar)
arr1.push(marqinhos)
arr1.push(modric)
arr1.push(reus)
arr1.push(ramos)
arr1.push(sanné)
arr1.push(neur)
arr1.push(kane)
arr1.push(camavinga)
arr1.push(cancello)
arr1.push(casemiro)
arr1.push(angelino)
arr1.push(davies)
arr1.push(arnold)
arr1.push(koulibaly)
arr1.push(vandijk)
arr1.push(walker)



console.log(arr1)
function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}

function map(array, f) { 
    var acc = []; 
    each(array, function(element, i) { 
          acc.push(f(element, i)); 
    }); 
    return acc; 
}

function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}

function reduce(array, f, acc) {
 if (acc === undefined) {
   acc = array[0];
   array = array.slice(1);
 }
 each(array, function (element, i) {
   acc = f(acc, element, i);
 });
 return acc;
}
var k=0

each($("#container1")[0].children,function(e,i){
    e.onclick=function(){
       if(e.id==='a1'){
        k++
      
            document.getElementById('az1').src="neymar.jpg"
            document.getElementById('az2').src="hazard.jpg.png"
            document.getElementById('az3').src="messi.jpg.png"

            $('#opacity').css({'visibility':'visible'})
            $('#az1').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az2').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az3').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az1').click(function(){
                    document.getElementById('img2').src="neymar.jpg"
                    $('#img2').css({'margin-left': '-18%','height': '162px','width': '140px','margin-top': '-38%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(neymar)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }
                    
                
            })
            $('#az2').click(function(){
                document.getElementById('img2').src="hazard.jpg.png"
                $('#img2').css({'margin-left': '-14%','height': '162px','width': '140px','margin-top': '-33%'})
                $('#opacity').css({'visibility':'hidden'})
                arr.push(hazard)
                if(arr.length===11){
                    alert(chemistry())
                    
                }

            })
            $('#az3').click(function(){
                document.getElementById('img2').src="messi.jpg.png"
                $('#img2').css({'margin-left': '-18%','height': '174px','width': '149px','margin-top': '-36%'})
                $('#opacity').css({'visibility':'hidden'})
                arr.push(messi)
                if(arr.length===11){
                    alert(chemistry())
                    
                }

            })
        }
    else if(e.id==='a2'){
        k++
        $('#container').css({'visibility':'hidden'})


        $('#opacity').css({'visibility':'visible'})
            document.getElementById('az4').src="cristiano.jpg"
            document.getElementById('az5').src="harryKane.jpg.png"
            document.getElementById('az6').src="mbappé.jpg.png"
            $('#az4').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az5').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az6').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az4').click(function(){
                document.getElementById('img3').src="cristiano.jpg"
                    $('#img3').css({'margin-left': '-18%','height': '174px','width': '140px','margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(ronaldo)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az5').click(function(){
                document.getElementById('img3').src="harryKane.jpg.png"
                    $('#img3').css({'margin-left':'-18%','height': '174px','width': '140px','margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(kane)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az6').click(function(){
                document.getElementById('img3').src="mbappé.jpg.png"
                    $('#img3').css({'margin-left': '-18%','height': '174px','width': '140px','margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(mbappé)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
    
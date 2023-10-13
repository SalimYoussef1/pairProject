}else if(e.id==='a3'){
        k++
        $('#opacity').css({'visibility':'visible'})    
        document.getElementById('az7').src="salah.jpg"
            document.getElementById('az8').src="sanné.jpg.png"
            document.getElementById('az9').src="grizman.jpg.png"

           
            $('#az7').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az8').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az9').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az7').click(function(){
                document.getElementById('img4').src="salah.jpg"
                    $('#img4').css({'margin-left':'-27%','height': '174px','width': '154px','margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(salah)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az8').click(function(){
                document.getElementById('img4').src="sanné.jpg.png"
                    $('#img4').css({'margin-left': '-39%',
                        'height': '165px',
                        'width': '179px',
                        'margin-top': '-36%',})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(sanné)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az9').click(function(){
                document.getElementById('img4').src="grizman.jpg.png"
                    $('#img4').css({'margin-left': '-27%','height': '174px','width': '158px','margin-top': '-46%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(grizman)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })


    }else if(e.id==='m1'){
        k++
        $('#opacity').css({'visibility':'visible'})    
        document.getElementById('az10').src="camavinga.jpg"
            document.getElementById('az11').src="modric.jpg.png"
            document.getElementById('az12').src="koos.png"
            $('#az10').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az11').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az12').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az10').click(function(){
                document.getElementById('img5').src="camavinga.jpg"
                    $('#img5').css({'margin-left': '-18%','height': '184px','width': '156px','margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(camavinga)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az11').click(function(){
                document.getElementById('img5').src="modric.jpg.png"
                    $('#img5').css({'margin-left':'-9%','height': '174px','width': '140px','margin-top': '-32%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(modric)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az12').click(function(){
                document.getElementById('img5').src="koos.png"
                    $('#img5').css({'margin-left': '-9%','height': '174px','width': '140px','margin-top': '-32%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(kroos)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }


            })

    }
    else if(e.id==='m2'){
        k++
        $('#opacity').css({'visibility':'visible'})    
        document.getElementById('az13').src="caseimro.png"
            document.getElementById('az14').src="busquets.png"
            document.getElementById('az15').src="debruyne.jpg"
            $('#az13').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az14').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az15').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az13').click(function(){
                document.getElementById('img6').src="caseimro.png"
                    $('#img6').css({'margin-left': '-18%','height': '184px','width': '156px','margin-top': '-47%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(casemiro)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az14').click(function(){
                document.getElementById('img6').src="busquets.png"
                    $('#img6').css({'margin-left':'-15%','height': '174px','width': '140px','margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(busquets)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }
            })
            $('#az15').click(function(){
                document.getElementById('img6').src="debruyne.jpg"
                    $('#img6').css({'margin-left': '-26%','height': '174px','width': '155px','margin-top': '-35%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(debruyn)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })

    }else if(e.id==='m3'){
        k++
        $('#opacity').css({'visibility':'visible'})    
        document.getElementById('az16').src="bruno.png"
            document.getElementById('az17').src="jorjino.png"
            document.getElementById('az18').src="reus.png"
            $('#az16').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az17').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az18').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az16').click(function(){
                document.getElementById('img7').src="bruno.png"
                    $('#img7').css({'margin-left':' -2%',
                        'height': '161px',
                        'width': '130px',
                        'margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(fernandes)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }
            })
            $('#az17').click(function(){
                document.getElementById('img7').src="jorjino.png"
                    $('#img7').css({'margin-left':'-8%','height': '174px','width': '140px','margin-top': '-47%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(jorginho)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az18').click(function(){
                document.getElementById('img7').src="reus.png"
                    $('#img7').css({'margin-left':'-10%',
                        'height':'171px',
                        'width': '144px',
                        'margin-top': '-45%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(reus)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }


            })

    }else if(e.id==='d1'){
        k++
        $('#opacity').css({'visibility':'visible'})    
        document.getElementById('az19').src="ang.png"
        document.getElementById('az20').src="bruno1.png"
            $('#az19').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az20').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az19').click(function(){
                document.getElementById('img8').src="ang.png"
                    $('#img8').css({'margin-left':' -2%',
                        'height': '161px',
                        'width': '130px',
                        'margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(angelino)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az20').click(function(){
                document.getElementById('img8').src="bruno1.png"
                    $('#img8').css({'margin-left':'-8%','height': '174px','width': '140px','margin-top': '-47%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(davies)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }


            })
            
    }
    else if(e.id==='d2'){
        k++
        $('#opacity').css({'visibility':'visible'})    
        document.getElementById('az21').src="vandijk.png"
            document.getElementById('az22').src="ramos.png"
            document.getElementById('az23').src="mag.jpg"
            $('#az21').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az22').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az23').css({'width':'100px','height':'100px','cursor':'pointer'})
            $('#az21').click(function(){
                document.getElementById('img9').src="vandijk.png"
                    $('#img9').css({'margin-left':' -15%',
                        'height': '161px',
                        'width': '148px',
                        'margin-top': '-36%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(vandijk)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az22').click(function(){
                document.getElementById('img9').src="ramos.png"
                    $('#img9').css({'margin-left':'-12%','height': '174px','width': '140px','margin-top': '-39%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(ramos)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }

            })
            $('#az23').click(function(){
                document.getElementById('img9').src="mag.jpg"
                    $('#img9').css({'margin-left':'-15%',
                        'height':'171px',
                        'width': '144px',
                        'margin-top': '-38%'})
                    $('#opacity').css({'visibility':'hidden'})
                    arr.push(maguire)
                    if(arr.length===11){
                        alert(chemistry())
                        
                    }


            })}
            else if(e.id==='d3'){
                k++
                $('#opacity').css({'visibility':'visible'})    
                document.getElementById('az24').src="koulibali.png"
                    document.getElementById('az25').src="mar.jpg"
                    $('#az24').css({'width':'100px','height':'100px','cursor':'pointer'})
                    $('#az25').css({'width':'100px','height':'100px','cursor':'pointer'})
                    $('#az24').click(function(){
                        document.getElementById('img10').src="koulibali.png"
                            $('#img10').css({'margin-left':' -23%',
                                'height': '161px',
                                'width': '148px',
                                'margin-top': '-34%'})
                            $('#opacity').css({'visibility':'hidden'})
                            arr.push(koulibaly)
                            if(arr.length===11){
                                alert(chemistry())
                                
                            }
        
                    })
                    $('#az25').click(function(){
                        document.getElementById('img10').src="mar.jpg"
                            $('#img10').css({'margin-left':'-12%','height': '174px','width': '140px','margin-top': '-39%'})
                            $('#opacity').css({'visibility':'hidden'})
                            arr.push(marqinhos)
                            if(arr.length===11){
                                alert(chemistry())
                                
                            }
        
                    })
                   }
                   else if(e.id==='d4'){
                    k++
                    $('#opacity').css({'visibility':'visible'})    
                    document.getElementById('az26').src="cancello.png"
                        document.getElementById('az27').src="arnold.png"
                        $('#az26').css({'width':'100px','height':'100px','cursor':'pointer'})
                        $('#az27').css({'width':'100px','height':'100px','cursor':'pointer'})
                        $('#az26').click(function(){
                            document.getElementById('img11').src="cancello.png"
                                $('#img11').css({'margin-left':' -23%',
                                    'height': '161px',
                                    'width': '148px',
                                    'margin-top': '-34%'})
                                $('#opacity').css({'visibility':'hidden'})
                                arr.push(cancello)
                                if(arr.length===11){
                                    alert(chemistry())
                                    
                                }
            
                        })
                        $('#az27').click(function(){
                            document.getElementById('img11').src="arnold.png"
                                $('#img11').css({'margin-left':'-17%','height': '174px','width': '140px','margin-top': '-39%'})
                                $('#opacity').css({'visibility':'hidden'})
                                arr.push(arnold)
                                if(arr.length===11){
                                    alert(chemistry())
                                    
                                }
                        })
                       }else if(e.id==='goal'){
                        k++
                        $('#opacity').css({'visibility':'visible'})    
                    document.getElementById('az28').src="magn.png"
                        document.getElementById('az29').src="neur.png"
                        $('#az28').css({'width':'100px','height':'100px','cursor':'pointer'})
                        $('#az29').css({'width':'100px','height':'100px','cursor':'pointer'})
                        $('#az28').click(function(){
                            document.getElementById('img12').src="magn.png"
                                $('#img12').css({'margin-left':' -23%',
                                    'height': '161px',
                                    'width': '148px',
                                    'margin-top': '-34%'})
                                $('#opacity').css({'visibility':'hidden'})
                                arr.push(maignan)
                                if(arr.length===11){
                                    alert(chemistry())
                                    
                                }
            
                        })
                        $('#az29').click(function(){
                            document.getElementById('img12').src="neur.png"
                                $('#img12').css({'margin-left':'-17%','height': '174px','width': '140px','margin-top': '-39%'})
                                $('#opacity').css({'visibility':'hidden'})
                                arr.push(neur)
                                if(arr.length===11){
                                    alert(chemistry())
                                    
                                }
                        })
                       }
}
    })
    console.log(k)
function avg(array){
    s=0 
     each(array,function(e,i){
        s+=e.avg
       
    })
    return s/11
}
function nat(array){
    m=0 
    each(array,function(e,i){
        if(e.nat===array[i]['nat'] && e.nat!==array[i]['avg']){
            m++
        }
    })
    return m
}
function chemistry(){
    return 'chemistry'+nat(arr)*avg(arr)
}




var goalingArr = [{
        posicao: 'leste ',
        title: 'N',
        children: [{
            posicao: 'norte ',
            title: 'I',
            children: [{
                posicao: 'oeste ',
                title: 'H',
                children: [{
                    posicao: 'norte ',
                    title: 'C',
                    children: [{
                        posicao: 'leste ',
                        title: 'D',
                        children: [{
                            posicao: 'leste ',
                            title: 'E',
                            goal: true,
                            children: [{
                                posicao: 'norte ',
                                title: 'J',
                                children: null,
                            }],
                            
                        }],
                        
                    }],
                },{
                    posicao: 'oeste',
                    title: 'G',
                    children: [{
                            posicao: 'oeste',
                            title: 'F',
                            children: [{
                                posicao: 'norte',
                                title: 'A',
                                children: [{
                                    posicao: 'leste',
                                    title: 'B',
                                    children: null,
                                    goal: false
                                }]
                            }]
                        }]
                }],
                
            }],    
        },
        {
            posicao: 'leste',
            title: 'O',
            children: null
        }],
    }];
    

var data = [
    {
        posicao: 'ini',
        title: 'U',
        children: [
            {
                title: 'V',
                posicao: 'leste',
                children: [
                    {
                        title: 'X',
                        posicao: 'leste',
                        children: [
                            {
                                posicao: 'leste',
                                title: 'Y',
                                children: [
                                    {
                                        posicao: 'leste',
                                        title: 'Z',
                                        children: [
                                            {
                                                posicao: 'norte',
                                                title: 'T',
                                                children: [{
                                                    title: 'S',
                                                    posicao: 'oeste',
                                                    children: [{
                                                        posicao: 'oeste',
                                                        title: 'E',
                                                        children: [{
                                                            posicao: 'norte ',
                                                            title: 'M',
                                                            children:  goalingArr                                                            
                                                        }],
                                                        
                                                    }],
                                                    
                                                }], 
                                            }
                                        ],
                                        
                                    },
                                ],
                                
                            },
                        ],
                        posicao: 'norte',
                        title: 'Q',
                        children: [{
                            posicao: 'norte',
                            title: 'L',
                            children: [{
                                posicao: 'leste',
                                title: 'M',
                                children: goalingArr,
                        }],
                    },
                ],    
                    },
                ],
            }, 
            {
                posicao: 'norte',
                title: 'P',
                children: [{
                    posicao: 'norte',
                    title: 'K',
                    children: null
                }],
            }]
}];
        
    
// {
//     posicao: 'norte',
//     title: 'P',
//     children: [{}]
// }

myWay = []
mybfsWay = []

// function searchTree(element, matchingTitle){
//     if(element.title == matchingTitle && element.goal){
//         myWay.push(element.posicao)
//         return element;
//     }else if (element.children != null){ //PROFUNDIDADE
//          var i;
//          var result = null;
//          for(i=0; result == null && i < element.children.length; i++){
//             myWay.push(element.posicao)
//             result = searchTree(element.children[i], matchingTitle);
//          }
//          return result;
//     }
//     return null;
// }

console.log("################ PROFUNDIDADE ##################")

profundidadeWay(data[0],'E')
console.log(myWay)
console.log(myWay.length)

// console.log("################ LARGURA ##################")
// searchTree(data[0],'E')
// console.log(mybfsWay)
// console.log(mybfsWay.length)

//test()


// 
// 
//console.log(data[0])

function test(){
    var diff = myWay.filter(x=>!mybfsWay.includes(x));
    if(diff.length == 0)
        console.log('nao ha diff')
    else
        console.log(diff)
}


function profundidadeWay(element, matchingTitle){
    if(element.title == matchingTitle && element.goal){
        myWay.push(element.posicao)
        return true
    }
    if(element.children != null){
        for(var counter = 0; counter < element.children.length; counter++){
            if (element.children[counter] != null){
                myWay.push(element.posicao)
                var canReturn = profundidadeWay(element.children[counter], matchingTitle);
                if(canReturn){
                    return canReturn
                }
            }
        }
    }
}
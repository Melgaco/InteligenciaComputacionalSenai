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
                                                            children: [{
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
                                                                            
                                                                        }],
                                                                        
                                                                    }],
                                                                    
                                                                }],
                                                                
                                                            }],
                                                            
                                                        }],
                                                        
                                                    }],
                                                    
                                                }], 
                                            }
                                        ],
                                        
                                    },
                                ],
                                
                            },
                        ],
                        
                    },
                ],    
                
            }
        ],
        
    }];

myWay = []

function searchTree(element, matchingTitle){
    if(element.title == matchingTitle && element.goal){
        myWay.push(element.posicao)
        return element;
    }else if (element.children != null){ //PROFUNDIDADE
         var i;
         var result = null;
         for(i=0; result == null && i < element.children.length; i++){
            myWay.push(element.posicao)
            result = searchTree(element.children[i], matchingTitle);
         }
         return result;
    }
    return null;
}

searchTree(data[0],'E')

console.log("################")
console.log(myWay)

// moveBack(myWay)

// function moveBack(arr){
//     for(i = arr.length; i > 0; i--){
//         console.log(arr[i])
//     }
// }
import * as ai  from './ai';

const gameOverStates = {
    1:1, 2:1, 3:1,
    4:0, 5:0, 6:0,
    7:0, 8:0, 9:0
};

it ('knows when game is over', ()=>{
    expect(ai.evaluateNextMove(gameOverStates)).toEqual(null);
});

const winningStates = [{
    1:2, 2:2, 3:0,
    4:0, 5:0, 6:0,
    7:0, 8:0, 9:0
}];

it ('knows the winning move', ()=>{
    for (var i = 0; i < winningStates.length; i++) {
        expect(ai.goForWin(winningStates[i])).toEqual(3);      
    }    
});

const defendStates = [{ //3
    1:1, 2:1, 3:0,
    4:0, 5:0, 6:0,
    7:0, 8:0, 9:0
}];

it ('knows how to defend', ()=>{
    expect(ai.defend(defendStates[0])).toEqual(3);      

});

const connectStates =[{ //2,3,4,7
    1:2, 2:0, 3:0,
    4:0, 5:1, 6:0,
    7:0, 8:0, 9:0    
},{
    1:2, 2:1, 3:0, //4,7
    4:0, 5:1, 6:0,
    7:0, 8:0, 9:0 
},{
    1:2, 2:1, 3:0, //3,6
    4:0, 5:1, 6:0,
    7:1, 8:0, 9:2 
}]

it ('knows how to connect two', ()=>{
    expect([2,3,4,7]).toContain(ai.connectTwo(connectStates[0]));
    expect([4,7]).toContain(ai.connectTwo(connectStates[1]));
    expect([3,6]).toContain(ai.connectTwo(connectStates[2]));
});

const randomStates =[{
    // 2,3,4,6,9
    1:2, 2:0, 3:0,
    4:0, 5:1, 6:0,
    7:2, 8:1, 9:0  
}]

it ('picks a random empty square',()=>{
    expect([2,3,4,6,9]).toContain(ai.randomMove(randomStates[0]));
});

const allStates = [{
    // game over: null
    1:2, 2:0, 3:0,
    4:2, 5:1, 6:0,
    7:2, 8:1, 9:0 
},{
    // go for win: 4
    1:2, 2:0, 3:0,
    4:0, 5:1, 6:0,
    7:2, 8:1, 9:0 
},{ 
    // defend: 2
    1:2, 2:0, 3:0,
    4:1, 5:1, 6:2,
    7:2, 8:1, 9:0 
},{ // connect two: [1,3]
    1:0, 2:2, 3:0,
    4:0, 5:1, 6:0,
    7:0, 8:0, 9:0 
}, 
// real test runs 
{1: 0, 2: 0, 3: 2, 4: 0, 5: 1, 6: 0, 7: 0, 8: 0, 9: 1} // 1
, {1: 0, 2: 0, 3: 0, 4: 2, 5: 1, 6: 0, 7: 0, 8: 0, 9: 1} // 1
]; //

it('can evaluate the correct next move',()=>{
    expect(ai.evaluateNextMove(allStates[0])).toEqual(null);
    expect(ai.evaluateNextMove(allStates[1])).toEqual(4);
    expect(ai.evaluateNextMove(allStates[2])).toEqual(2);
    expect([1,3]).toContain(ai.evaluateNextMove(allStates[3]));
    expect(ai.evaluateNextMove(allStates[4])).toEqual(1);
    expect(ai.evaluateNextMove(allStates[5])).toEqual(1);
})
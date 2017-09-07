import * as logic from './logic';

const drawStates = [{
    1:1, 2:2, 3:1,
    4:1, 5:1, 6:2,
    7:2, 8:1, 9:2 
}]

it('finds draws',()=>{
    expect(logic.checkForWin(drawStates[0])).toBe(3);
});

const winStates = [{
    1:1, 2:1, 3:1,
    4:0, 5:2, 6:2,
    7:0, 8:0, 9:0 
},{
    1:2, 2:2, 3:2,
    4:0, 5:1, 6:1,
    7:0, 8:0, 9:0 
}]

it('returns the correct winner',()=>{
    expect(logic.checkForWin(winStates[0])).toBe(1);
    expect(logic.checkForWin(winStates[1])).toBe(2);
});

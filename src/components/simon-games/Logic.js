export function generateSequence(){
    let sequence = [];
    for (var i = 0; i < 20; i++) {
        sequence.push(Math.floor(Math.random() * 4));
    }
    return sequence;
}

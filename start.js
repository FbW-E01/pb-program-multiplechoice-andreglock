let color = 'blue';

switch (color) {
    case 'red':
        console.log('1: color is red');
        break;
    case 'blue':
        console.log('1: color is blue');
        break;
    case 'green':
        console.log('1: color is green');
        break;
    case 'yellow':
        console.log('1: color is yellow');
        break;
    default:
        console.log('1: what color is that?');
}

let grade = 8;

switch (true) {
    case grade >= 9:
        console.log('2: wawawiwa Very Nice!');
        break;
    case grade >= 7.5:
        console.log('2: Good job!');
        break;
    case grade >= 6:
        console.log('2: You shall pass');
        break;
    case grade >= 5:
        console.log('2: Almost, better luck next time.');    
        break;
    default:
        console.log('2: what are you doing here?!');
}

let fruit = 'Avocado';

switch (fruit) {
    case 'Banana':
        console.log('3: Bananas are the best!');
        break;
    case 'Pitaya':
        console.log('3: You look good!');
        break;
    case 'Papaya':
        console.log('3: Goes well in the breakfast!');
        break;
    case 'Avocado':
        console.log('3: You can be salted, but sweetened is even better!');    
        break;
    case 'Tomato':
        console.log('3: Meh');    
        break;
    default:
        console.log('3: Intruder Alert!');
}

let percentage = 45;

switch (true) {
    case percentage < 30:
        console.log('4: Still a long way to go');
        break;
    case percentage < 50:
        console.log('4: Slowly getting there');
        break;
    case percentage < 80:
        console.log('4: You can do it!');
        break;
    case percentage < 99:
        console.log('4: This is the last push!');    
        break;
    case percentage === 100:
        console.log("4: You're there. Well done!");    
        break;
    default:
        console.log('4: This condition will happen because the instructions were poorly written');
}

// Personally I will always try to use 'if else' statements because they are very clear. Switch statement might be used when you have a lot of cases that are simple to describe, and specially when multiple conditions require the same output.
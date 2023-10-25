// switch
// check in strict ===
// switch is a series of options
switch (hour) {
    case 10: console.log('Good Morning');
        break;
    default:
        console.log("wrong value");
}


let browser = 'Chrome';

switch (browser) {
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
        console.log('This browser is supported.');
        break;
    case 'IE':
    case 'Edge':
        console.log('This browser is partially supported.');
        break;
    default:
        console.log('Unknown browser.');
}

let number = 6;
switch (number) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("give numbers betweeen 1-7");
}
// 추상 팩토리
const WinFactory = { button(){ return 'WinButton'; }, menu(){ return 'WinMenu'; } };
const MacFactory = { button(){ return 'MacButton'; }, menu(){ return 'MacMenu'; } };
function render(factory){ return factory.button() + ' + ' + factory.menu(); }
console.log(render(WinFactory));

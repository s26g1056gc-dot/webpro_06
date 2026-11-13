const events = ['ゆか', '鉄棒', '平均台'];

console.log('for');
for (let i = 0; i < events.length; i++) {
  console.log(events[i]);
}

console.log('for...of');
for (const event of events) {
  console.log(event);
}

console.log('forEach');
events.forEach((event) => {
  console.log(event);
});

console.log('配列とオブジェクトから値を取り出す');
const station = { id: 1, code: 'JE01', name: '東京駅' };
console.log(events[0]);
console.log(station.name);
console.log(station['code']);

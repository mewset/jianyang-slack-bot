const jianYangQuotes = [
  "Yes, I eat the fish.",
  "This is your mom, and you, you are not my baby.",
  "I'm not Chinese, I'm from Singapore.",
  "New Pied Piper, same as old Pied Piper.",
  "I make it, I sell it, I rich.",
  "Special occasion? Like birthday? Christmas? No, no, no. I eat the fish.",
  "Eric Bachman, this is your mom, and you, you are not my baby.",
  "You know what? I have an idea. What if we make the food but we don't eat it?",
  "I'm not a businessman, I'm a business, man.",
  "Hot dog, not hot dog. It's a binary choice.",
  "I bring the fish, you bring the money.",
  "You have no money, no job, no car, no girlfriend. You are nothing.",
  "I'm going to make so much money, I'm going to buy a house and a car.",
  "Which way is north? I don't know. GPS.",
  "I'm not going to prison. I'm going to make money.",
  "You are a very ugly person, inside and out.",
  "I'm going to be rich, and you're going to be poor.",
  "Water is wet, fire is hot, and you are stupid.",
  "I'm not your friend, I'm your business partner.",
  "You bring the money, I bring the fish.",
  "I'm not saying you're stupid, but you're not smart.",
  "This is America, not China. Here, money talks.",
  "You want to know secret? I tell you secret. I'm not Chinese.",
  "I'm not going to help you. I'm going to make money.",
  "You are like a little baby, but not my baby.",
  "I'm not your mother, I'm your business partner.",
  "You think you're smart? You're not smart. You're stupid.",
  "I'm going to make so much money, I'm going to buy Twitter.",
  "You have good idea? I have better idea. I make money.",
  "I'm not going to give you money. You give me money.",
  "You want to be rich? You can't be rich. You're too stupid.",
  "I'm not your friend. I'm your landlord.",
  "You are very sad person. Very, very sad.",
  "I'm not going to prison. Prison is for poor people.",
  "You think you're special? You're not special. You're nothing.",
  "I'm going to make money, and you're going to make excuses.",
  "You want to know how to be rich? Don't be poor.",
  "I'm not going to help you because I don't like you.",
  "You are like a little fish in a big pond, but I am the shark.",
  "I'm not saying you're a loser, but you're not a winner."
];

const jianYangGifs = [
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnBkNWhuMDdueHJlem9xcGk3cjJkc21iczg2NHR3eHg2YzhrMmR1eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VexReXhmpp3m5QXZCT/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDAwNHB3YzF0cnJodDVhaGE5Y2RlejQzMHBicHNtd3gxdHRzMW5uNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu5kN3xCjquOG6k/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExc283aGFrNWtpYmJ3dW9xYWVzbnVxMGVwd3JuMGc4ank4MDlsMGVmYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohzdEmIZBWZkV1Y7m/giphy.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VyM2J1d3gwa3JsdXZxYTFuaGF0MDlpb2s0eGQyaDI4NXdnbDBhbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VgaAzZl6Lipkggp3cd/giphy.gif",
  "https://media1.tenor.com/m/jwmBWPU0OjIAAAAC/jian-yang-thats-a-very-boring-work-jian-yang-you-can-hire-someone-else.gif",
  "https://media1.tenor.com/m/B9AduN79dwwAAAAC/these-are-from-your-mom-silicon-valley.gif",
  "https://media1.tenor.com/m/TWuxQYkCcpkAAAAd/no-life-yian-yang.gif",
  "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2xtOTFydTFvaHVtMTN2Z2h4dTViaDRxbGQ3ZG43bGM3cGthczY5ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcrVoX4pdcf7oru/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNm5ic3VqNnZ4M2ZldTF4M2ZsbWZsdGxyaG1vM3BxaTJycWlxZ3h5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26mkhT2H0vC29GPC0/giphy.gif",
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExazRoejA5bWVqdTgydG8zcGF0dTV4aTY5Z2xlYm16cXFraXIxeXlleCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2wX3S0k4vQbKOBHjtk/giphy.gif"
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * jianYangQuotes.length);
  return jianYangQuotes[randomIndex];
}

function getRandomGif() {
  const randomIndex = Math.floor(Math.random() * jianYangGifs.length);
  return jianYangGifs[randomIndex];
}

function getRandomContent() {
  const isGif = Math.random() < 0.2;
  
  if (isGif) {
    return {
      type: 'gif',
      content: getRandomGif()
    };
  } else {
    return {
      type: 'quote',
      content: getRandomQuote()
    };
  }
}

module.exports = {
  jianYangQuotes,
  jianYangGifs,
  getRandomQuote,
  getRandomGif,
  getRandomContent
};
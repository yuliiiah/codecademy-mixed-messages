const messageParts = {
    signs: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
    descriptions: ['different', 'important', 'basic', 'difficult', 'hot', 'useful', 'emotional', 'political', 'healthy', 'significant', 'successful', 'expensive', 'interesting', 'happy', 'nice', 'wonderful', 'impossible', 'serious', '	rare', 'typical', 'competitive', 'educational', 'dramatic', 'efficient', 'powerful', 'practical', 'unusual', '	acceptable', 'boring', 'reasonable', 'unfair', 'exciting', 'lucky', 'curious', 'pleasant', 'confident'],
    jokes: ['What\’s brown and sticky? A stick.',
            'Why are elevator jokes so classic and good? They work on many levels.',
            'What do you call it when a group of apes starts a company? Monkey business.',
            'What kind of drink can be bitter and sweet? Reali-tea.',
            'Why do bees have sticky hair? Because they use a honeycomb.',
            'Why do some couples go to the gym? Because they want their relationship to work out.',
            'Did you hear about the kidnapping at school? It\’s fine, he woke up.',
            'How can you tell it\’s a dogwood tree? By the bark.',
            'My boss told me to have a good day, so I went home.',
            'Why did the man fall down the well? Because he couldn\’t see that well.',
            'When does a joke become a “dad joke?” When it becomes apparent.',
            'Why was the color green notoriously single? It was always so jaded.',
            'I used to hate facial hair, but then it grew on me.',
            'Sundays are always a little sad, but the day before is a sadder day.',
            'I’ve been thinking about taking up meditation. I figure it\’s better than sitting around doing nothing.',
            'It takes guts to be an organ donor.',
            'I lost my job at the bank on my first day. A woman asked me to check her balance, so I pushed her over.',
            'Why were the utensils stuck together? They were spooning.',
            'Why is cold water so insecure? Because it\’s never called hot.',
            'I was going to tell a time-traveling joke, but you guys didn\’t like it.'
        ],

    genRandSign() {
        const randSign = this.signs[Math.floor(Math.random() * this.signs.length)];
        return randSign;
    },

    genRandDescr() {
        const randDescr = this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
        return randDescr;
    },

    genRandJoke() {
        const randJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)];
        return randJoke;
    },
};

const genMessage = () => {
    const sign = messageParts.genRandSign();
    const descr = messageParts.genRandDescr();
    const joke = messageParts.genRandJoke();

    const message = `Dear ${sign} (if not, try your luck again), welcome to the most useless horoscope!\nToday is going to be ${descr}. Here's a joke that you are not going to enjoy: "${joke}"`;

    console.log(message);
}

genMessage();
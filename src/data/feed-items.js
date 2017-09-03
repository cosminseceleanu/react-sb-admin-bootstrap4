export const feedItems = [
    {
        photo: 'https://unsplash.it/700/450?image=610',
        user: 'David Miller',
        description: 'These waves are looking pretty good today!',
        tags: ['#surfsup', '#react'],
        date: 'Posted 32 mins ago',
        comments: [
            {
                user: "John Smith",
                text: "Very nice! I wish I was there! That looks amazing!",
                src: "http://placehold.it/45x45",
                reply: {
                    user: "David Miller",
                    text: "Next time for sure!",
                    src: "http://placehold.it/45x45",
                }
            }
        ]
    },
    {
        photo: 'https://unsplash.it/700/450?image=180',
        user: 'John Smith',
        description: 'Another day at the office...',
        tags: ['#workinghardorhardlyworking'],
        date: 'Posted 46 mins ago',
        comments: [
            {
                user: "Jessy Lucas",
                text: " Where did you get that camera?! I want one!",
                src: "http://placehold.it/45x45"
            }
        ]
    },
    {
        photo: 'https://unsplash.it/700/450?image=281',
        user: 'Jeffery Wellings',
        description: 'Nice shot from the skate park!',
        tags: ['#kickflip', "#holdmybeer", "#igotthis"],
        date: 'Posted 1 hr ago',
        comments: []
    },
    {
        photo: 'https://unsplash.it/700/450?image=185',
        user: 'David Miller',
        description: 'It\'s hot, and I might be lost...',
        tags: ['#desert', '#water', '#anyonehavesomewater', '#noreally', '#thirsty', '#dehydration'],
        date: 'Posted 1 hr ago',
        comments: [
            {
                user: "John Smith",
                photo: "http://placehold.it/45x45",
                text: "The oasis is a mile that way, or is that just a mirage?"
            }
        ]
    },
];
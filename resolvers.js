const user = {
    _id: 1,
    name: 'ant',
    email: 'spinne92@mail.ru',
    avatar: 'https://i.pinimg.com/280x280_RS/91/6a/79/916a79e4fbca488816c9a73309fb8be1.jpg'
}

const resolvers = {
    Query: {
        me: () => user
    }
}

module.exports = resolvers;
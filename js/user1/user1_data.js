const account1 = {
  username: 'asher',
  password: '1111',
  level: 0,
  ownLibrary: [
    { chName: '蘋果', engName: 'apple', level: 3 },
    { chName: '香蕉', engName: 'banana', level: 2 },
    { chName: '橘子', engName: 'orange', level: 5 },
    { chName: '梨子', engName: 'pear', level: 3 },
    { chName: '芒果', engName: 'mango', level: 1 },
    { chName: '草莓', engName: 'strawberry', level: 4 },
    { chName: '葡萄', engName: 'grape', level: 3 },
    { chName: '西瓜', engName: 'watermelon', level: 2 },
    { chName: '哈密瓜', engName: 'cantaloupe', level: 4 },
    { chName: '櫻桃', engName: 'cherry', level: 1 },
    { chName: '老虎', engName: 'tiger', level: 3 },
    { chName: '獅子', engName: 'lion', level: 4 },
    { chName: '熊', engName: 'bear', level: 2 },
    { chName: '豹', engName: 'leopard', level: 5 },
    { chName: '大象', engName: 'elephant', level: 2 },
    { chName: '長頸鹿', engName: 'giraffe', level: 3 },
    { chName: '犀牛', engName: 'rhinoceros', level: 3 },
    { chName: '鬣狗', engName: 'hyena', level: 4 },
    { chName: '猴子', engName: 'monkey', level: 5 },
    { chName: '狗', engName: 'dog', level: 2 },
  ],

  testRecord: [
    {
      yourCorrectAnswer: ['apple', 'leopard', 'tiger', 'rhinoceros', 'monkey'],
      yourWrongAnswer: [
        {
          written: 'cheewy',
          correct: 'cherry',
        },
        {
          written: 'peer',
          correct: 'pear',
        },
        {
          written: 'oramg',
          correct: 'orange',
        },
      ],
    },
    {
      yourCorrectAnswer: ['strawberry', 'giraffe', 'tiger', 'apple'],
      yourWrongAnswer: [
        {
          written: 'grapppe',
          correct: 'grape',
        },
        {
          written: 'watermalon',
          correct: 'watermelon',
        },
        {
          written: 'beer',
          correct: 'bear',
        },
        {
          written: 'cantaope',
          correct: 'cantaloupe',
        },
      ],
    },
  ],
};

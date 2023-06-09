const account = {
  username: 'Asher Lien',
  ownLibrary: [
    // 總單字庫：
    { chName: '車', engName: 'car', level: 4 },
    { chName: '房子', engName: 'house', level: 3 },
    { chName: '食物', engName: 'food', level: 2 },
    { chName: '水', engName: 'water', level: 1 },
    { chName: '火', engName: 'fire', level: 4 },
    { chName: '地球', engName: 'earth', level: 3 },
    { chName: '天空', engName: 'sky', level: 2 },
    { chName: '太陽', engName: 'sun', level: 5 },
    { chName: '月亮', engName: 'moon', level: 4 },
    { chName: '星星', engName: 'star', level: 3 },
    { chName: '風', engName: 'wind', level: 2 },
    { chName: '雲', engName: 'cloud', level: 1 },
    { chName: '雨', engName: 'rain', level: 4 },
    { chName: '雪', engName: 'snow', level: 3 },
    { chName: '植物', engName: 'plant', level: 2 },
    { chName: '動物', engName: 'animal', level: 1 },
    { chName: '鳥', engName: 'bird', level: 5 },
    { chName: '狗', engName: 'dog', level: 4 },
    { chName: '貓', engName: 'cat', level: 3 },
    { chName: '魚', engName: 'fish', level: 2 },
    { chName: '蜜蜂', engName: 'bee', level: 1 },
    { chName: '蝴蝶', engName: 'butterfly', level: 4 },
    { chName: '花', engName: 'flower', level: 3 },
    { chName: '樹', engName: 'tree', level: 2 },
    { chName: '草', engName: 'grass', level: 1 },
    { chName: '山', engName: 'mountain', level: 5 },
    { chName: '河', engName: 'river', level: 4 },
    { chName: '海', engName: 'sea', level: 3 },
    { chName: '湖', engName: 'lake', level: 2 },
    { chName: '沙漠', engName: 'desert', level: 1 },
    { chName: '城市', engName: 'city', level: 4 },
    { chName: '鄉村', engName: 'countryside', level: 3 },
    { chName: '海灘', engName: 'beach', level: 2 },
    { chName: '公園', engName: 'park', level: 1 },
    { chName: '學校', engName: 'school', level: 5 },
    { chName: '家庭', engName: 'family', level: 4 },
    { chName: '愛', engName: 'love', level: 3 },
    { chName: '幸福', engName: 'happiness', level: 2 },
    { chName: '快樂', engName: 'joy', level: 1 },
    { chName: '悲傷', engName: 'sadness', level: 4 },
    { chName: '恐懼', engName: 'fear', level: 3 },
    { chName: '勇氣', engName: 'courage', level: 2 },
    { chName: '希望', engName: 'hope', level: 1 },
    { chName: '成功', engName: 'success', level: 5 },
    { chName: '失敗', engName: 'failure', level: 4 },
    { chName: '健康', engName: 'health', level: 3 },
    { chName: '疾病', engName: 'disease', level: 2 },
    { chName: '醫生', engName: 'doctor', level: 1 },
    { chName: '病人', engName: 'patient', level: 4 },
    { chName: '藥品', engName: 'medicine', level: 3 },
    { chName: '營養', engName: 'nutrition', level: 2 },
    { chName: '運動', engName: 'exercise', level: 1 },
    { chName: '睡眠', engName: 'sleep', level: 5 },
    { chName: '夢想', engName: 'dream', level: 4 },
    { chName: '現實', engName: 'reality', level: 3 },
    { chName: '幻想', engName: 'fantasy', level: 2 },
    { chName: '創造力', engName: 'creativity', level: 1 },
    { chName: '科技', engName: 'technology', level: 4 },
    { chName: '網路', engName: 'internet', level: 3 },
    { chName: '手機', engName: 'phone', level: 2 },
    { chName: '電腦', engName: 'computer', level: 1 },
    { chName: '電視', engName: 'television', level: 5 },
    { chName: '音樂', engName: 'music', level: 4 },
    { chName: '電影', engName: 'movie', level: 3 },
    { chName: '書籍', engName: 'book', level: 2 },
    { chName: '繪畫', engName: 'painting', level: 1 },
    { chName: '演出', engName: 'performance', level: 4 },
    { chName: '舞蹈', engName: 'dance', level: 3 },
    { chName: '劇場', engName: 'theater', level: 2 },
    { chName: '旅行', engName: 'travel', level: 1 },
    { chName: '文化', engName: 'culture', level: 5 },
    { chName: '語言', engName: 'language', level: 4 },
    { chName: '教育', engName: 'education', level: 3 },
    { chName: '學校', engName: 'school', level: 2 },
    { chName: '老師', engName: 'teacher', level: 1 },
    { chName: '學生', engName: 'student', level: 4 },
    { chName: '知識', engName: 'knowledge', level: 3 },
    { chName: '技能', engName: 'skill', level: 2 },
    { chName: '智慧', engName: 'wisdom', level: 1 },
    { chName: '信仰', engName: 'faith', level: 5 },
    { chName: '宗教', engName: 'religion', level: 4 },
    { chName: '精神', engName: 'spirituality', level: 3 },
    { chName: '靈魂', engName: 'soul', level: 2 },
    { chName: '意義', engName: 'meaning', level: 1 },
    { chName: '價值觀', engName: 'values', level: 4 },
    { chName: '道德', engName: 'morality', level: 3 },
    { chName: '良心', engName: 'conscience', level: 2 },
    { chName: '正義', engName: 'justice', level: 1 },
    { chName: '公平', engName: 'fairness', level: 5 },
    { chName: '平等', engName: 'equality', level: 4 },
    { chName: '自由', engName: 'freedom', level: 3 },
    { chName: '民主', engName: 'democracy', level: 2 },
    { chName: '和平', engName: 'peace', level: 1 },
    { chName: '戰爭', engName: 'war', level: 4 },
    { chName: '暴力', engName: 'violence', level: 3 },
    { chName: '犯罪', engName: 'crime', level: 2 },
    { chName: '警察', engName: 'police', level: 1 },
    { chName: '法律', engName: 'law', level: 5 },
    { chName: '政治', engName: 'politics', level: 4 },
    { chName: '經濟', engName: 'economy', level: 3 },
    { chName: '商業', engName: 'business', level: 2 },
    { chName: '就業', engName: 'employment', level: 1 },
    { chName: '家庭', engName: 'family', level: 4 },
    { chName: '婚姻', engName: 'marriage', level: 3 },
    { chName: '親情', engName: 'kinship', level: 2 },
    { chName: '友情', engName: 'friendship', level: 1 },
    { chName: '愛情', engName: 'romance', level: 5 },
    { chName: '性別', engName: 'gender', level: 4 },
    { chName: '身份', engName: 'identity', level: 3 },
  ],
  // 小筆記本
  notebooks: [
    {
      notebookName: '多益',
      notebookLib: [
        { chName: '車', engName: 'car', level: 4 },
        { chName: '房子', engName: 'house', level: 3 },
        { chName: '食物', engName: 'food', level: 2 },
      ],
    },
    {
      notebookName: '期中考',
      notebookLib: [
        { chName: '水', engName: 'water', level: 1 },
        { chName: '火', engName: 'fire', level: 4 },
        { chName: '地球', engName: 'earth', level: 3 },
      ],
    },
    {
      notebookName: '多益',
      notebookLib: [
        { chName: '地球', engName: 'earth', level: 3 },
        { chName: '天空', engName: 'sky', level: 2 },
        { chName: '太陽', engName: 'sun', level: 5 },
      ],
    },
    {
      notebookName: '學校',
      notebookLib: [
        { chName: '星星', engName: 'star', level: 3 },
        { chName: '風', engName: 'wind', level: 2 },
        { chName: '雲', engName: 'cloud', level: 1 },
      ],
    },
    {
      notebookName: '線上課程',
      notebookLib: [
        { chName: '風', engName: 'wind', level: 2 },
        { chName: '雲', engName: 'cloud', level: 1 },
        { chName: '雨', engName: 'rain', level: 4 },
        { chName: '雪', engName: 'snow', level: 3 },
      ],
    },
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
      yourCorrectAnswer: ['strawberry', 'giraffe', 'tiger', 'apple', 'grape'],
      yourWrongAnswer: [
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

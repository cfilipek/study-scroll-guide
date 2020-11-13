import bigOGraph from './assets/big-o-graph.png';

const dataObj = {
  'What you need to know': {
    title: 'What you need to know',
    information:
      'A brief overview of necessary knowledge provided my Gayle Laakmann McDowell [Cracking the Coding Skills]. See source section for link. Hopefully this guide will provide resources and aid in your endeavor to master these concepts.',
    steps: [
      {
        title: 'Data Structures',
        info:
          'Hash Tables, Linked Lists, Stacks, Queues, Trees, Tries, Graphs, Vectors, Heaps',
      },
      {
        title: 'Algorithms',
        info:
          'Quick Sort, Merge Sort, Binary Search, Breadth-First Search, Depth-First Search',
      },
      {
        title: 'Concepts',
        info:
          'Big-O Time, Big-O Space, Recursion and Memoization, Probability, Bit Manipulation',
      },
    ],
  },
  'Answering a Question': {
    title: 'Answering a Question',
    information:
      'On an interview where you are asked to demonstrate your coding abilities it can be helpful to break this process into steps (knowledge provided my Gayle Laakmann McDowell [Cracking the Coding Skills]. See source section for link):',
    steps: [
      {
        title: 'Listen',
        info:
          'Pay very close attention to any info in the problem description. And ask questions if you require clarity.',
      },
      {
        title: 'Example',
        info:
          'Most examples are too small or are special cases. Debug your example! Is this a special case/is it broad enough?',
      },
      {
        title: 'Brute Force',
        info:
          'Get a brute-force solution as soon as possible. State a naive algorithm and its run time, then optimize from there. Remember you are not coding yet, just talking out possibilities.',
      },
      {
        title: 'Optimize',
        info:
          'Look for any unused info. You usually need all information in a problem. Solve it "incorrectly" and then think about why it fails. Make a time vs. space tradeoff. Continue to talk this all out and make sure you understand each detail before you start coding.',
      },
      {
        title: 'Implement',
        info:
          'Your goal is to write BEAUTIFUL CODE. Modulariaze your code from the beginning and refactor anything that is not beautiful.',
      },
      {
        title: 'Test',
        info:
          'Walk through your code like you would for a detailed code review. All cases including special cases and edge cases. And when you find bugs, carefully fix them!',
      },
      {
        title: 'Do not',
        info:
          'Do not ignore information given (it is there for a reason). Do not try to solve problems in your head. Use an example! Do not push through code when confused. Stop and think. Get the interviewer "sign off" before diving into code.',
      },
    ],
  },
  'First Quiz': {
    title: 'First Quiz',
    information:
      "This is an intruductory quiz. Let's gage where you are in your coding journey. Questions and then answer sections will be back to back.",
    sections: ['First Quiz: String Reversal'],
  },
  'First Quiz: String Reversal': {
    title: 'First Quiz: String Reversal',
    information:
      "Return a string in reverse. Example: reverseString('hello') === 'olleh'",
    problem: 1,
    name: 'String Reversal',
    repl: 'https://repl.it/@cfilipek/ProbOneReverseString',
  },
  'First Quiz: String Reversal- Answer': {
    title: 'First Quiz: String Reversal- Answer',
    information:
      'Here are five different answers to the string reversal problem. If you solved the problem a different way that is fine too.',
    problem: 1,
    name: 'String Reversal Answers',
    repl: 'https://repl.it/@cfilipek/ProbOneReverseStringAnswer',
  },
  'Big 0': {
    title: 'Big O Notation',
    information:
      "This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl.",
    sections: ['Big 0 Introduction', 'Big 0 Part 1', 'Big 0 Quiz'],
  },
  'Big 0 Introduction': {
    title: 'Big O Introduction',
    image: bigOGraph,
    imageSource: 'https://www.bigocheatsheet.com/',
    information:
      "This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl.",
  },
  'Big 0 Part 1': {
    title: 'Big O Part 1',
    information:
      "This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl.",
  },
  'Big 0 Quiz': {
    title: 'Big O Quiz',
    information:
      "This is information about big 0. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl.",
  },
  'Data Structures': {
    title: 'Data Structures',
    information:
      "This is information about data structures. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl.",
  },
  'Data Structures 2': {
    title: 'Data Structures 2',
    information:
      "This is information about data structures. I'm baby gluten-free bespoke before they sold out aesthetic. Ramps skateboard cred, freegan sriracha typewriter tbh pug tacos portland 90's flannel leggings try-hard gentrify. Hexagon distillery shoreditch, freegan shabby chic locavore photo booth meh poutine. Cray DIY celiac salvia letterpress paleo helvetica kombucha YOLO health goth yuccie etsy echo park swag fashion axe. YOLO iPhone tofu kale chips ugh XOXO enamel pin hella freegan DIY. Fanny pack hella etsy sustainable PBR&B taxidermy everyday carry shabby chic lumbersexual. Wayfarers pop-up plaid snackwave, slow-carb put a bird on it whatever synth gentrify wolf kale chips adaptogen pinterest sriracha vinyl.",
  },
  Sources: {
    title: 'Sources',
    information:
      'Here are the sources used to create this guide (in no particular order):',
    sources: [
      {
        source:
          'Trekhleb. “Trekhleb/Javascript-Algorithms.” GitHub, December 7, 2019.',
        link: 'https://github.com/trekhleb/javascript-algorithms',
      },
      {
        source:
          'Steele, Colt. “JavaScript (JS) Algorithms and Data Structures Masterclass.” Udemy. Udemy, November 2018.',
        link:
          'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass.',
      },
      {
        source:
          'McDowell, Gayle Laakmann. "Cracking the Coding Interview: 189 Programming Questions and Solutions". Palo Alto, CA: CareerCup, LLC, 2019.',
        link: 'http://www.crackingthecodinginterview.com/',
      },
    ],
  },
  Fin: {
    title: 'Fin',
    information: 'You made it to the end!',
  },
};

export default dataObj;

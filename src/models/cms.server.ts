type Home = {
  imageSrc: string
  title: string
  description: string
  slug: string | null
}

type WorkBase = {
  imageSrc: string
  title: string
  year: number
  slug: string
}

type WorkGallery = WorkBase & {
  template: 'gallery'
  gallery: { label: string; src: string }[]
}

type WorkBasic = WorkBase & {
  template: 'basic'
  body: string
  photos: string[]
}

type Work = WorkGallery | WorkBasic

const workList: Work[] = [
  {
    imageSrc: '/images/2021/phantom/1.jpg',
    title: 'Phantom',
    year: 2021,
    slug: 'phantom',
    template: 'gallery',
    gallery: [
      {
        label: '“Untitled I”, 2021, 50x50cm, charcoal on paper',
        src: '/images/2021/phantom/1.jpg',
      },
      {
        label: '“Untitled II”, 2021, 50x50cm, charcoal on paper ',
        src: '/images/2021/phantom/2.jpg',
      },
      {
        label: '“Untitled 0”, 2021, 30x30cm, charcoal, pastel on canvas',
        src: '/images/2021/phantom/3.jpg',
      },
      {
        label: '“Untitled lII”, 2021, 50x50cm, charcoal on paper',
        src: '/images/2021/phantom/4.jpg',
      },
      {
        label: '“Untitled lIII”, 2021, 50x50cm, charcoal on paper',
        src: '/images/2021/phantom/5.jpg',
      },
      {
        label: '“Untitled lIIII”, 2021, 50x50cm, charcoal on paper',
        src: '/images/2021/phantom/6.jpg',
      },
    ],
  },
  {
    imageSrc: '/images/2020/disappear.jpg',
    title: 'Disappear',
    year: 2020,
    slug: 'disappear',
    template: 'basic',
    photos: [],
    body: `
“Disappear” , 2020, 60cm x 80cm, Oill on canvas and red wool


I have tried my best to make all of this better.
I became lost in the crowd.
Even though I spared no effort, I achieved not even a small amount.
I have disappeared into the crowd.

“I don’t know when it was that I lost my way; I don’t know the reason that I disappeared.”

努力讓這一切變得更好
迷失在人群中
盡力了，卻沒有一點成果
消失在人群中

「不知道什麼時候迷失了；不知道為何消失了。」
`,
  },
  {
    imageSrc: '/images/2020/vagueness/1.jpg',
    title: 'Vagueness',
    year: 2020,
    slug: 'vagueness',
    template: 'basic',
    photos: [
      '/images/2020/vagueness/1.jpg',
      '/images/2020/vagueness/2.jpg',
      '/images/2020/vagueness/3.jpg',
      '/images/2020/vagueness/4.jpg',
    ],
    body: `
“Vagueness”, 2020, newspaper and eggshell 

Just wanna wash
Wash the time
Wash the past
Wash the red
Wash the blue
Wash the yellow
Wash the white
Just wanna wash

只想洗白
把時間洗白
把過去洗白
把紅洗白
把藍洗白
把黃洗白
把白洗白
只想洗白
    `,
  },
  {
    imageSrc: '/images/2019/body/1.jpg',
    title: 'Body schema',
    year: 2019,
    slug: 'body-schema',
    template: 'basic',
    photos: [
      '/images/2019/body/1.jpg',
      '/images/2019/body/2.jpg',
      '/images/2019/body/3.jpg',
      '/images/2019/body/4.jpg',
      '/images/2019/body/5.jpg',
      '/images/2019/body/6.jpg',
      '/images/2019/body/7.jpg',
      '/images/2019/body/8.jpg',
      '/images/2019/body/9.jpg',
      '/images/2019/body/11.jpg',
      '/images/2019/body/12.jpg',
      '/images/2019/body/13.jpg',
      '/images/2019/body/14.jpg',
      '/images/2019/body/15.jpg',
    ],
    body: `
“Body Schema”, 2019, Size varies, white clay, sounds, image move, Installation 

What’s is the capacity of ‘Body’? How far a ‘Body’ could extend?
What is the limit of ‘Body’? How does a ‘non-standard body’ move and function?
I always question how my ‘body’is, and in what form does it exist?
What exactly is a ‘body’? The ‘body’ we observe by naked eyes is disparate from that of we feel by sentience. As I was so unfamiliar with ‘body’, felt so strange of ‘body’, I reconstructed my cognition of ‘body’ by exterior, objects, senses and perception.

「身體」的空間有幾大？「身體」的能力有幾大？
「身體」的極限有幾大？非標準內的「身體」是怎樣的活動。

我一直懷疑我的「身體」是一個怎樣的身體，它以怎樣的方式存在。

「身體」到底是怎樣的東西？
從肉眼看的「身體」，以及知覺感受的「身體」截然不同。
我在對身體的陌生、不認識、不了解的情況下，
從外觀、物件、感官、知覺上去重組對「身體」認識。

Video link: https://youtube.com/shorts/PrmdgkHELNs     
    `,
  },
  {
    imageSrc: '/images/2018/moment/1.jpg',
    title: '“At the moment there is” series 1《此曾在》系列',
    year: 2018,
    slug: 'at-the-moment',
    template: 'basic',
    photos: [
      '/images/2018/moment/1.jpg',
      '/images/2018/moment/2.jpg',
      '/images/2018/moment/3.jpg',
      '/images/2018/moment/4.jpg',
      '/images/2018/moment/5.jpg',
      '/images/2018/moment/6.jpg',
      '/images/2018/moment/7.jpg',
    ],
    body: `
## Video installation
Dimensions variable
Video 1: https://youtu.be/Mf5WZX27Res 
Video 2: https://youtu.be/FYYyZaf3ybA 
Video 3: https://youtu.be/quFuWEgENk0 
Video 4: https://youtu.be/b7FpmfUPP8k     

-----------
Inkjet print
80cm (H) °— 40cm (W)


Memories precipitate in time
Time disappears in memory
All objects do not exist alone. We interact with
them and they leave us memories. Some objects
even wake our memories which have sunk in the
unconscious mind.
I hope that the objects I chose can be mirrors for the
audience. The work does not just show my personal
memories but also memories between the body
and the objects.

回憶在時間裡沉澱
時間在回憶中消失

而所有的傳遞物件都不會獨自存在，我們與它們互動已留下記憶。甚至有些物件可以喚醒已沉睡的記憶。

我希望透過我與物件的互動，使觀眾可以把作品當成一面鏡子，從作品中看到的並不只是個人的回憶，而是身體和物件之間的記憶。
    `,
  },
  {
    imageSrc: '/images/2017/falling/1.jpg',
    title: 'Falling down in the sea of something',
    year: 2017,
    slug: 'falling-down',
    template: 'basic',
    photos: ['/images/2017/falling/1.jpg', '/images/2017/falling/2.jpg'],
    body: `
“Falling down in the sea of something”, 2017, 

Unnatural objects appear in nature. Humans are part of nature, so our bodies appear harmonious and fusion in nature. What is a human? What is the body? Our seeing is based on the features of the object. If the object has a human form, facial features, limbs, and feet walking, we will judge it as a human. Just for seeing. If the object does not have the basic conditions of human beings, what kind of feeling and the scene are when it walks into nature or the city? How do we feel, when an object which does not have the basic conditions of human beings, exists in nature? Is that still harmonious? Fusion?


'Seeing comes before words. The child looks and recognizes before it can speak.' John Berger

不自然的物體出現在自然界中。 人類是大自然的一部分，所以我們的身體在大自然中顯得和諧而融合。 什麼是人？ 身體是什麼？ 我們的觀察是基於物體的特徵。 如果物體有人形、五官、四肢、走路的腳，我們就判斷為人。 只是為了看看。 如果物體不具備人類的基本條件，走進大自然或城市，是一種什麼樣的感覺和景象？ 當一個不具備人類基本條件的物體存在於自然界時，我們的感受如何？ 還和諧嗎？ 融合？


「眼見為實。 孩子在會說話之前會看和認出。」約翰·伯傑

Video: https://youtu.be/zSzzIGwEbZ0     
    `,
  },
]

const performanceList: Work[] = [
  {
    imageSrc: '/images/2022/turn/1.png',
    title: 'Turn as Turn',
    year: 2022,
    slug: 'turn-as-turn',
    template: 'basic',
    photos: ['/images/2022/turn/1.png', '/images/2022/turn/2.png'],
    body: `
“Turn as Turn”, 2022, 3.28mins, Performance Documentary
Video Link : https://www.youtube.com/watch?v=X2nPF-f9w3U 

    `,
  },
  {
    imageSrc: '/images/2022/hand/1.png',
    title: 'It’s a hand',
    year: 2022,
    slug: 'it-is-a-hand',
    template: 'basic',
    photos: ['/images/2022/hand/1.png', '/images/2022/hand/2.png'],
    body: `
"It’s a hand." , 2022, Performance Documentary

Through repeated movements, the body reached its limit. A new form emerges from the disappearance of the original subject.

以重複的動作，過程到達了身體的極限，令原態消失，重塑了一個新的形態出現。

Video 1: https://youtu.be/EpzGEMrcYQg 
Video 2: https://youtu.be/d4LEn5abaZg 
    `,
  },
  {
    imageSrc: '/images/2022/frag/1.jpg',
    title: 'Fragilely Connected',
    year: 2022,
    slug: 'fragilely-connected',
    template: 'basic',
    photos: [
      '/images/2022/frag/1.jpg',
      '/images/2022/frag/2.jpg',
      '/images/2022/frag/3.jpg',
      '/images/2022/frag/4.jpg',
      '/images/2022/frag/5.jpg',
      '/images/2022/frag/6.jpg',
      '/images/2022/frag/7.jpg',
      '/images/2022/frag/8.jpg',
      '/images/2022/frag/9.jpg',
    ],
    body: `
2022 Spring Equinox Performance

“Fragilely Connected”, 2022, Performance Documentary

It was 2022 Equinox, a Sunday. It was inside an alined playground where people used to meet up while children play.
With that green fabric, we tried to connected and yet we were kept in a distance. Movements seemed to be in response yet tensioned with fragileness.

Performed by Yeung Siu Fong & RiK Wing Kei Yu
Photo by Ann Huang
Video by Thisby Cheng
20th Mar, 2022. Pak Kong Garden, Sai Kung, HONG KONG 
Video Link : https://youtu.be/Vpj5kXhFjEM  
`,
  },
  {
    imageSrc: '/images/2021/something/1.jpg',
    title: 'Something',
    year: 2021,
    slug: 'something',
    template: 'basic',
    photos: [
      '/images/2021/something/1.jpg',
      '/images/2021/something/2.jpg',
      '/images/2021/something/3.jpg',
      '/images/2021/something/4.jpg',
      '/images/2021/something/5.jpg',
    ],
    body: `
“Something”, 2021

Nothing and nothing

As part of @atman.ego 
Strong support partner of @pengpeng.temple
Performed at @5ka2studio 
Body paint by @5_ka_2 
Photo by @gustav852 

Video link 1: https://youtube.com/shorts/yyyYMNPF9ck 
Video link 2: https://youtube.com/shorts/jDIxq_xyMAw?feature=share 

    `,
  },
  {
    imageSrc: '/images/2021/fine/1.jpg',
    title: "I'm fine",
    year: 2021,
    slug: 'i-am-fine',
    template: 'basic',
    photos: [
      '/images/2021/fine/1.jpg',
      '/images/2021/fine/2.jpg',
      '/images/2021/fine/3.jpg',
      '/images/2021/fine/4.jpg',
      '/images/2021/fine/5.jpg',
    ],
    body: `
“I’m fine.”, 2021, ice, nail, Red Pitaya and glass
 
The cube-shaped ice hides thorny fruit
Temperature and pressure
Precipitate and sediments
Changing form
Melt into water
Melt into gas
 
立方體形的冰裹藏著充滿刺的果
溫度和壓力
沉澱物和沉積物
改變中形態
熔化成水
熔化成氣
 
As part of @per.platform 
Performed at @videotage_hk 
Photo by @gustav852

Video link: https://youtube.com/shorts/Kb8lGWmr-zs?feature=share 

    `,
  },
  {
    imageSrc: '/images/2021/disc/1.jpg',
    title: 'Disc',
    year: 2021,
    slug: 'disc',
    template: 'basic',
    photos: [
      '/images/2021/disc/1.jpg',
      '/images/2021/disc/2.jpg',
      '/images/2021/disc/3.jpg',
      '/images/2021/disc/4.jpg',
      '/images/2021/disc/5.jpg',
      '/images/2021/disc/6.jpg',
      '/images/2021/disc/7.jpg',
      '/images/2021/disc/8.jpg',
      '/images/2021/disc/9.jpg',
      '/images/2021/disc/10.jpg',
      '/images/2021/disc/11.jpg',
      '/images/2021/disc/12.jpg',
      '/images/2021/disc/13.jpg',
      '/images/2021/disc/14.jpg',
      '/images/2021/disc/15.jpg',
      '/images/2021/disc/16.jpg',
      '/images/2021/disc/17.jpg',
      '/images/2021/disc/18.jpg',
      '/images/2021/disc/19.jpg',
      '/images/2021/disc/20.jpg',
    ],
    body: `
“Disc”, 2021, 60mins

Wandering the inner area without borders
The untouchable area is not a convex set
"Object” is not solid
Because "Object” is an empty interior


不含邊界的內部區域游走
不能觸碰的區域不是凸集
「我」不是實心的
因「我」是中空的

As part of @per.platform 
Performed at @135.ycs & @thyaudiovisuallab
Photo by @gustav852 

Video Link 1: https://youtu.be/3Q5kdAnQcY8 
Video Link 2: https://youtu.be/WfBIbZoEq_I      
    `,
  },
  {
    imageSrc: '/images/2021/side/1.jpg',
    title: 'Side',
    year: 2021,
    slug: 'side',
    template: 'basic',
    photos: [],
    body: `
“Side”, 2021, 120 mins, Performance Documentary

Video 1: https://youtu.be/rqrVj6Cy034 
Video 2: https://youtu.be/ERBqmRCw57E 
Video 3: https://youtu.be/nsTi5v2zFnw 
Video 4: https://youtu.be/CYyU66OFUHo 
Video 5: https://youtu.be/nsTi5v2zFnw 
Video 6: https://youtu.be/xQm3YQYhOKM 
Video 7: https://youtu.be/ihtAANl6V1g 

    `,
  },
  {
    imageSrc: '/images/2021/phantom_performance/1.jpg',
    title: 'phantom',
    year: 2021,
    slug: 'phantom',
    template: 'basic',
    photos: [
      '/images/2021/phantom_performance/1.jpg',
      '/images/2021/phantom_performance/2.jpg',
      '/images/2021/phantom_performance/3.jpg',
      '/images/2021/phantom_performance/4.jpg',
      '/images/2021/phantom_performance/5.jpg',
      '/images/2021/phantom_performance/6.jpg',
      '/images/2021/phantom_performance/7.jpg',
      '/images/2021/phantom_performance/8.jpg',
    ],
    body: `
" Untitled" , 2021, 120mins 

Escape from the illusion
Just imagine

Video 1: https://youtu.be/IVkL1KkuTWA 
Video 2: https://youtu.be/5dwbNvFPn4o 
Video 3: https://youtu.be/17MPDkAinyE 
`,
  },
  {
    imageSrc: '/images/2019/in_vain/1.jpg',
    title: 'In vain',
    year: 2019,
    slug: 'in-vain',
    template: 'basic',
    photos: [
      '/images/2019/in_vain/1.jpg',
      '/images/2019/in_vain/2.jpg',
      '/images/2019/in_vain/3.jpg',
      '/images/2019/in_vain/4.jpg',
      '/images/2019/in_vain/5.jpg',
      '/images/2019/in_vain/6.jpg',
    ],
    body: `
“In vain”, 2019, 4 hours
South Island Art day
Video link 1: https://youtube.com/shorts/Bi47K9ML1nI 
Video link 2: https://youtu.be/c7n11vn3RPw 
    
“In vain”, 2019, 30mins
Body Schema exhibition
`,
  },
  {
    imageSrc: '/images/2018/inside/1.jpg',
    title: 'Inside the wall',
    year: 2018,
    slug: 'inside-the-wall',
    template: 'basic',
    photos: [
      '/images/2018/inside/1.jpg',
      '/images/2018/inside/2.jpg',
      '/images/2018/inside/3.jpg',
      '/images/2018/inside/4.jpg',
      '/images/2018/inside/5.jpg',
      '/images/2018/inside/6.jpg',
      '/images/2018/inside/7.jpg',
      '/images/2018/inside/8.jpg',
      '/images/2018/inside/9.jpg',
      '/images/2018/inside/10.jpg',
    ],
    body: `
“Inside the wall”, 2018, 5 hours

Life, oppression, crowding, restraint, suffocation, silent acceptance. Who trapped us inside the walls?

生命、壓迫、擁擠、拘束、窒息、默默接受。是誰把我們困在圍牆內？
`,
  },
  {
    imageSrc: '/images/2017/strangers/1.jpg',
    title: 'Strangers in the garden',
    year: 2017,
    slug: 'strangers-in-the-garden',
    template: 'basic',
    photos: [
      '/images/2017/strangers/1.jpg',
      '/images/2017/strangers/2.jpg',
      '/images/2017/strangers/3.jpg',
      '/images/2017/strangers/4.jpg',
      '/images/2017/strangers/5.jpg',
      '/images/2017/strangers/6.jpg',
      '/images/2017/strangers/7.jpg',
    ],
    body: `
<STRANGERS IN THE GARDEN 2- Black Milk & White Coal>Exchange Performance Project , HK BUTOH SEASON 2017

HK BUTOH SEASON 2017 
<STRANGERS IN THE GARDEN 2- Black Milk & White Coal>Exchange Performance Project

Mother's Milk and father's coal.....

The birth and the bury......

Kill the human body and come for our Butoh Garden !

Everything come and disappear in a rush?! Moving Arts HK honestly want to ask what is BUTOH to us while more and more BUTOH activities suddenly come into the Hong Kong dance scene while we we have more alert we keep organizing BUTOH related events since 2010.... 

To me,to you,to the modern world,to this moment, how impressive and powerful from the BUTOH body,BUTOH spirit and BUTOH culture in nowadays Hong Kong?

MORE or LESS;ADDITIONAL or REDUCE; EXTRA or INDEED,
ALIVE or ERASE.; DIFFERENCE or SAME...we this community in an old flat,let's open our sense here with the space.


*There will be nudity part during performance, audience plse decided to come with your children or not.To us all in this project, we are open and allowed everyone to come and share.Big apologize for our site which got such long stairs in an old building will not be friendly to any wheel chair people this time . 


Butoh consultant & exchange performer :
Yumiko Yoshioka (Berlin based Japanese Butoh Master)

Butoh Performers ：
Miguel Camamero (Spain)
Vinci Mok (Hong Kong)

New recommended painter-body performer:
Yeung Siu Fong (Hong Kong )

Live Music/ sound performer ：
Wilson Tsang (Hong Kong)
    `,
  },
]

const homeList: Home[] = [
  {
    imageSrc: '/images/2022/chokstick/No.27.jpg',
    title: '百家碗筷',
    slug: null,
    description: `
No.27  
她說雙魚座一點也不難搞  
她說她是獨生女  
她說曾經也希望自己有哥哥或姐姐  
她想被人疼愛  
-----------
More stories are coming soon...
    
    `,
  },
  {
    imageSrc: '/images/2022/turn/1.png',
    title: 'Turn as Turn',
    slug: '/performance/turn-as-turn',
    description: `“Turn as Turn”, 2022, 3.28mins, Performance Documentary`,
  },
  {
    imageSrc: '/images/2022/hand/1.png',
    title: 'It’s a hand',
    slug: '/performance/it-is-a-hand',
    description: `
"It’s a hand." , 2022, Performance Documentary

Through repeated movements, the body reached its limit. A new form emerges from the disappearance of the original subject.

以重複的動作，過程到達了身體的極限，令原態消失，重塑了一個新的形態出現。
    `,
  },
  {
    imageSrc: '/images/2022/frag/1.jpg',
    title: 'Fragilely Connected',
    slug: '/performance/fragilely-connected',
    description: `
2022 Spring Equinox Performance

“Fragilely Connected”, 2022, Performance Documentary

It was 2022 Equinox, a Sunday. It was inside an alined playground where people used to meet up while children play.
With that green fabric, we tried to connected and yet we were kept in a distance. Movements seemed to be in response yet tensioned with fragileness.

Performed by Yeung Siu Fong & RiK Wing Kei Yu
Photo by Ann Huang
Video by Thisby Cheng
20th Mar, 2022. Pak Kong Garden, Sai Kung, HONG KONG 
`,
  },
]

const getWorkList = async () => workList
const getPerformanceList = async () => performanceList
const getHomeList = async () => homeList

export type { Work, Home }
export { getWorkList, getPerformanceList, getHomeList }

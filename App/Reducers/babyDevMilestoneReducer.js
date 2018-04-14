const DEFAULT_STATE = {bdms:[],bdmsDesc:[{}]}

const bdms = [
            '1 month old',
            '2 months old',
            '3 months old',
            '4 months old',
            '5 months old',
            '6 months old',
            '7 months old',
            '8 months old',
            '9 months old',
            '10 months old',
            '11 months old',
            '12 months old or One year old',
            '13 months old ',
            '14 months old',
            '15 months old ',
            '16 months old',
            '17 months old ',
            '18 months old or One and a half year old',
            '19 months old ',
            '20 months old',
            '21 months old ',
            '22 months old',
            '23 months old ',
            '24 months old or two years old',
            '25 months old ',
            '26 months old',
            '27 months old ',
            '28 months old',
            '29 months old ',
            '30 months old',
        ];

const bdmsDesc = [
    {
        "key":"month1",

        "CommonSkils":{
            "Title":"Common Skills",
            "Skills":['Lifts head','Responds to sound','Stares at faces'],
        },
        "SkillsStillLearning":{
            "Title":"Skills Still Learning",
            "Skills":['Follows moving objects by eyes','Make cooing sounds','Can see patterns in black and white and their contrasts']
        },
        "RareSkills":{
            "Title":"Rare Skills",
            "Skills":['Smiles','Laughs','Holds head at 45 degree angle']
        }
    },
    {
        "key":"month2",

        "CommonSkils":{
            "Title":"Common Skills",
            "Skills":['Make gurgling and cooing sounds','Follows moving objects by eyes','Holds head up for short periodss'],
        },
        "SkillsStillLearning":{
            "Title":"Skills Still Learning",
            "Skills":['Smiles','Laughs','Holds head at 45 degree angle','Smoother movements']
        },
        "RareSkills":{
            "Title":"Rare Skills",
            "Skills":['Keeps head steady','Bears weight on legs','May lift head and shoulder in a pushup-like position']
        }
    },
    {
        "key":"month3",

        "CommonSkils":{
            "Title":"Common Skills",
            "Skills":['Laughs ','Keeps head steady','Recognizes mom\'s face and can know her by her scent'],
        },
        "SkillsStillLearning":{
            "Title":"Skills Still Learning",
            "Skills":['Squeals and make gurgling and cooing sounds','Recognizes mom\'s voice','Do mini-pushups']
        },
        "RareSkills":{
            "Title":"Rare Skills",
            "Skills":['Listens and turns toward loud sounds','Can bring hands together','May try to bat at toys','Rolls over']
        }
    },
    {
        "key":"month4",

        "CommonSkils":{
            "Title":"Common Skills",
            "Skills":['Keeps head up and steady','Can bear weight on legs','Make cooing sounds in response to your talk'],
        },
        "SkillsStillLearning":{
            "Title":"Skills Still Learning",
            "Skills":['Can grasp a toy','Reaches out to touch or grab objects','Rolls over']
        },
        "RareSkills":{
            "Title":"Rare Skills",
            "Skills":['Imitates sounds and speech made by you such as baba, mama','First tooth may show up May be ready for solids']
        }
    },
]

const babyMileStone={
    bdms:bdms,
    bdmsDesc:bdmsDesc
}

export default (state = DEFAULT_STATE, {type})=> {
    console.log('baby milestone reducer : Action type: '+type)
  switch(type) {
      
    case 'LOAD_BABYMSTONE':
      return {
        ...state,
        babyMileStone:babyMileStone
      }
    default:
      return state
  }
}
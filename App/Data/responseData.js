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

const bdmsDesc = [{
        "key": "month1",

        "CommonSkils": {
            "Title": "Common Skills",
            "Skills": ['Lifts head', 'Responds to sound', 'Stares at faces'],
        },
        "SkillsStillLearning": {
            "Title": "Skills Still Learning",
            "Skills": ['Follows moving objects by eyes', 'Make cooing sounds', 'Can see patterns in black and white and their contrasts']
        },
        "RareSkills": {
            "Title": "Rare Skills",
            "Skills": ['Smiles', 'Laughs', 'Holds head at 45 degree angle']
        }
    },
    {
        "key": "month2",

        "CommonSkils": {
            "Title": "Common Skills",
            "Skills": ['Make gurgling and cooing sounds', 'Follows moving objects by eyes', 'Holds head up for short periodss'],
        },
        "SkillsStillLearning": {
            "Title": "Skills Still Learning",
            "Skills": ['Smiles', 'Laughs', 'Holds head at 45 degree angle', 'Smoother movements']
        },
        "RareSkills": {
            "Title": "Rare Skills",
            "Skills": ['Keeps head steady', 'Bears weight on legs', 'May lift head and shoulder in a pushup-like position']
        }
    },
    {
        "key": "month3",

        "CommonSkils": {
            "Title": "Common Skills",
            "Skills": ['Laughs ', 'Keeps head steady', 'Recognizes mom\'s face and can know her by her scent'],
        },
        "SkillsStillLearning": {
            "Title": "Skills Still Learning",
            "Skills": ['Squeals and make gurgling and cooing sounds', 'Recognizes mom\'s voice', 'Do mini-pushups']
        },
        "RareSkills": {
            "Title": "Rare Skills",
            "Skills": ['Listens and turns toward loud sounds', 'Can bring hands together', 'May try to bat at toys', 'Rolls over']
        }
    },
    {
        "key": "month4",

        "CommonSkils": {
            "Title": "Common Skills",
            "Skills": ['Keeps head up and steady', 'Can bear weight on legs', 'Make cooing sounds in response to your talk'],
        },
        "SkillsStillLearning": {
            "Title": "Skills Still Learning",
            "Skills": ['Can grasp a toy', 'Reaches out to touch or grab objects', 'Rolls over']
        },
        "RareSkills": {
            "Title": "Rare Skills",
            "Skills": ['Imitates sounds and speech made by you such as baba, mama', 'First tooth may show up May be ready for solids']
        }
    },
]

export function getBabyMileStoneData() {
    return ({
        bdms,
        bdmsDesc
    })
}



const bct = [{
        "key": "BCT1",
        "sno": "1",
        "desc": "Do not give your baby a tub bath until her/his umbilical cord has fallen off."
    },
    {
        "key": "BCT2",
        "sno": "2",
        "desc": "Breast milk is best for your child. Feed your infant every two to three hours in the first few months."
    },
    {
        "key": "BCT3",
        "sno": "3",
        "desc": "Begin bathing your baby by wiping her/his eyes from the inside to outside using a clean, damp cloth, without soap."
    },
    {
        "key": "BCT4",
        "sno": "4",
        "desc": "Never leave a baby alone in in the tub, even for minute!"
    },
    {
        "key": "BCT5",
        "sno": "5",
        "desc": "Establish a simple ritual of bathing baby, singing her/him a song. Lay her/him in the bed when she/he is drowsy but still awake."
    },
    {
        "key": "BCT6",
        "sno": "6",
        "desc": "You can gently scrub your baby's head to remove any dried skin."
    },
    {
        "key": "BCT7",
        "sno": "7",
        "desc": "Do not use baby powder or talcum powder on your baby's skin. The particles found in baby powder and talc have been found to irritate babies lungs in some cases seriously."
    },
    {
        "key": "BCT8",
        "sno": "8",
        "desc": "You can rub a small amount of baby oil on your infant's scalp if she/he has flaky skin."
    },
    {
        "key": "BCT9",
        "sno": "9",
        "desc": "If your baby suffers from diaper rash, it is always advisable to consult your pediatrician."
    },
    {
        "key": "BCT10",
        "sno": "10",
        "desc": "Once you begin feeding your baby solid foods, wait a few days before introducing each new food to rule out any food allergies that your child might have."
    },
    {
        "key": "BCT11",
        "sno": "11",
        "desc": "If the infant formula you are feeding your child seems to upset her/his stomach, contact your pediatrician before changing formulas."
    },
    {
        "key": "BCT12",
        "sno": "12",
        "desc": "Remove all blankets, loose sheets, pillows and toys from your baby's bed to reduce the risk of SIDS (Sudden Infant Death Syndrome."
    },
    {
        "key": "BCT13",
        "sno": "13",
        "desc": "Spend some time playing with your baby every day. This helps in her/his development in may ways."
    },
    {
        "key": "BCT14",
        "sno": "14",
        "desc": "Maintenance of hygiene is utmost important."
    },
    {
        "key": "BCT15",
        "sno": "15",
        "desc": "Source: http://baby.lovetoknow.com"
    },
];

export function getBabyCareTipsData() {
    return (bct)
}



const boys = [{
        key: '1',
        age: 'Birth',
        weight: '3.3',
        height: '50.5'
    },
    {
        key: '2',
        age: '3 months',
        weight: '6.0',
        height: '61.1'
    },
    {
        key: '3',
        age: '6 months',
        weight: '7.8',
        height: '67.8'
    },
    {
        key: '4',
        age: '9 months',
        weight: '9.2',
        height: '72.3'
    },
    {
        key: '5',
        age: '1 year',
        weight: '10.2',
        height: '76.1'
    },
    {
        key: '6',
        age: '2 years',
        weight: '12.3',
        height: '85.6'
    },
    {
        key: '7',
        age: '3 years',
        weight: '14.6',
        height: '94.9'
    },
    {
        key: '8',
        age: '4 years',
        weight: '16.7',
        height: '102.9'
    },
    {
        key: '9',
        age: '5 years',
        weight: '18.7',
        height: '109.9'
    },
    {
        key: '10',
        age: '6 years',
        weight: '20.7',
        height: '116.1'
    },
    {
        key: '11',
        age: '7 years',
        weight: '22.9',
        height: '121.7'
    },
    {
        key: '12',
        age: '8 years',
        weight: '25.3',
        height: '127.0'
    },
    {
        key: '13',
        age: '9 years',
        weight: '28.1',
        height: '132.2'
    },
    {
        key: '14',
        age: '10 years',
        weight: '31.4',
        height: '137.5'
    },
    {
        key: '15',
        age: '11 years',
        weight: '32.2',
        height: '140.0'
    },
    {
        key: '16',
        age: '12 years',
        weight: '37.0',
        height: '147.0'
    },
    {
        key: '17',
        age: '13 years',
        weight: '40.9',
        height: '153.0'
    },
    {
        key: '18',
        age: '14 years',
        weight: '47.0',
        height: '160.0'
    },
    {
        key: '19',
        age: '15 years',
        weight: '52.6',
        height: '166.0'
    },
    {
        key: '20',
        age: '16 years',
        weight: '58.0',
        height: '171.0'
    },
    {
        key: '21',
        age: '17 years',
        weight: '62.7',
        height: '175.0'
    },
    {
        key: '22',
        age: '18 years',
        weight: '65.0',
        height: '177.0'
    },
]

const girls = [{
        key: '1',
        age: 'Birth',
        weight: '3.2',
        height: '49.9'
    },
    {
        key: '2',
        age: '3 months',
        weight: '5.4',
        height: '60.2'
    },
    {
        key: '3',
        age: '6 months',
        weight: '7.2',
        height: '66.6'
    },
    {
        key: '4',
        age: '9 months',
        weight: '8.6',
        height: '71.7'
    },
    {
        key: '5',
        age: '1 year',
        weight: '9.5',
        height: '75.0'
    },
    {
        key: '6',
        age: '2 years',
        weight: '11.8',
        height: '84.5'
    },
    {
        key: '7',
        age: '3 years',
        weight: '14.1',
        height: '93.9'
    },
    {
        key: '8',
        age: '4 years',
        weight: '16.0',
        height: '101.6'
    },
    {
        key: '9',
        age: '5 years',
        weight: '17.7',
        height: '108.4'
    },
    {
        key: '10',
        age: '6 years',
        weight: '19.5',
        height: '114.6'
    },
    {
        key: '11',
        age: '7 years',
        weight: '21.8',
        height: '120.6'
    },
    {
        key: '12',
        age: '8 years',
        weight: '24.8',
        height: '126.4'
    },
    {
        key: '13',
        age: '9 years',
        weight: '28.5',
        height: '132.2'
    },
    {
        key: '14',
        age: '10 years',
        weight: '32.5',
        height: '138.3'
    },
    {
        key: '15',
        age: '11 years',
        weight: '33.7',
        height: '142.0'
    },
    {
        key: '16',
        age: '12 years',
        weight: '38.7',
        height: '148.0'
    },
    {
        key: '17',
        age: '13 years',
        weight: '44.0',
        height: '150.0'
    },
    {
        key: '18',
        age: '14 years',
        weight: '48.0',
        height: '155.0'
    },
    {
        key: '19',
        age: '15 years',
        weight: '51.5',
        height: '161.0'
    },
    {
        key: '20',
        age: '16 years',
        weight: '53.0',
        height: '162.0'
    },
    {
        key: '21',
        age: '17 years',
        weight: '54.0',
        height: '163.0'
    },
    {
        key: '22',
        age: '18 years',
        weight: '54.4',
        height: '164.0'
    },
]

export function getHeightWeightData() {
    return ({
        boys,
        girls
    });
}
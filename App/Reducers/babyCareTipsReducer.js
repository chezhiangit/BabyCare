const DEFAULT_STATE = [{}]

const bct = [
    {
        "key":"BCT1",
        "sno":"1",
        "desc":"Do not give your baby a tub bath until her/his umbilical cord has fallen off."
    },
    {
        "key":"BCT2",
        "sno":"2",
        "desc":"Breast milk is best for your child. Feed your infant every two to three hours in the first few months."
    },
    {
        "key":"BCT3",
        "sno":"3",
        "desc":"Begin bathing your baby by wiping her/his eyes from the inside to outside using a clean, damp cloth, without soap."
    },
    {
        "key":"BCT4",
        "sno":"4",
        "desc":"Never leave a baby alone in in the tub, even for minute!"
    },
    {
        "key":"BCT5",
        "sno":"5",
        "desc":"Establish a simple ritual of bathing baby, singing her/him a song. Lay her/him in the bed when she/he is drowsy but still awake."
    },
    {
        "key":"BCT6",
        "sno":"6",
        "desc":"You can gently scrub your baby's head to remove any dried skin."
    },
    {
        "key":"BCT7",
        "sno":"7",
        "desc":"Do not use baby powder or talcum powder on your baby's skin. The particles found in baby powder and talc have been found to irritate babies lungs in some cases seriously."
    },
    {
        "key":"BCT8",
        "sno":"8",
        "desc":"You can rub a small amount of baby oil on your infant's scalp if she/he has flaky skin."
    },
    {
        "key":"BCT9",
        "sno":"9",
        "desc":"If your baby suffers from diaper rash, it is always advisable to consult your pediatrician."
    },
    {
        "key":"BCT10",
        "sno":"10",
        "desc":"Once you begin feeding your baby solid foods, wait a few days before introducing each new food to rule out any food allergies that your child might have."
    },
    {
        "key":"BCT11",
        "sno":"11",
        "desc":"If the infant formula you are feeding your child seems to upset her/his stomach, contact your pediatrician before changing formulas."
    },
    {
        "key":"BCT12",
        "sno":"12",
        "desc":"Remove all blankets, loose sheets, pillows and toys from your baby's bed to reduce the risk of SIDS (Sudden Infant Death Syndrome."
    },
    {
        "key":"BCT13",
        "sno":"13",
        "desc":"Spend some time playing with your baby every day. This helps in her/his development in may ways."
    },
    {
        "key":"BCT14",
        "sno":"14",
        "desc":"Maintenance of hygiene is utmost important."
    },
    {
        "key":"BCT15",
        "sno":"15",
        "desc":"Source: http://baby.lovetoknow.com"
    },
];

export default (state = DEFAULT_STATE, {type})=> {
    console.log('baby care tips reducer : Action type: '+type)
  switch(type) {
      
    case 'LOAD_BABYCARETIPS':
      return {
        ...state,
        babyCareTips:bct
      }
    default:
      return state
  }
}
const DEFAULT_STATE = {}


const boys=[
    {
        key:'1',
        age:'Birth',
        weight:'3.3',
        height:'50.5'
    },
    {
        key:'2',
        age:'3 months',
        weight:'6.0',
        height:'61.1'
    },
    {
        key:'3',
        age:'6 months',
        weight:'7.8',
        height:'67.8'
    },
    {
        key:'4',
        age:'9 months',
        weight:'9.2',
        height:'72.3'
    },
    {
        key:'5',
        age:'1 year',
        weight:'10.2',
        height:'76.1'
    },
    {
        key:'6',
        age:'2 years',
        weight:'12.3',
        height:'85.6'
    },
    {
        key:'7',
        age:'3 years',
        weight:'14.6',
        height:'94.9'
    },
    {
        key:'8',
        age:'4 years',
        weight:'16.7',
        height:'102.9'
    },
    {
        key:'9',
        age:'5 years',
        weight:'18.7',
        height:'109.9'
    },
]

export default (state = DEFAULT_STATE, {type})=> {
    console.log('baby care tips reducer : Action type: '+type)
  switch(type) {
      
    case 'LOAD_HEIGHTWEIGHT':
      return {
        ...state,
        boys
      }
    default:
      return state
  }
}
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
    {
        key:'10',
        age:'6 years',
        weight:'20.7',
        height:'116.1'
    },
    {
        key:'11',
        age:'7 years',
        weight:'22.9',
        height:'121.7'
    },
    {
        key:'12',
        age:'8 years',
        weight:'25.3',
        height:'127.0'
    },
    {
        key:'13',
        age:'9 years',
        weight:'28.1',
        height:'132.2'
    },
    {
        key:'14',
        age:'10 years',
        weight:'31.4',
        height:'137.5'
    },
    {
        key:'15',
        age:'11 years',
        weight:'32.2',
        height:'140.0'
    },
    {
        key:'16',
        age:'12 years',
        weight:'37.0',
        height:'147.0'
    },
    {
        key:'17',
        age:'13 years',
        weight:'40.9',
        height:'153.0'
    },
    {
        key:'18',
        age:'14 years',
        weight:'47.0',
        height:'160.0'
    },
    {
        key:'19',
        age:'15 years',
        weight:'52.6',
        height:'166.0'
    },
    {
        key:'20',
        age:'16 years',
        weight:'58.0',
        height:'171.0'
    },
    {
        key:'21',
        age:'17 years',
        weight:'62.7',
        height:'175.0'
    },
    {
        key:'22',
        age:'18 years',
        weight:'65.0',
        height:'177.0'
    },
]

const girls=[
    {
        key:'1',
        age:'Birth',
        weight:'3.2',
        height:'49.9'
    },
    {
        key:'2',
        age:'3 months',
        weight:'5.4',
        height:'60.2'
    },
    {
        key:'3',
        age:'6 months',
        weight:'7.2',
        height:'66.6'
    },
    {
        key:'4',
        age:'9 months',
        weight:'8.6',
        height:'71.7'
    },
    {
        key:'5',
        age:'1 year',
        weight:'9.5',
        height:'75.0'
    },
    {
        key:'6',
        age:'2 years',
        weight:'11.8',
        height:'84.5'
    },
    {
        key:'7',
        age:'3 years',
        weight:'14.1',
        height:'93.9'
    },
    {
        key:'8',
        age:'4 years',
        weight:'16.0',
        height:'101.6'
    },
    {
        key:'9',
        age:'5 years',
        weight:'17.7',
        height:'108.4'
    },
    {
        key:'10',
        age:'6 years',
        weight:'19.5',
        height:'114.6'
    },
    {
        key:'11',
        age:'7 years',
        weight:'21.8',
        height:'120.6'
    },
    {
        key:'12',
        age:'8 years',
        weight:'24.8',
        height:'126.4'
    },
    {
        key:'13',
        age:'9 years',
        weight:'28.5',
        height:'132.2'
    },
    {
        key:'14',
        age:'10 years',
        weight:'32.5',
        height:'138.3'
    },
    {
        key:'15',
        age:'11 years',
        weight:'33.7',
        height:'142.0'
    },
    {
        key:'16',
        age:'12 years',
        weight:'38.7',
        height:'148.0'
    },
    {
        key:'17',
        age:'13 years',
        weight:'44.0',
        height:'150.0'
    },
    {
        key:'18',
        age:'14 years',
        weight:'48.0',
        height:'155.0'
    },
    {
        key:'19',
        age:'15 years',
        weight:'51.5',
        height:'161.0'
    },
    {
        key:'20',
        age:'16 years',
        weight:'53.0',
        height:'162.0'
    },
    {
        key:'21',
        age:'17 years',
        weight:'54.0',
        height:'163.0'
    },
    {
        key:'22',
        age:'18 years',
        weight:'54.4',
        height:'164.0'
    },
]

export default (state = DEFAULT_STATE, {type})=> {
    console.log('baby care tips reducer : Action type: '+type)
  switch(type) {
      
    case 'LOAD_HEIGHTWEIGHT':
      return {
        ...state,
        boys,
        girls
      }
    default:
      return state
  }
}
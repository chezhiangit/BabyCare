import * as BabyCareModel from '../Data/responseData';

export function createVacinationList() {
    console.log('start to create vaccination list')
    return (dispatch) =>{
        console.log('calling get vaccination list')
        return BabyCareModel.getVaccinationList()
    }
}
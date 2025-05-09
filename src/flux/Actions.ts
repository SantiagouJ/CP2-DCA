import { AppDispatcher } from './Dispatcher';
import { Action } from './Dispatcher';
import { Plant } from '../services/types/plantsType';

export const PlantsActionsTypes = {
    CREATE_PLANT: "CREATE_PLANT"
}

export const PlantsAcionsTypes = {
    createPlant: (plant: Plant) => {
        AppDispatcher.dispatch({
            
        });
    },
};
import { AppDispatcher } from './Dispatcher';
import { Plant } from '../services/types/plantsType';

export const PlantsActionsTypes = {
    CREATE_PLANT: "CREATE_PLANT"
}

export const PlantsAcions = {
    createPlant: (plant: Plant) => {
        AppDispatcher.dispatch({
            type: PlantsActionsTypes,
            payload: plant
        });
    },
};
import { AppDispatcher, Action } from './Dispatcher';
import { Plant } from '../services/types/plantsType';
import { PlantsActionsTypes, PlantsAcions } from './Actions';

export type State = {
    plants: Plant []
};

type Listener = (state: State) => void;

class Store {
    private _myState: State = {
        plants: []
    }

    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return {};
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case PlantsActionsTypes.CREATE_PLANT:
            if (action.payload === "object") {
                this._myState= {
                    ...this._myState,
                    
                }
            }
            this._emitChange()
                break;
        }
    }

    private _emitChange(): void {
        for (const listener of this._listeners) { 
            
        }
    }

    suscribe(listener: Listener): void{

    }

    unsubscribe(listener: Listener): void { 

    }
}

export const store = new Store();
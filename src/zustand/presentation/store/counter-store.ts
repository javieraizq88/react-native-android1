import { create } from 'zustand'

export interface CounterState {
    count: number,
    
    aumentar: (value: number) => void;
  
}

export const useCounterStore = create<CounterState>()((set, get) => ({
    count: 1,

    aumentar: (value ) => {
        console.log(get());
        // set({name: name, email: email});
        set(state => ({ count: state.count + value })  );
    },

}));
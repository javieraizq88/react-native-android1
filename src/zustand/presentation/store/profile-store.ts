import { create } from 'zustand'

export interface ProfileState {
    name: string,
    email: string,

    changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, get) => ({
    name: 'juan',
    email: 'mail@mail.com',

    changeProfile: (name: string, email: string ) => {
        console.log(get());
        // set({name: name, email: email});
        set({name, email});
    }
}));
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        smessageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 123456,
        //     imageUrls: [],
        // }
    },
    reducers: {
        savingNewNote: ( state ) => {
            state.isSaving = true;

        },
        addNewEmptyNote: ( state, action ) => {
            state.notes.push( action.payload );
            state.isSaving = false;

        },
        setActiveNote: ( state, action ) => {
            state.active = action.payload;

        },
        setNotes: ( state, action ) => {
            state.notes = action.payload;

        },
        setSaving: ( state ) => {

        },
        updateNote: ( state, action ) => {

        },
        deleteNodeByID: ( state, action ) => {

        },
        
    }
});


// Action creators are generated for each case reducer function
export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNote, deleteNodeByID, savingNewNote } = journalSlice.actions;
import { configureStore,createSlice,nanoid} from "@reduxjs/toolkit";
import { useState } from "react";
const initialState={
    name:[],
    email:[],
    dob:[],
    contact:[],
    marksheet10:[],
    marksheet12:[],
    marksheetgrad:[],
    marksheetpostgrad:[],
    offerletter:[],
    salaryslip:[],
    bankstatement:[],
    incrementletter:[],
    others:[],
    pageState:0,
    aboutyou1:[],
    aboutyou2:[],
    aboutyou3:[],
    interviewEmail:[],
    interviewLocation:[],
    interviewDate:[],
    interviewTime:[],
    interviewTimeZone:[],
    interviewMedium:[]
}
const HandleInput = createSlice({
    name:'inputValue',
    initialState:initialState,
    reducers:{
        handleName(state,action){
            
            state.name=action.payload;
            console.log(action.payload)
        },
        handleEmail(state,action){
            state.email=action.payload;
            console.log(action.payload)
        },
        handleDob(state,action){
            state.dob=action.payload;
            console.log(action.payload)

        },
        handleContact(state,action){
            state.contact=action.payload;
            console.log(action.payload)

        },
        validationHandler(state,action){
            console.log('validator triggered.');
            if(state.name.length===0||state.email.length===0){
                alert('Enter the fields that are marked with *')
            }
            else{
                state.pageState=state.pageState+1;
            }
        },
        handleMarksheet10(state,action){
            state.marksheet10=action.payload;
            console.log(action.payload)

        },
        handleMarksheet12(state,action){
            state.marksheet12=action.payload;
            console.log(action.payload)

        },
        handleMarksheetgrad(state,action){
            state.marksheetgrad=action.payload;
            console.log(action.payload)

        },
        handleMarksheetpostgrad(state,action){
            state.marksheetpostgrad=action.payload;
            console.log(action.payload)

        },
        handleofferletter(state,action){
            state.offerletter=action.payload;
            console.log(action.payload)

        },
        handlesalaryslip(state,action){
            state.salaryslip=action.payload;
            console.log(action.payload)

        },
        handlebankstatement(state,action){
            state.bankstatement=action.payload;
            console.log(action.payload)

        },
        handleincrementletter(state,action){
            state.incrementletter=action.payload;
            console.log(action.payload)

        },
        handleothers(state,action){
            state.others=action.payload;
            console.log(action.payload)

        },
        validationHandler2(state,action){
            if(state.marksheet10.length===0||state.marksheet12.length===0||state.marksheetgrad.length===0||state.offerletter.length===0||state.salaryslip.length===0||state.bankstatement.length===0){
                alert('Enter the fields that are marked with *')
            }
            else{
                state.pageState=state.pageState+1;

            }
        },
        handleaboutyou1(state,action){
            state.aboutyou1=action.payload;
            console.log(action.payload)
        },
        handleaboutyou2(state,action){
            state.aboutyou2=action.payload;
            console.log(action.payload)
        },
        handleaboutyou3(state,action){
            state.aboutyou3=action.payload;
            console.log(action.payload)
        },
        validationHandler3(state,action){
            if(state.aboutyou1.length===0||state.aboutyou2.length===0||state.aboutyou3.length===0){
                alert('Enter the given fields ->')
            }
            else{
                state.pageState=state.pageState+1;

            }
        },
        handleinterviewEmail(state,action){
            state.interviewEmail=action.payload;
            
        },
        handleinterviewLocation(state,action){
            state.interviewLocation=action.payload;
            
        },
        handleinterviewDate(state,action){
            state.interviewDate=action.payload;
            
        },
        handleinterviewTime(state,action){
            state.interviewTime=action.payload;
            
        },
        handleinterviewTimeZone(state,action){
            state.interviewTimeZone=action.payload;
            
        },
        handleinterviewMedium(state,action){
            state.interviewMedium=action.payload;
            
        },
        validationHandler4(state,action){
            if(state.interviewEmail.length===0||state.interviewDate.length===0||state.interviewLocation.length===0||state.interviewTime.length===0||state.interviewTimeZone===0||state.interviewTimeZone===0){
                alert('fill all the fields for the interview')
            }
            else{
                state.pageState=state.pageState+1;
                console.log(state)
            }
        },
        
        
    }

})
export const actions = HandleInput.actions;
export default HandleInput.reducer;
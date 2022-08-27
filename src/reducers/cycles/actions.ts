import { Cycle } from '../../contexts/CycleContext'

export enum ActionTypes {
  add_new_cycle = 'add_new_cycle',
  interrupt_cycle = 'interrupt_cycle',
  finish_cycle = 'finish_cycle',
}

export const addNewCycleAction = (newCycle: Cycle) => {
  return {
    type: ActionTypes.add_new_cycle,
    payload: {
      newCycle,
    },
  }
}

export const finishCycleAction = () => {
  return {
    type: ActionTypes.finish_cycle,
  }
}

export const interruptCycleAction = () => {
  return {
    type: ActionTypes.interrupt_cycle,
  }
}

import * as S from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CycleContext'

export const NewCycleForm = () => {
  const { activeCycle } = useContext(CyclesContext)

  const { register } = useFormContext()

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        disabled={!!activeCycle}
        placeholder="Dê um nome para o seu projeto"
        {...register('task')}
      />

      <label htmlFor="">durante</label>
      <S.MinutesAmountInput
        type="number"
        id="minutesAmount"
        disabled={!!activeCycle}
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </S.FormContainer>
  )
}

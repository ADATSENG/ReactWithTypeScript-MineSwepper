import React from 'react'

import './button.scss'
import { CellState, CellValue, Face } from '../../types'

interface ButtonProps {
  row: number;
  col: number;
  state: CellState;
  value: CellValue;
  onClick(rowParam: number, colParam: number): (...args: any[]) => void;
  onContext(rowParam: number, colParam: number): (...args: any[]) => void;
  red?: boolean
}

const Button: React.FC<ButtonProps> = ({
  col, onClick, onContext, red, row, state, value }) => {
  const renderContent = (): React.ReactNode => {
    if (state === CellState.Visible) {
      if (value === CellValue.Bomb) {
        return (<span role="img" aria-label="bomb">
          {Face.Bomb}
        </span>)
      } else if (value === CellValue.None) {
        return null
      }
      return value
    } else if (state === CellState.Flagged) {
      // TODO:Display a flag emoji herer
      return (<span role="img" aria-label="flag">
        {Face.Flag}
      </span>)
    }
    return null
  }
  return (<div className={`Button ${
    state === CellState.Visible ? 'visible' : ''} 
  value-${value} ${red ? 'red' : ''}`}
    onClick={onClick(row, col)}
    onContextMenu={onContext(row, col)}
  >
    {renderContent()}
  </div>
  )
}

export default Button
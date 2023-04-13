import React from 'react'
import HookFormEditor from './HookformEditor'

interface Props {
  name: string
  control: any
  title?: string
  defaultValue?: unknown
  disabled?: boolean
}

const EditorWithTitle = ({ name, control, defaultValue, title = '', disabled }: Props) => {
  return (
    <div>
      {/* TODO: use tailwindcss */}
      <p
        style={{
          fontSize: '.8rem',
          fontWeight: 550,
          marginLeft: 5,
        }}
      >
        {title}
      </p>
      <HookFormEditor name={name} control={control} defaultValue={defaultValue} disabled={disabled} />
    </div>
  )
}

export default EditorWithTitle

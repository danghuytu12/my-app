import { Controller } from 'react-hook-form'
import TinyEditor from './editor/TinyEditor'

export const DEFAULT_EDITOR_VALUE = '<p><br></p>'

interface Props {
  name: string
  control: any
  defaultValue?: unknown
  disabled?: boolean
}

/** rich textarea component */
const HookFormEditor = ({ name, control, defaultValue = DEFAULT_EDITOR_VALUE, disabled }: Props) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <TinyEditor onChange={onChange} valueText={value} readonly={disabled} />
        </>
      )}
    />
  )
}

export default HookFormEditor

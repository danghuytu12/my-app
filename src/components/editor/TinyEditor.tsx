import { Editor } from '@tinymce/tinymce-react'

interface IProps {
  onChange: (text: string) => void
  valueText: string
  readonly?: boolean
  height?: number
}

const TinyEditor = ({ onChange, valueText, readonly = false, height = 200 }: IProps) => {
  const init = {
    height,
    readonly,
    menubar: '',
    plugins: 'link image code table autolink',
    toolbar:
      'casechange blocks | bold italic underline | ' +
      'alignleft aligncenter alignright alignjustify | ' +
      'bullist numlist checklist outdent indent | removeformat link table',
    content_css: 'dark',
    skin: 'oxide-dark',
  }

  return (
    <Editor onEditorChange={onChange} apiKey={process.env.NEXT_PUBLIC_TINYMCE_API_KEY} value={valueText} init={init} />
  )
}

export default TinyEditor

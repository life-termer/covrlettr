import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';

function RichText({content}) {
  const options = {
    renderMark: {
      [MARKS.CODE]: text => {
        return (
          <pre>
            <code>{text}</code>
          </pre>
        )
      },
      [MARKS.BOLD]: text => {
        return (
          <span className='font-bold'>{text}</span>
        )
      }
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        if(node.content.find(item => item.marks?.find(mark => mark.type === 'code'))) {
          return (<div>
            <pre>
              <code>{children}</code>
            </pre>
          </div>)
        }
        return <p>{children}</p>
      }
    }
  }
  
  return (
    <div className='prose m-auto max-w-screen-md mb-14'>
      {documentToReactComponents(content, options)}
    </div>
  )
}

export default RichText

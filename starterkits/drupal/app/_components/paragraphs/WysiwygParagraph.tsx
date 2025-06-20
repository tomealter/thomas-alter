import Wysiwyg from '@/source/03-components/Wysiwyg/Wysiwyg';
import { FragmentType, getFragmentData, graphql } from '@/types/__generated__';
import parse from 'html-react-parser';

const WysiwygParagraphFragment = graphql(`
  fragment WysiwygParagraphFragment on ParagraphWysiwyg {
    wysiwyg {
      processed
    }
  }
`);

function WysiwygParagraph({
  paragraph,
}: {
  paragraph: FragmentType<typeof WysiwygParagraphFragment>;
}) {
  const wysiwygParagraph = getFragmentData(WysiwygParagraphFragment, paragraph);
  return (
    <Wysiwyg>
      {wysiwygParagraph.wysiwyg &&
      typeof wysiwygParagraph.wysiwyg.processed === 'string'
        ? parse(wysiwygParagraph.wysiwyg.processed)
        : null}
    </Wysiwyg>
  );
}

export default WysiwygParagraph;
export { WysiwygParagraphFragment };
